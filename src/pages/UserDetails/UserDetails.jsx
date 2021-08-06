import React from 'react'
import './UserDetails.css'
import {useDispatch, useSelector} from "react-redux"
import {setRadioButtonAnswer_AC, endPoll_AC} from "../../redux/actions"
import { useGlobalStyle } from "../globalStyles";
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
  
  const globalClasses = useGlobalStyle();
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

    <div className={globalClasses.root}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Which number do you like more?</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={value} onChange = {e => setValue(e.target.value)}>
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
            <FormControlLabel value="1" control={<Radio />} label="number 1" />
          </RadioGroup>
        </FormControl>

      <div className = {globalClasses.navigationButtons}>
        <Button onClick = {exit}>Exit</Button>
        <Button onClick = {back}>Back</Button>
        <Button onClick = {next}>Next</Button>
      </div>
    </div>
  </>
};

export default UserDetails;