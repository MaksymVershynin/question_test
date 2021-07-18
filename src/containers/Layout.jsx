import React from 'react'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import '../App.css';


const Layout = (props) => {
  return (
    <div className='App'>
      <Header />
      <div className = 'body'>
        {props.children}
      </div>
      <Footer />
    </div>
  )
};

export default Layout;