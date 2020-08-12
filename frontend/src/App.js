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
  BrowserRouter,
  IndexRoute,
} from "react-router-dom";
import { Maincontentpage2 } from "./maincontentpage2/maincontentpage2";
import { SubmitRequest } from "./submitRequest/submitRequest";
import { Changepassword } from "./changepassword/changepassword";
function App() {
  return (
    <Router history={BrowserRouter}>
      <div>
        <Header></Header>
        {/* <Maincontentpage2/> */}
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/submit" component={SubmitRequest} />
        <Route exact path="/changepassword" component={Changepassword} />
        <Route exact path="/maincontentPage" component={Maincontentpage} />
        <Route exact path="/maincontentpage2" component={Maincontentpage2} />
      </div>
    </Router>
  );
}
export default App;
