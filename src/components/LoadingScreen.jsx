import React from 'react';
import { Spinner } from 'react-bootstrap';
import '../styles/LoadingScreen.css';
import logo from '../assets/logo-white-large.png';

const LoadingScreen = ({loading}) => (
  <div className={`LoadingScreen`}>
    <img id="logo" src={logo} alt="Arup logo" />
    <h1 id="app-name">SiteSeeing</h1>
    <Spinner id="spinner" animation="border" role="status" />
  </div>
);

export default LoadingScreen;
