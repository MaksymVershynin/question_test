import React from 'react'
import { Redirect } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import { useGlobalStyle } from "../globalStyles";

import { setCheckBoxAnswer_AC, endPoll_AC } from "../../redux/actions"
import {
  FormGroup,
  Checkbox,
  FormControlLabel,
  Button,
  TextField,
} from '@material-ui/core';

const CheckBox = (props) => {  
  const dispatch = useDispatch(); 
  const globalClasses = useGlobalStyle();

  const answer = useSelector(state => state.checkBoxAnswer)

  const [isRedirectHome, setRedirectHome] = React.useState(false);
  const [isRedirectNext, setRedirectNext] = React.useState(false);
  const [isRedirectBack, setRedirectBack] = React.useState(false);

  const [state, setState] = React.useState(answer ? answer : {
    green: false,
    blue: false,
    red: false,
    checkedOther: false,
    inputColor: ''
  });

  const handleChange = (event) => {
    const {name, checked, value } = event.target
    name === "inputColor"
      ? setState({ ...state, [name]: value })
      : setState({ ...state, [name]: checked });
  };

  const next = () => {
    dispatch( setCheckBoxAnswer_AC(state))
    setRedirectNext(true)
  }

  const back = () => {
    dispatch( setCheckBoxAnswer_AC(state))
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

    <div className={globalClasses.root}>
      <header>CheckBox question section</header>
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
            {
              state.checkedOther && <TextField 
                  name="inputColor"
                  value={state.inputColor}
                  onChange={handleChange}
                  placeholder='input your optione here ...'
                />
            }
            </>
          }
          label={state.checkedOther ? null : "other"}
        />
      </FormGroup>

      <div className = {globalClasses.navigationButtons}>
        <Button onClick = {exit}>Exit</Button>
        <Button onClick = {back} className = {globalClasses.backButton}>Back</Button>
        <Button 
          onClick = {next} 
          className = {globalClasses.nextButton}
          variant="contained"
        >
          Next
        </Button>
      </div>
    </div>
  </>
}
export default CheckBox;