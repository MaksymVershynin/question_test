import React from 'react'
import './Result'
import {useDispatch, useSelector} from "react-redux"
import { deleteResultPoll_AC } from "../../redux/actions"

import { Redirect } from "react-router-dom";

import {

  Button
} from '@material-ui/core';

const UserDetails = (props) => {
  
  const dispatch = useDispatch(); 
  const [isRedirectHome, setRedirectHome] = React.useState(false);


  const exit = () => {
    dispatch(deleteResultPoll_AC());
    setRedirectHome(true)
  }

  return <>
    <div>Result section</div>
    {isRedirectHome && <Redirect to ='/' />}


    <Button onClick = {exit}>Home Page</Button>

  </>
};

export default UserDetails;