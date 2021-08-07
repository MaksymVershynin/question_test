import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { makeStyles, Button } from '@material-ui/core';

import { useGlobalStyle } from "./globalStyles";
import {startPoll_AC} from "../redux/actions";





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

  const startPoll = () => {
    dispatch(startPoll_AC());
    return <Link to="/radio_button" />
  }

  return <div className={globalClasses.root} >
    {isPollStarted && <Redirect to ='/radio_button' />}
    <header>Home page</header>
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