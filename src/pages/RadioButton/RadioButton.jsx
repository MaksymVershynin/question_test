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
  const [value, setValue] = React.useState(answer);
  const [isOtherOpen, setOtherOpen] = React.useState(false);

const exit = () => {
  dispatch(endPoll_AC());
  setRedirect(true)
}
  return <>
    {isRedirect && <Redirect to ='/' />}
    <div>RadioButton question section</div>

    <FormControl component="fieldset">
      <FormLabel component="legend">Which number do you like more?</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange = {event => setValue(event.target.value)}>
        <FormControlLabel value="1" control={<Radio />} label="number 1" />
        <FormControlLabel value="2" control={<Radio />} label="number 2" />
        {value === "other" ?
          <TextField 
            type="number"
            id='other-radio_button'
            label = 'your number'
            onChange = {event => setValue(event.target.value)}
            required
          />
          :
          <FormControlLabel onClick = {() => setOtherOpen(true)} value = "other" control={<Radio />} label="Other" />
        }
      </RadioGroup>
    </FormControl>

    <Button onClick = {() => dispatch(setRadioButtonAnswer_AC(value))}>Next</Button>

    <div>Your answer --&gt; {value}</div>
    <Button onClick = {exit}>Exit</Button>
  </>
};

export default RadioButton;