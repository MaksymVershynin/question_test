import React from 'react'
import { BrowserRouter , Switch, Route, Redirect } from "react-router-dom";

import Layout from '../containers/Layout';

import HomePage from './HomePage';
import RadioButton from './RadioButton/RadioButton';
import CheckBox from './CheckBox/CheckBox';
import UserDetails from './UserDetails/UserDetails';
import File from './File/File';

const AppRouter = (props) => {
  return (
    <BrowserRouter >
      {/* <Layout history={history} location={props.location}> */}
        <Switch>
          {/* <Redirect from='/' exact to={'/home'} /> */}
          <Route exact path="/"  component={HomePage}/>
          <Route path='/radio_button' component={RadioButton}/>
          <Route path='/check_box'  component={CheckBox}/>
          <Route path='/user_details' component={UserDetails}/>
          <Route path='/file' component={File}/>
          {/* <Route path='/find_grave' location={props.location} component={FindGraveRouter}/> */}
          {/* <Route path='/learn_more' location={props.location} component={LearnMore}/> */}
        </Switch>
      {/* </Layout> */}
    </BrowserRouter >
  )
};

export default AppRouter;