import React from 'react'
import './UserDetails.css'
import {useDispatch, useSelector} from "react-redux"
import {setRadioButtonAnswer_AC, endPoll_AC} from "../../redux/actions"

import { Redirect } from "react-router-dom";

import {

  Button
} from '@material-ui/core';

const UserDetails = (props) => {
  
  const dispatch = useDispatch(); 
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


    <Button onClick = {exit}>Exit</Button>
    <Button onClick = {back}>Back</Button>
    <Button onClick = {next}>Next</Button>
  </>
};

export default UserDetails;