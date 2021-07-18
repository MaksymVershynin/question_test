import React from 'react'
import './UserDetails.css'
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

const UserDetails = (props) => {
  
  const dispatch = useDispatch(); 
  const [value, setValue] = React.useState();

  const [isRedirectHome, setRedirectHome] = React.useState(false);
  const [isRedirectNext, setRedirectNext] = React.useState(false);
  const [isRedirectBack, setRedirectBack] = React.useState(false);
  const next = () => {
    // dispatch(
    //   setRadioButtonAnswer_AC(
    //     value === "other"
    //       ? {isOther: true, value: other_answer}
    //       : {isOther: false, value: value}
    //   )
    // )
    setRedirectNext(true)
  }

  const back = () => {
    // dispatch(
    //   setRadioButtonAnswer_AC(
    //     value === "other"
    //       ? {isOther: true, value: other_answer}
    //       : {isOther: false, value: value}
    //   )
    // )
    setRedirectBack(true)
  }

  const exit = () => {
    dispatch(endPoll_AC());
    setRedirectHome(true)
  }

  return <>
    <div>UserDetails question section</div>
    {isRedirectHome && <Redirect to ='/' />}
    {isRedirectNext && <Redirect to ='/file' />}
    {isRedirectBack && <Redirect to ='/check_box' />}

    <form onSubmit={exit}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Which number do you like more?</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange = {e => setValue(e.target.value)}>
          <FormControlLabel value="1" control={<Radio />} label="number 1" />
          {value === "other" ?
            <TextField 
              value = {223}
              type="number"
              id='other-for-radio_button'
              label = 'your number'
              onChange = {event => console.log(event.tartget.value)}
              required
            />
            :
            <FormControlLabel value = "other" control={<Radio />} label="Other" />
          }
        </RadioGroup>
      </FormControl>
      <Button  type ="submit">Exit</Button>
    </form>


    <Button onClick = {exit}>Exit</Button>
    <Button onClick = {back}>Back</Button>
    <Button onClick = {next}>Next</Button>
  </>
};

export default UserDetails;