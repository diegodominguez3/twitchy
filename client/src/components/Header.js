import logo from '../assets/img/twitchytv.png'
import React from 'react';
import {Link} from 'react-router-dom';  
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" width="180"/>
        </Link>
      <div className="right menu">
        <Link to="/" className="item">All Streams</Link>
        <GoogleAuth/>
      </div>
    </div>
  ); 
}

export default Header;