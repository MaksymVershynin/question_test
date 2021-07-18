import React, { useState, useEffect } from 'react'
import {Helmet} from "react-helmet";
import Header from '../containers/dev_components/Header/Header';
import Footer from '../containers/dev_components/Footer/Footer';
import '../App.css';
import Modal from '@material-ui/core/Modal';
import { Link } from "react-router-dom";
import ModalBg from '../img/ModalBg.png';
import ModalSub from '../img/ModalSub.svg';
import { Button, makeStyles } from '@material-ui/core';
import BirdImage from '../img/Bird.svg';

const useStyles = makeStyles(() => ({
  rootCancel: {
    marginRight: '58px',
    borderRadius: '10px',
    backgroundColor: '#d8d8d8',
    width: '299px',
    height: '51px',
    color: '#fff',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '19px',
    textAlign: 'center',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#d8d8d8',
    },
    '@media (max-width: 750px)': {
      marginRight: '0px',
      marginTop: '16px'
    }
  },
  //responsive_margin_due_fixed_header
  body: {
    marginTop: '90px',
    '@media (max-width: 532px)':{
      marginTop: '65px'
    }
  }
}))

const Layout = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    props.history.push('/auth')
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const defaultDescription = `Are you looking to find or create a meaningful grave? Nettgrav.no is a private and personal network that gives modern families the opportunity to continue the love they have for deceased with pictures, films, words and music. Find or create a virtual grave here - nettgrav.no.`;
  const [title, setTitle] = useState("Nettgrav.no");
  const [description, setDescription] = useState(defaultDescription);

  useEffect(() => {
    fetch(`https://dev.gravstedet.no/admin_panel/search_engine_optimisations?url=${props.history.location.pathname}`,{headers: {"Authorization": "Bearer " + localStorage.getItem("token")}})
    .then(res=> res.json())
    .then(data => {
      if(data.content !== null && data.content !== undefined) {
        setTitle(data.content?.title);
        setDescription(data.content?.description);
      } else {
        setTitle("Nettgrav.no");
        setDescription(defaultDescription);
      }
    })
    .catch(err => console.log(err))
  },[props.history.location.pathname])

  const body = (
    <div className='deceased-modal'>
      <div className="bird-why">
        <img loading='lazy' src={BirdImage} alt="bird" className='bird-why_bird'/>
        <span className='bird-why_why'>WHY?</span>
      </div>
      <div className="deceased-modal_image-block">
        <img loading='lazy' src={ModalBg} alt="ModalBg" className='deceased-modal_image'/>
        <img loading='lazy' src={ModalSub} alt="ModalSub" className='deceased-modal_sub'/>
      </div>
      <span className='deceased-modal_text'>
        To access <span>deceased page</span> you need a <span>‘Conscious’</span> membership
      </span>
      <div className='deceased-modal_btn-group'>
        <Button className={classes.rootCancel} onClick={handleCloseModal}>Come back</Button>
        <Link to="/deceased" className='deceased-modal_confir-link'>
          <Button className='deceased-modal_confirmation' onClick={handleCloseModal}>Subscribe</Button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className='App'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header onClick={handleClick} handleOpenModal={handleOpenModal} history={props.history}/>
      <Modal
        open={open}
        onClose={handleCloseModal}
      >
        {body}
      </Modal>
      <div className = {classes.body}>
        {props.children}
      </div>
      <Footer location = {props.history.location}/>
    </div>
  )
};

export default Layout;