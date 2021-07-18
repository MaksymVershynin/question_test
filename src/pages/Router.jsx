import React from 'react'
import { BrowserRouter , Switch, Route, useHistory, Redirect, Link } from "react-router-dom";
import { useSelector} from "react-redux"
import Layout from '../containers/Layout';

import HomePage from './HomePage';
import RadioButton from './RadioButton/RadioButton';
import CheckBox from './CheckBox/CheckBox';
import UserDetails from './UserDetails/UserDetails';
import File from './File/File';

const AppRouter = (props) => {

  const history = useHistory();
  const isPollStarted = useSelector(state => state.isPollStarted);

  // console.log(isPollStarted)
  return (
    <BrowserRouter >
      <Layout>
        <Switch>
          {/* <Redirect from='/' exact to={'/home'} /> */}
          {/* {!isPollStarted && <Redirect to={'/'} />} */}
          <Route exact path="/" history component={HomePage}/>
          <Route path='/radio_button' history component={RadioButton}/>
          <Route path='/check_box'  history component={CheckBox}/>
          <Route path='/user_details' history component={UserDetails}/>
          <Route path='/file' history component={File}/>
        </Switch>
      </Layout>
    </BrowserRouter >
  )
};

export default AppRouter;