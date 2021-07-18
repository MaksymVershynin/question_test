import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {startPoll_AC} from "../redux/actions"

import { Redirect, Link } from "react-router-dom";

const HomePage = (props) => {
  const dispatch = useDispatch();
  const isPollStarted = useSelector(state => state.isPollStarted);

  // console.log(useSelector(state => state.radioButtonAnswer))

  const startPoll = () => {
    dispatch(startPoll_AC());
    return <Link to="/radio_button" />
  }

  return <>
    {isPollStarted && <Redirect to ='/radio_button' />}
    <div>Welcome to our Poll</div>
    <span>Please click on the button to go first question</span>
    <button onClick = {startPoll}>Start Poll!</button>
  </>
};

export default HomePage;