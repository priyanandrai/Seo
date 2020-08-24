import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./profile.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/semantic-ui.css";
import logo from "../images/logo.png";
import login from "../images/login.png";
import "../style/quest.css";
import "../App.css";
import { NavLink } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../actions/auth";
import Confirmotp from "../confirmotp/confirmotp";
import axios from 'axios';
import TextField from "@material-ui/core/TextField";

import Input from "../components/Input";
import Label from "../components/Label";
import Button from "../components/Button";
import { getAuthData, isLoggedIn } from "../utils";
import Dialog from "@material-ui/core/Dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Checkbox from "@material-ui/core/Checkbox";
import {getBaseUrl}  from "../utils"

import {
  faWindowClose,
  faKey,
  faEnvelope,
  faUser,
  faTimes,
  faBars,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import Logout from "../logout/logout";
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      
      dialogBox: false,
      // dialogBox1:true,
      dialogBox2:true,

      isLogged: false,
      phone: "",
      otp: "",
      user: "Francis",
      show_account_dropdown: false,
      modal_open: false,
      modal_type: "",
      full_name: "",
      email: "",
      password: "",
      confirm_password: "",
      // checkbox: false,
      button_status: "disabled",
      register: false,
      getintouch: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handelOnChange = this.handelOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.logout = this.logout.bind(this);
  }
  // otpconfirm = () =>{
  //   window.location
  // }
  chnagepass = () => {
    window.location = "/changepassword";
  }
  Confirmotp = () => {
    window.location = "/dashboard";
  };

  componentWillMount() {
    let temp = window.localStorage.getItem("isLoggedIn");
    // alert(temp)
    if (temp == true || temp == "true") {
      this.setState({
        isLogged: true,
        user: window.localStorage.getItem("user"),
      });
    }
  }

  logout = () => {
    window.localStorage.clear();
    window.location = "/home";
  };

  openModal(type) {
    if (type == "contactus") {
      window.open("http://srcservicesltd.com/contactus");
      return;
    }

    this.closeModal();
    this.setState({
      modal_open: true,
      modal_type: type,
    });
  }

  closeModal() {
    this.setState({
      modal_open: false,
      modal_type: "",
      phone: "",
      full_name: "",
      email: "",
      password: "",
      confirm_password: "",
      checkbox: false,
      button_status: false,
    });
  }

  handelOnChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleOnSubmit(event) {
    window.localStorage.setItem("isLoggedIn", true);
    window.localStorage.setItem("user", this.state.email);

    event.preventDefault();
    const {
      how_account_dropdown,
      modal_open,
      modal_type,
      phone,
      full_name,
      email,
      password,
      confirm_password,
      checkbox,
    } = this.state;

    if (modal_type === "signup") {
      const nameString = "[a-zA-Z]+\\.?";
      if (this.state.full_name.trim().length < 4) {
        alert("Full name must be more than 4 characters.");
        return;
      } else if (full_name.trim().length > 20) {
        alert("Full name must not exceed 20 characters.");
      } else if (!full_name.trim().match(nameString)) {
        alert("Please enter characters only.");
        return;
      }
      const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!this.state.email.match(emailReg)) {
        alert("Please enter a valid email.");
        return;
      }
      if (this.state.password.length < 8) {
        alert("Password must be 8 characters long");
        return;
      }
      if (this.state.confirm_password !== this.state.password) {
        alert("Password must match.");
        return;
      }
      if (this.state.checked === false) {
        alert("Please indicate that you accept the Terms and Conditions");
        return;
      }
      this.setState({
        modal_open: false,
      });
     // this.setState({ dialogBox: !this.state.dialogBox });

     let temp ={
      "name":this.state.full_name,
      "email":this.state.email,
      "phoneNumber":this.state.phone,
      "password":this.state.password
      }
      let url = getBaseUrl() +"/signup";
      axios.post(url,temp).then((response)=>{
  alert(response.data.message);
      },(error) =>{
        alert(error.response.data.message);
      }).catch((e)=>{
  
      });

    }
    if (modal_type === "signin") {
      if (this.state.phone == undefined || this.state.phone.length < 10) {
        alert("Phone number must be 10 digit");
        return;
      }
      if (this.state.password.length < 8) {
        alert("Password must be 8 characters long");
        return;
      }
      // if (this.state.checked === false) {
      //   alert("Please indicate that you accept the Terms and Conditions");
      //   return;
      // }

      let temp ={
        "mobileNumber":this.state.phone,
        "password":this.state.password
        }
        let url = getBaseUrl() +"/login";
        axios.post(url,temp).then((response)=>{
          if(response.data.message != undefined){
            alert(response.data.message);
          }else{
            window.localStorage.setItem("user",response.data.name)
          window.location = "/dashboard";
          }
        },(error) =>{
          alert(error.response.data.message);
        }).catch((e)=>{
    
        });
  
     
    }

    if (modal_type === "forgotpassword") {
    let temp={"number":this.state.phone}
    let url = getBaseUrl() +"/signup";
    axios.post(url,temp).then((response)=>{

    },(error) =>{

    }).catch((e)=>{

    });
    }
    // if (this.state.checked === false) {
    //   alert("Please indicate that you accept the Terms and Conditions");
    //   return;
    // }
  }

  render() {
    const navigation_links = [
      {
        title: "Login",
        to: "/quests",
        endpoint: "signin",
      },
      {
        title: "Register",

        endpoint: "signup",
      },
      {
        title: "Contact us",
        to: "/quests",
        endpoint: "contactus",
      },
    ];

    const navigation_links_list = navigation_links.map((data, index) => {
      console.log("My endpoint name is", data, index);
      return (
        <button
          id={data.title}
          className="auth-button"
          type="button"
          onClick={() => this.openModal(data.endpoint)}
        >
          {data.title}
        </button>
      );
    });
    const {
      show_account_dropdown,
      modal_open,
      modal_type,
      full_name,
      email,
      password,
      confirm_password,
      checkbox,
      button_status,
    } = this.state;

    return (
      <AppBar position="fixed">
        <Toolbar classname="navigationbar" variant="dense">
          <a href="/home">
            <img className="logos" src={logo} />
          </a>
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
                  <a class="dropdown-item" onClick ={this.chnagepass}>
                    Change Password
                  </a>

                  <a class="dropdown-item" href="/submitRequest">
                    Submit Request
                  </a>

                  <a class="dropdown-item" onClick={this.logout}>
                    logout
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="navLinks">
              {navigation_links_list}
              <FontAwesomeIcon icon={faBars} className="bugermenu" />
              {/* <button
                className="navbar-toggler bugermenu"
                type="button"
                data-toggle="collapse"
                data-target="#headerDropDown"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button> */}
            </div>
          )}
        </Toolbar>
        <Dialog
          onClose={() => {
            this.setState({
              modal_open: false,
            });
          }}
          aria-labelledby="simple-dialog-title"
          open={this.state.modal_open}
        >
          <div id="auth-modal">
            <div className="auth-modal-in">
              {modal_type === "signup" && (
                <div>
                  <h1>
                    Si<label className="underscore">gn U</label>p{" "}
                    <span
                      className="floatright"
                      onClick={() => {
                        this.setState({
                          modal_open: false,
                        });
                      }}
                    >
                      <FontAwesomeIcon icon={faTimes} />{" "}
                    </span>
                  </h1>
                </div>
              )}
              {modal_type === "signin" && (
                <div className="divsign">
                  <h1>
                    Lo<label className="underscore">g I</label>n
                    <span
                      className="floatright"
                      onClick={() => {
                        this.setState({
                          modal_open: false,
                        });
                      }}
                    >
                      <FontAwesomeIcon icon={faTimes} />{" "}
                    </span>
                  </h1>
                </div>
              )}
              {modal_type === "forgotpassword" && <h1>Forgot Password ? </h1>}
              <form onSubmit={this.handleOnSubmit}>
                {modal_type === "signup" && (
                  <fieldset className="padii222">
                    <PhoneInput
                      className="inputHome bodernull111"
                      placeholder={"Mobile no. *"}
                      country={"us"}
                      // value={this.state.fields.number}
                      tabindex="1"
                      value={this.state.phone}
                      onChange={(e) => {
                        console.log(e);
                        if (isNaN(e)) {
                          return;
                        }
                        this.setState({
                          phone: e,
                        });
                      }}
                    />
                  </fieldset>
                )}
                {modal_type === "signup" && (
                  <fieldset className="inputHome">
                    <FontAwesomeIcon icon={faUser} className="signup-icon" />
                    {/* fa-lg m-2 align-middle text-danger */}
                    <Input
                      className="bodernull111"
                      type="text"
                      name="full_name"
                      placeholder="Full Name"
                      autocomplete="off"
                      value={full_name}
                      onChange={this.handelOnChange}
                    />
                  </fieldset>
                )}
                {modal_type === "signup" && (
                  <fieldset className="inputHome">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="signup-icon"
                    />
                    <Input
                      className="bodernull111"
                      type="text"
                      name="email"
                      placeholder="Email ID"
                      autocomplete="off"
                      value={email}
                      onChange={this.handelOnChange}
                    />
                  </fieldset>
                )}
                {modal_type === "signin" && (
                  // <fieldset className="inputHome">
                  //   <FontAwesomeIcon
                  //     icon={faEnvelope}
                  //     className="signup-icon"
                  //   />
                  //   <Input
                  //     className="bodernull111"
                  //     type="text"
                  //     name="email"
                  //     placeholder="User Name"
                  //     autocomplete="off"
                  //     value={email}
                  //     onChange={this.handelOnChange}
                  //   />
                  // </fieldset>
                  <fieldset className="padii222">
                    <PhoneInput
                      className="inputHome bodernull111"
                      placeholder={"Mobile no. *"}
                      country={"us"}
                      // value={this.state.fields.number}
                      tabindex="1"
                      value={this.state.phone}
                      onChange={(e) => {
                        console.log(e);
                        if (isNaN(e)) {
                          return;
                        }
                        this.setState({
                          phone: e,
                        });
                      }}
                    />
                  </fieldset>
                )}
                {modal_type !== "forgotpassword" && (
                  <fieldset className="inputHome">
                    <FontAwesomeIcon icon={faKey} className="signup-icon" />
                    <Input
                      className="bodernull111"
                      type="password"
                      name="password"
                      placeholder="password"
                      autocomplete="off"
                      value={password}
                      onChange={this.handelOnChange}
                    />
                  </fieldset>
                )}
                {modal_type === "signin" && (
                  <fieldset>
                    <span
                      onClick={() => this.openModal("forgotpassword")}
                      title="Forgot Password ?"
                      className="link forgottext"
                    >
                      Forgot Password ?
                    </span>
                  </fieldset>
                )}
                {modal_type === "signup" && (
                  <fieldset className="inputHome">
                    <FontAwesomeIcon icon={faKey} className="signup-icon" />
                    <Input
                      className="bodernull111"
                      type="password"
                      name="confirm_password"
                      placeholder="Confirm Password"
                      autocomplete="off"
                      value={confirm_password}
                      onChange={this.handelOnChange}
                    />
                  </fieldset>
                )}

                <div>
           
              
               {modal_type != "signup"?null:   <p className="terms3"> 
               <input
                    type="checkbox"
                    defaultChecked={this.state.checked}
                    onChange={() => this.setState({ checked: true })}
                    color="primary"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                {" "}I accept terms & condition </p>}
                </div>
                <fieldset>
                  {modal_type === "signup" && (
                    <Button
                      className="questtwoheadingpspan"
                      type="submit"
                      value="Sign Up"
                      disabled={
                        this.state.phone == "" ||
                        this.state.email == "" ||
                        this.state.password == "" ||
                        this.state.full_name == "" ||
                        this.state.confirm_password == ""
                      }
                      o
                    />
                  )}
                  {modal_type === "signin" && (
                    <Button
                      type="submit"
                      value="Sign In"
                      disabled={
                        this.state.phone == "" || this.state.password == ""
                      }
                    />
                  )}
                  {modal_type === "forgotpassword" && (
                    <div>
                      {/* <input type="text" /> */}
                      <fieldset className="padii222">
                        <PhoneInput
                          className="inputHome bodernull111"
                          placeholder={"Mobile no. *"}
                          country={"us"}
                          // value={this.state.fields.number}
                          tabindex="1"
                          value={this.state.phone}
                          onChange={(e) => {
                            console.log(e);
                            if (isNaN(e)) {
                              return;
                            }
                            this.setState({
                              phone: e,
                            });
                          }}
                        />
                      </fieldset>

                      <Button
                        type="submit"
                        value="Send Reset Instructions"
                        unable={this.state.email == ""}
                      />
                    </div>
                  )}
                </fieldset>
              </form>
              {modal_type === "signup" && (
                <p>
                  Already have an account ?{" "}
                  <span
                    className="signintext"
                    onClick={() => this.openModal("signin")}
                    title="Sign In"
                  >
                    Sign In
                  </span>
                </p>
              )}
              {modal_type === "signin" && (
                <p>
                  Don't have an account yet ?{" "}
                  <span
                    onClick={() => this.openModal("signup")}
                    title="Sign Up"
                    className="signupcolor"
                  >
                    Sign Up
                  </span>
                </p>
              )}
              {modal_type === "forgotpassword" && (
                <p>
                  <span
                    onClick={() => this.openModal("signin")}
                    title="Sign In"
                  >
                    &larr; Back to Sign In
                  </span>
                </p>
              )}
            </div>
          </div>
        </Dialog>

        <div className="dialogconfirm">
          <Dialog
            onClose={() => {
              this.setState({
                dialogBox: false,
              });
            }}
            open={this.state.dialogBox}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <div className="confirmdialog">
              <span
                className="floatright crossbtncolor mt-2"
                onClick={() => {
                  this.setState({
                    dialogBox: false,
                  });
                }}
              >
                <FontAwesomeIcon icon={faTimes} />{" "}
              </span>
              <div>
                <h3 className="confirmdialog11">Confirm OTP</h3>{" "}
              </div>
              <Input
                className="confirmdialog111"
                type="tel"
                maxLength="4"
                name="otp"
                value={this.state.otp}
                onChange={(e) => {
                  if (isNaN(e.target.value)) {
                    return;
                  }
                  this.setState({
                    otp: e.target.value,
                  });
                }}
              />
              <div className="d-flex">
                <a href="" className="ml-5 mr-auto mt-2 resendotp">
                  Try Another Number
                </a>
                <a href="" className="mr-5 mt-2 resendotp">
                  Resend OTP
                </a>
              </div>
              <button
                className="btn btn-secondary mx-auto d-block mt-2"
                onClick={this.Confirmotp}
                id="otp"
              >
                Confirm
              </button>
            </div>
          </Dialog>
          
        </div>




        {/* <Dialog
            // onClose={() => {
            //   this.setState({
            //     dialogBox1: false,
            //   });
            // }}
            open={this.state.dialogBox1}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            
            <div className="changepasss">
            <span
                className="floatright crossbtncolor mt-2"
                onClick={() => {
                  this.setState({
                    dialogBox1: false,
                  });
                }}
              >
                <FontAwesomeIcon icon={faTimes} />{" "}
              </span>
            
                <div>
                <Input
                  className="change11 mt-5 ml-2"
                  type="password"
                  name="full_name"
                  placeholder="Current Password"
                  autocomplete="off"
                  value={this.state.full_name}
                  onChange={this.handelOnChange}
                />
              </div>
              <div>
              <Input
                  className="change11 mt-4 ml-2"
                  type="password"
                  name="full_name"
                  placeholder="New Password"
                  autocomplete="off"
                  value={this.state.full_name}
                  onChange={this.handelOnChange}
                />
              </div>
              <div>
              <Input
                  className="change11 mt-4 ml-2"
                  type="password"
                  name="full_name"
                  placeholder="Confirm Password"
                  autocomplete="off"
                  value={this.state.full_name}
                  onChange={this.handelOnChange}
                />
              </div>
              <div>
                <button className="mt-4 ml-5 btncolor11">Change Password</button>
              </div>
            </div>
            </Dialog> */}



               <Dialog
            onClose={() => {
              this.setState({
                dialogBox2: false,
              });
            }}
            open={this.state.dialogBox2}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <div className="requested">
            <span
                className="floatright crossbtncolor mt-2"
                onClick={() => {
                  this.setState({
                    dialogBox2: false,
                  });
                }}
              >
                <FontAwesomeIcon icon={faTimes} />{" "}
              </span>
           
                    <Input
                      className="mt-3 ml-3 textareawidth"
                      type="text"
                      name="email"
                      placeholder="Email ID"
                      autocomplete="off"
                      value={email}
                      onChange={this.handelOnChange}
                    />
              
                  <div>
                  <textarea
                  className="ml-3 mt-4 textareawidth"
                      placeholder="Enter message here"
                      multiline
                      rows={4}
                      rowsMax={4}
                    />

                  </div>
                  <div>
                    <button className="btncolorcenter mr-3 mt-3">SUBMIT</button>
                  </div>

            </div>
            </Dialog>
            
      </AppBar>
    );
  }
}

export default Nav;
