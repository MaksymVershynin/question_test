import React from 'react';
import './styles.js';

import { useGlobalStyle } from "../globalStyles";

import {useDispatch, useSelector} from "react-redux";
import {setRadioButtonAnswer_AC, endPoll_AC} from "../../redux/actions";

import { Redirect } from "react-router-dom";

import { 
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  Button
} from '@material-ui/core';


const RadioButton = (props) => {
  const dispatch = useDispatch();
  const globalClasses = useGlobalStyle();

  const answer = useSelector(state => state.radioButtonAnswer)

  const [isRedirectHome, setRedirectHome] = React.useState(false);
  const [isRedirectNext, setRedirectNext] = React.useState(false);
  const [value, setValue] = React.useState(answer?.isOther ? "other" : answer?.value);
  const [other_answer, setOtherAnswer] = React.useState(answer?.isOther && answer?.value);

  const next = () => {
    dispatch(
      setRadioButtonAnswer_AC(
        value === "other"
          ? {isOther: true, value: other_answer}
          : {isOther: false, value: value}
      )
    )
    setRedirectNext(true)
  }

  const exit = () => {
    dispatch(endPoll_AC());
    setRedirectHome(true)
  }

  return <div className = {globalClasses.root}>
    {isRedirectHome && <Redirect to ='/' />}
    {isRedirectNext && <Redirect to ='/check_box' />}
    
    <div className = {globalClasses.header}>RadioButton question section</div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Which number do you like more?</FormLabel>
        <RadioGroup aria-label="numbers" name="number_name" value={value} onChange = {e => setValue(e.target.value)}>
          <FormControlLabel value="1" control={<Radio />} label="number 1" />
          <FormControlLabel value="2" control={<Radio />} label="number 2" />
          <FormControlLabel value="3" control={<Radio />} label="number 3" />
          <FormControlLabel value="4" control={<Radio />} label="number 4" />
          {value === "other" ?
            <TextField 
              value = {other_answer}
              type="number"
              id='other-for-radio_button'
              label = 'your number'
              onChange = {event => setOtherAnswer(event.target.value)}
            />
            :
            <FormControlLabel value = "other" control={<Radio />} label="Other" />
          }
        </RadioGroup>
      </FormControl>
    
    <div>Please, confirm your new answer by clicking on the button "Next" </div>
    <div>Your new answer --&gt; {value === "other" ? other_answer : value}</div>
    <div>Your current answer --&gt; {answer?.value}</div>

    <div className = {globalClasses.navigationButtons}>
      <Button onClick = {exit}>Exit</Button>
      <Button className = {globalClasses.nextButton} variant = "contained" onClick = {next}>Next</Button>
    </div>

    </div>
};

export default RadioButton;