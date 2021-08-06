import React from 'react'
import { useGlobalStyle } from "./globalStyles"
import {useDispatch, useSelector} from "react-redux"
import {startPoll_AC} from "../redux/actions"

import { makeStyles, Button } from '@material-ui/core';

import { Redirect, Link } from "react-router-dom";


const useLocalStyle = makeStyles(() => ({
  title: {
    marginTop: "20px",
    fontSize: "29px",
    fontWeight: "bold",
    color: "orange"
  },
  list: {
    color: "brown"
  },
  label: {
    margin: "40px 0 30px"
  }
}));

const HomePage = (props) => {
  const dispatch = useDispatch();
  const classes = useLocalStyle();
  const globalClasses = useGlobalStyle();
  const isPollStarted = useSelector(state => state.isPollStarted);

  console.log(useSelector(state => state))

  const startPoll = () => {
    dispatch(startPoll_AC());
    return <Link to="/radio_button" />
  }

  return <div className={globalClasses.root} >
    {isPollStarted && <Redirect to ='/radio_button' />}
    <div className={globalClasses.header}>Home page</div>
    <div className={classes.title}>Welcome to our Poll</div>

    <ul className={classes.list}>
      <li>RadioButton question</li>
      <li>CheckBox question</li>
      <li>User details</li>
      <li>File</li>
    </ul>

    <span className={classes.label}>Please click on the button to go first question</span>

    <Button 
      className={globalClasses.mainButton}
      onClick = {startPoll}
      variant="contained"
    >
      Start Poll!
    </Button>
  </div>
};

export default HomePage;