import React from 'react'
import './RadioButton.css'
import {useDispatch, useSelector} from "react-redux"
import {setRadioButtonAnswer_AC, endPoll_AC} from "../../redux/actions"

import { Redirect, Link } from "react-router-dom";

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

  const [isRedirect, setRedirect] = React.useState(false);

  console.log(answer)

  const [value, setValue] = React.useState(answer?.isOther ? "other" : answer.value);
  const [other_answer, setLocalAnswer] = React.useState(answer?.isOther ? answer.value : "other");

  console.log(value)

const handleChange = (event) => {
  setValue(event.target.value)
}

  const exit = () => {
    dispatch(endPoll_AC());
    setRedirect(true)
  }

  return <>
    {isRedirect && <Redirect to ='/' />}
    <div>RadioButton question section</div>
    <form onSubmit={exit}>
    <FormControl component="fieldset">
      <FormLabel component="legend">Which number do you like more?</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange = {handleChange}>
        <FormControlLabel value="1" control={<Radio />} label="number 1" />
        <FormControlLabel value="2" control={<Radio />} label="number 2" />
        {value === "other" ?
          <TextField 
            value = {other_answer}
            type="number"
            id='other-for-radio_button'
            label = 'your number'
            onChange = {event => setLocalAnswer(event.target.value)}
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
    <div>Your current answer --&gt; {answer.value}</div>
    <Button onClick = {() => dispatch(setRadioButtonAnswer_AC(value === "other" ? {isOther: true, value: other_answer} : {isOther: false, value: value}))}>Next</Button>

  </>
};

export default RadioButton;