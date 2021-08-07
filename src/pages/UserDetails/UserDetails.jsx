import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {setUserOption_AC, setUserDetails_AC, endPoll_AC} from "../../redux/actions"
import { useGlobalStyle } from "../globalStyles";
import { Redirect } from "react-router-dom";

import { useStyles } from "./styles";
import clsx from 'clsx';

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
  const localStyles = useStyles();
  const dispatch = useDispatch(); 

  const [isRedirectHome, setRedirectHome] = React.useState(false);
  const [isRedirectNext, setRedirectNext] = React.useState(false);
  const [isRedirectBack, setRedirectBack] = React.useState(false);

  const userDetails = useSelector(state => state.userDetails);
  const value = userDetails.option;

  const [name, setName] = React.useState(userDetails.name);
  const [surname, setSurname] = React.useState(userDetails.surname);
  const [email, setEmail] = React.useState(userDetails.email);
  const [phone, setPhone] = React.useState(userDetails.phone);
  const [address, setAddress] = React.useState(userDetails.address);

  const exit = () => {
    dispatch(endPoll_AC());
    setRedirectHome(true)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(setUserDetails_AC({
      name,
      surname,
      email,
      phone,
      address
    }))
    dispatch(setUserOption_AC("filled"))
  }

  const next = () =>{
    if(value !== "filled" && value !== "noUser") alert('chose "nothing" checkbox or fill completly "other" of user details')
    else  setRedirectNext(true)
  }
  return <>
    {isRedirectHome && <Redirect to ='/' />}
    {isRedirectNext && <Redirect to ='/file' />}
    {isRedirectBack && <Redirect to ='/check_box' />}

    <div className={globalClasses.root}>
        <FormControl component="fieldset">
          <FormLabel component="legend">UserDetails question section</FormLabel>
          <RadioGroup  value={value} onChange = {e => dispatch(setUserOption_AC(e.target.value))}>

            {
              value === "other" ? <form className = {clsx(localStyles.userForm, localStyles.radioGroup)} onSubmit = {handleSubmit} required>
              <FormLabel className = {localStyles.formTitle}>User info (all fields are required)</FormLabel>
              <TextField 
                label = "name"
                required
                value = {name}
                onChange = {e => setName(e.target.value)}
              />
              <TextField 
                label = "surname"
                required
                value = {surname}
                onChange = {e => setSurname(e.target.value)}
              />
              <TextField 
                label = "email"
                required
                value = {email}
                onChange = {e => setEmail(e.target.value)}
                />
              <TextField
                label = "phone"
                required
                value = {phone}
                onChange = {e => setPhone(e.target.value)}
              />
              <TextField
                label = "address"
                required
                value = {address}
                onChange = {e => setAddress(e.target.value)}
              />
              <Button type='submit' variant ="contained">Save</Button>
            </form>
              : 
              <FormControlLabel value = {value === "filled" ? value : "other"} control={<Radio />} label="Other" className = {localStyles.radioGroup}  />
            }

            <FormControlLabel value="noUser" control={<Radio />} label="nothing" className = {localStyles.radioGroup}/>
          </RadioGroup>
        </FormControl>

      <div className = {globalClasses.navigationButtons}>
        <Button onClick = {exit}>Exit</Button>
        <Button onClick = {() => setRedirectBack(true)} className = {globalClasses.backButton}>Back</Button>
        <Button 
          onClick = {next} 
          variant="contained"
          className = {globalClasses.nextButton}
        >
          Next
        </Button>
      </div>
    </div>
  </>
};

export default UserDetails;