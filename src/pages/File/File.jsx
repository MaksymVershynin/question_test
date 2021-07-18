import React from 'react'
import './File.css'
import { Redirect } from "react-router-dom";
import {setRadioButtonAnswer_AC, endPoll_AC} from "../../redux/actions"
import {useDispatch, useSelector} from "react-redux"

import {

  Button
} from '@material-ui/core';

const File = (props) => {
  const dispatch = useDispatch(); 
  const [isRedirectHome, setRedirectHome] = React.useState(false);
  const [isRedirectResult, setRedirectResult] = React.useState(false);
  const [isRedirectBack, setRedirectBack] = React.useState(false);

  const result = () => {
    // dispatch(
    //   setRadioButtonAnswer_AC(
    //     value === "other"
    //       ? {isOther: true, value: other_answer}
    //       : {isOther: false, value: value}
    //   )
    // )
    setRedirectResult(true)
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
    <div>File question section</div>
    {isRedirectHome && <Redirect to ='/' />}
    {isRedirectResult && <Redirect to ='/result' />}
    {isRedirectBack && <Redirect to ='/user_details' />}


    <Button onClick = {exit}>Exit</Button>
    <Button onClick = {back}>Back</Button>
    <Button onClick = {result}>Finish</Button>
    
  </>
};

export default File;