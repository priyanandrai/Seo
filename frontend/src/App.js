import React, { Component, Fragment } from "react";
import Nav from "./profile/nav";

import "./App.css";
import HOC from "./components/HOC";
import Maincontentpage from "./maincontentpage/maincontentpage";
import Header from "./components/Header";
import Login from "./components/login";
import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Logout from "./logout/logout";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Maincontentpage2 from "./maincontentpage2/maincontentpage2";
// import Header from './components/Header';
import SubmitRequest from "./submitRequest/submitRequest";
import Changepassword from "./changepassword/changepassword"
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Nav></Nav>
          <Route path="/logout" component={Logout} />
          {/* <Redriect from="/SubmitRequest/" to="/submitRequest/" /> */}
        <Route path="/submitRequet" component={SubmitRequest} /> 
        <Route path="/changepassword" component={Changepassword} /> 
        </Switch>
        <Maincontentpage2/>

      </div>
    </Router>
  );
}
export default App;
