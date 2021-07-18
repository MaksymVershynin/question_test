import React from 'react'
import './File.css'
import { Redirect } from "react-router-dom";
import {setFile_s_AC, endPoll_AC} from "../../redux/actions"
import {useDispatch, useSelector} from "react-redux"

import {

  Button
} from '@material-ui/core';

const File = (props) => {
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
    // console.log(file223)
    setRedirectResult(true)
  }

  function test() {
    // dispatch( setCheckBoxAnswer_AC(state) );
    //   console.log(state)
  }
  const back = () => {
    dispatch(setFile_s_AC(file223))
    setRedirectBack(true)
  }

  const exit = () => {
    dispatch(endPoll_AC());
    setRedirectHome(true)
  }

  function t223 (data){
    var MIME_TYPE = "text/csv";

    var blob = new Blob([data], {type: MIME_TYPE});
    window.location.href = window.URL.createObjectURL(blob);
}

  return <>
    <div>File question section</div>
    {isRedirectHome && <Redirect to ='/' />}
    {isRedirectResult && <Redirect to ='/result' />}
    {isRedirectBack && <Redirect to ='/user_details' />}

    <input 
      ref={inputFile} 
      type='file' 
      onChange={uploadDeathCertificate}
    />

    <Button onClick = {exit}>Exit</Button>
    <Button onClick = {back}>Back</Button>
    <Button onClick = {result}>Submit</Button>
  </>
};

export default File;