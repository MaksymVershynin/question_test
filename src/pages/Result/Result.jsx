import React from 'react'
import './Result'
import { useGlobalStyle } from "../globalStyles";
import {useDispatch, useSelector} from "react-redux"
import { deleteResultPoll_AC, endPoll_AC } from "../../redux/actions"

import { Redirect } from "react-router-dom";

import {

  Button
} from '@material-ui/core';

const UserDetails = (props) => {
  
  const dispatch = useDispatch(); 
  const globalClasses = useGlobalStyle();
  const [isRedirectHome, setRedirectHome] = React.useState(false);
  const [resultColor_default, setResultColor_default] = React.useState('');
  const [resultColor_custom, setResultColor_custom] = React.useState('');

  const {radioButtonAnswer, checkBoxAnswer, userDetails, file_s} = useSelector(state => state)

// console.log(checkBoxAnswer)

 React.useEffect(() =>{
    if(checkBoxAnswer) for (const [key, value] of Object.entries(checkBoxAnswer)) {
      if(value) {
        if(key === "inputColor") {setResultColor_custom(value)}
        else {key !== "checkedOther" && setResultColor_default(key)}
      }
    }
    console.log(userDetails)
  },[])

  const exit = () => {
    dispatch(endPoll_AC());
    dispatch(deleteResultPoll_AC());
    setRedirectHome(true)
  }

  return <>
    {isRedirectHome && <Redirect to ='/' />}

    <div className={globalClasses.root}>
      <header>Result section</header>

      <div>Radio Button: {radioButtonAnswer?.value}</div>

      <div>Checkbox: {resultColor_custom} {resultColor_default}</div>

      <div>
        User details: 
        {userDetails.option !== 'noUser' && <ul>
          <li>name: {userDetails.name}</li>
          <li>surname: {userDetails.surname}</li>
          <li>email: {userDetails.email}</li>
          <li>phone: {userDetails.phone}</li>
          <li>address: {userDetails.address}</li>
        </ul>}
      </div>

      <div>
        File name: {file_s?.file?.name} 
        {file_s?.file?.name && <a download={file_s?.file?.name} href={file_s?.content}>Download</a>} 
      </div>
      
      <div className = {globalClasses.navigationButtons}>
        <Button onClick = {exit} variant="contained">Home Page</Button>
      </div>
    </div>
  </>
};

export default UserDetails;