import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Redirect } from "react-router-dom";
import {setFile_s_AC, endPoll_AC} from "../../redux/actions"
import { useGlobalStyle } from "../globalStyles";
import { Button } from '@material-ui/core';

const File = (props) => {
  const globalClasses = useGlobalStyle();
  const dispatch = useDispatch(); 
  const [isRedirectHome, setRedirectHome] = React.useState(false);
  const [isRedirectResult, setRedirectResult] = React.useState(false);
  const [isRedirectBack, setRedirectBack] = React.useState(false);

  const inputFile = React.useRef();
  const [file223, setFile223] = React.useState();

  const uploadDeathCertificate = (certificate) => {
    const reader = new FileReader();
    const file = certificate.target.files[0];
    if(file) {
      reader.readAsDataURL(file);
      reader.addEventListener('load', () => {
          const newFile = {
            id: Date.now().toString(),
            content: reader.result,
            file: file
          };
          setFile223(newFile)
      })
    }
}

  const result = () => {
    dispatch(setFile_s_AC(file223))
    setRedirectResult(true)
  }

  const back = () => {
    dispatch(setFile_s_AC(file223))
    setRedirectBack(true)
  }

  const exit = () => {
    dispatch(endPoll_AC());
    setRedirectHome(true)
  }

  return <>
    {isRedirectHome && <Redirect to ='/' />}
    {isRedirectResult && <Redirect to ='/result' />}
    {isRedirectBack && <Redirect to ='/user_details' />}

    <div className={globalClasses.root}>
      <header>File question section</header>
      <input 
        ref={inputFile} 
        type='file' 
        onChange={uploadDeathCertificate}
      />

      <div className = {globalClasses.navigationButtons}>
        <Button onClick = {exit}>Exit</Button>
        <Button onClick = {back} className = {globalClasses.backButton}>Back</Button>
        <Button onClick = {result} variant="contained">Submit</Button>
      </div>
    </div>
  </>
};

export default File;