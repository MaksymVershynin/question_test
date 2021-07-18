import React from 'react'
import './CheckBox.css'

import { Redirect } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { endPoll_AC } from "../../redux/actions"

import {
  FormGroup,
  Checkbox,
  FormControlLabel,
  Button
} from '@material-ui/core';

const CheckBox = (props) => {  
  const dispatch = useDispatch(); 
  const [isRedirectHome, setRedirectHome] = React.useState(false);
  const [isRedirectNext, setRedirectNext] = React.useState(false);
  const [isRedirectBack, setRedirectBack] = React.useState(false);

  const [state, setState] = React.useState({
    green: false,
    blue: false,
    red: false,
    checkedOther: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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
    {isRedirectHome && <Redirect to ='/' />}
    {isRedirectNext && <Redirect to ='/user_details' />}
    {isRedirectBack && <Redirect to ='/radio_button' />}

    <div>CheckBox question section</div>
    <FormGroup row>
      <FormControlLabel
        control={
        <Checkbox 
          checked={state.green}
          onChange={handleChange}
          name="green" 
        />
      }
        label="Green"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.blue}
            onChange={handleChange}
            name="blue"
          />
        }
        label="blue"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.red}
            onChange={handleChange}
            name="red"
          />
        }
        label="red"
      />
       <FormControlLabel
        control={<>
          <Checkbox
            checked={state.checkedOther}
            onChange={handleChange}
            name="checkedOther"
          />
          {state.checkedOther && <input/>}
          </>
        }
        label={state.checkedOther ? null : "other"}
      />
    </FormGroup>

    <Button onClick = {exit}>Exit</Button>
    <Button onClick = {back}>Back</Button>
    <Button onClick = {next}>Next</Button>
  </>;
}
export default CheckBox;