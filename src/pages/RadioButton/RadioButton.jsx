import React from 'react'
import './RadioButton.css'
import {useDispatch, useSelector} from "react-redux"
import {setRadioButtonAnswer_AC, endPoll_AC} from "../../redux/actions"

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

  return <>
    {isRedirectHome && <Redirect to ='/' />}
    {isRedirectNext && <Redirect to ='/check_box' />}

    <div>RadioButton question section</div>
    <form onSubmit={exit}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Which number do you like more?</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange = {e => setValue(e.target.value)}>
          <FormControlLabel value="1" control={<Radio />} label="number 1" />
          <FormControlLabel value="2" control={<Radio />} label="number 2" />
          {value === "other" ?
            <TextField 
              value = {other_answer}
              type="number"
              id='other-for-radio_button'
              label = 'your number'
              onChange = {event => setOtherAnswer(event.target.value)}
              required
            />
            :
            <FormControlLabel value = "other" control={<Radio />} label="Other" />
          }
        </RadioGroup>
      </FormControl>
      <Button  type ="submit">Exit</Button>
    </form>
    
    <div>Please, confirm your new answer by clicking on the button "Next" </div>
    <div>Your new answer --&gt; {value === "other" ? other_answer : value}</div>
    <div>Your current answer --&gt; {answer?.value}</div>
    <Button onClick = {next}>Next</Button>

  </>
};

export default RadioButton;