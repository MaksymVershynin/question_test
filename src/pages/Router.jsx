import React from 'react'
import { BrowserRouter , Switch, Route, useHistory, Redirect, Link } from "react-router-dom";
import { useSelector} from "react-redux"
import Layout from '../containers/Layout';

import HomePage from './HomePage';
import RadioButton from './RadioButton/RadioButton';
import CheckBox from './CheckBox/CheckBox';
import UserDetails from './UserDetails/UserDetails';
import File from './File/File';
import Result from './Result/Result';

const AppRouter = (props) => {

  return (
    <BrowserRouter >
      <Layout>
        <Switch>
          <Route exact path="/" history component={HomePage}/>
          <Route path='/radio_button' history component={RadioButton}/>
          <Route path='/check_box'  history component={CheckBox}/>
          <Route path='/user_details' history component={UserDetails}/>
          <Route path='/file' history component={File}/>
          <Route path='/result' history component={Result}/>
        </Switch>
      </Layout>
    </BrowserRouter >
  )
};

export default AppRouter;