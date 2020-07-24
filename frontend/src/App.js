import React, { Component, Fragment } from "react";
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import './App.css';
 import HOC from './components/HOC'
 import Maincontentpage from './maincontentpage/maincontentpage'
import Header from "./components/Header";
import { Provider } from "react-redux";
import Footer from "./components/Footer";
// import Header from './components/Header';
function App() {
    return (
      <div>
        <Header></Header>
        <Maincontentpage></Maincontentpage>
        <HOC></HOC>
          {/* <Footer></Footer> */}
    </div>
    
  );
}

export default App;
