import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import "./profile.css";
import logo from "../images/logo.png";
import login from "../images/login.png";

import Logout from "../logout/logout";
class Nav extends Component {
  constructor(props) {
    super(props);
    this.log = this.log.bind(this);
  }

  log(){
    console.log("hi nitin")
    alert("hello everyone");
    window.localStorage.clear();
    window.location = "/home";

  }
  render() {
    return (
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <img className="logos" src={logo} />
          <img className="logoimage" src={login} />
          <div style={{ marginLeft: "2%" }}>
            <a
              className="dropdownss"
              class="nav-link dropdown-toggle text-dark"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Username
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
              <a class="dropdown-item" to="/submitRequest" href="submitRequest">
                Submit Request
              </a>
              <Logout logout={this.log} />
              {/* <a  class="dropdown-item" onClick={()=> this.logout()}> */}
              {/* Logout
            </a> */}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Nav;
