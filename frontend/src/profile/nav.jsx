import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./profile.css";
import logo from "../images/logo.png";
import login from "../images/login.png";

import Logout from "../logout/logout";
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: true,
      user: "Francis",
    };
  }

  log = () => {
    console.log("hi nitin");
    alert("hello everyone");
    window.localStorage.clear();
    window.location = "/home";
  };
  render() {
    return (
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <img className="logos" src={logo} />

<<<<<<< HEAD
          {this.state.isLogged == true ? (
            <div className="ml-auto">
              <div className="d-flex">
                <a class="navbar-brand mr-0" href="#">
                  <img width="30" height="30" src={login} />
                </a>
                <a
                  className="dropdownss"
                  class="nav-link dropdown-toggle text-dark"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {this.state.user}
                </a>
                <div
                  className="ml-5"
                  class="dropdown-menu dropdown-menu-right "
                  aria-labelledby="navbarDropdown"
                >
                  <a class="dropdown-item" href="#">
                    View Profile
                  </a>
                  <a class="dropdown-item" href="/changepassword">
                    Change Password
                  </a>
=======
              <a class="dropdown-item" href="/submitRequest">
                Submit Request
              </a>
>>>>>>> 3fafb91398faaa29afddcb63cdcd47b5eb221d8b

                  <a class="dropdown-item" href="/submitRequest">
                    Submit Request
                  </a>

                  <Logout logout={this.log} />
                </div>
              </div>
            </div>
          ) : (
            <a className="nav-link text-dark ml-auto" role="button">
              Login
            </a>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

export default Nav;
