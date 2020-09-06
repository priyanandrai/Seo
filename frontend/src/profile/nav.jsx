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
import axios from "axios";
import TextField from "@material-ui/core/TextField";

import Input from "../components/Input";
import Label from "../components/Label";
import Button from "../components/Button";
import { getAuthData, isLoggedIn } from "../utils";
import Dialog from "@material-ui/core/Dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Checkbox from "@material-ui/core/Checkbox";
import { getBaseUrl } from "../utils";

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
      adminGuard: false,
      adminprofile: false,
      balance: "30.00SR",
      checked: false,
      dialogBox: false,
      dialogBox1: false,
      dialogBox2: false,
      UniqueId: false,
      AddBalance: false,
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
      button_status: "disabled",
      register: false,
      getintouch: false,
      barmenu :false,
      // logindialog:false,
      // dropdownmenu:false,
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
  barmenu = () => {
    this.setState({ barmenu: !this.state.barmenu });
  };
  UniqueId = () => {
    this.setState({ UniqueId: !this.state.UniqueId });
  };
  AddBalance = () => {
    this.setState({ AddBalance: !this.state.AddBalance });
  };
  dialogBox2 = () => {
    this.setState({ dialogBox2: !this.state.dialogBox2 });
  };
  dialogBox1 = () => {
    this.setState({ dialogBox1: !this.state.dialogBox });
  };
  chnagepass = () => {
    window.location = "/changepassword";
  };
  Confirmotp = () => {
    window.location = "/dashboard";
  };

  componentWillMount() {
    if (window.location.pathname == "/adminute-dashboard") {
      this.setState({ adminGuard: true });
    }
    if (window.location.pathname == "/444-profile") {
      this.setState({ adminprofile: true });
    }
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
        alert("Please accept the Terms and Conditions");
        return;
      }
      this.setState({
        modal_open: false,
      });
      this.setState({ dialogBox: !this.state.dialogBox });

      let temp = {
        name: this.state.full_name,
        email: this.state.email,
        phoneNumber: this.state.phone,
        password: this.state.password,
      };
      let url = getBaseUrl() + "/signup";
      axios
        .post(url, temp)
        .then(
          (response) => {
            alert(response.data.message);
          },
          (error) => {
            alert(error.response.data.message);
          }
        )
        .catch((e) => {});
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

      let temp = {
        mobileNumber: this.state.phone,
        password: this.state.password,
      };
      let url = getBaseUrl() + "/login";
      axios
        .post(url, temp)
        .then(
          (response) => {
            if (response.data.message != undefined) {
              alert(response.data.message);
            } else {
              window.localStorage.setItem("user", response.data.name);
              window.location = "/dashboard";
            }
          },
          (error) => {
            alert(error.response.data.message);
          }
        )
        .catch((e) => {});
    }

    if (modal_type === "forgotpassword") {
      let temp = { mobileNumber: this.state.phone };
      let url = getBaseUrl() + "/forgetPassword";
      axios
        .post(url, temp)
        .then(
          (response) => {
            console.log(response);
            alert(response.data.message);
          },
          (error) => {}
        )
        .catch((e) => {});
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
        to: "/quests",
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
      
      let temp =
      window.location.href.indexOf("adminute") == -1 ? (
        // window.location.pathname != "/adminute" &&
        // window.location.pathname != "/adminute-dashboard" &&
        // window.location.pathname != "/444-profile" ? (
          <button
            id={data.title}
            className="auth-button"
            type="button"
            onClick={() => this.openModal(data.endpoint)}
          >
            {data.title}
          </button>
        ) : (
          ""
        );
      return temp;
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
          {this.state.isLogged == true ? (
            <a href="/dashboard">
              <img className="logos" src={logo} />
            </a>
          ) : (
            <a href="/home">
              <img className="logos" src={logo} />
            </a>
          )}

          {this.state.isLogged == true ? (
            <div className="ml-auto">
              <div className="d-flex">
                {/* {this.state.adminGuard == false &&
                this.state.adminprofile == false ? ( */}
                <a class="nav-link text-dark Balancebold">
                  Balance:
                  <span className="align-middle">{this.state.balance}</span>
                </a>
                {/* // ) : null} */}

                <a class="navbar-brand mr-0" href="">
                  <img width="30" height="30" src={login} className="logomin" />
                </a>
                <a
                  class="nav-link dropdown-toggle text-dark dropdownss"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  maxLength="8"
                >
                  {this.state.user}
                </a>
                <div
                  className="ml-5"
                  class="dropdown-menu dropdown-menu-right drophover"
                  aria-labelledby="navbarDropdown"
                >
                  {/* {this.state.adminGuard == false &&
                  this.state.adminprofile == false ? ( */}
                  <a
                    class="dropdown-item"
                    onClick={this.UniqueId}
                    className="disabled dropdown-item"
                  >
                    Unique Id:2211
                  </a>
                  {/* ) : null} */}
                  {/* {this.state.adminGuard == false &&
                  this.state.adminprofile == false ? ( */}
                  <a class="dropdown-item" onClick={this.AddBalance}>
                    Add Balance
                  </a>
                  {/* ) : null} */}
                  {/* {this.state.adminGuard == false &&
                  this.state.adminprofile == false ? ( */}
                  <a class="dropdown-item" href="dashboard">
                    DashBoard
                  </a>
                  {/* ) : null} */}

                  <a class="dropdown-item" href="profile">
                    View Profile
                  </a>
                  <a class="dropdown-item" onClick={this.dialogBox1}>
                    Change Password
                  </a>
                  {/* {this.state.adminGuard == false &&
                  this.state.adminprofile == false ? ( */}
                  <a class="dropdown-item" onClick={this.dialogBox2}>
                    Submit Request
                  </a>
                  {/* ) : null} */}

                  <a class="dropdown-item" onClick={this.logout}>
                    Logout
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="navLinks">
              {navigation_links_list}
              <FontAwesomeIcon icon={faBars} className="bugermenu" onClick={(e) => {
                this.setState({ barmenu: !this.state.barmenu })
              }} />
              {this.state.barmenu ? (
                   <div className="dropblock mt-4 drophovering"  /*open={this.state.barmenu}*/>
                  <a class="dropdown-item" href="signin">
                  Login
                </a>
                <a class="dropdown-item" href="">
                  Register
                </a>
                <a class="dropdown-item" href="">
                  Contact Us
                </a>
                
              </div>
               
              ):""
              
              }
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
              {modal_type === "forgotpassword" && (
                <div className="d-inline">
                  <span
                    className="float-right p-2"
                    onClick={() => {
                      this.setState({
                        modal_open: false,
                      });
                    }}
                  >
                    <FontAwesomeIcon icon={faTimes} />{" "}
                  </span>
                  <h1>Forgot Password ? </h1>
                </div>
              )}

              <form onSubmit={this.handleOnSubmit}>
                {modal_type === "signup" && (
                  <fieldset className="padii222">
                    <PhoneInput
                      className="inputHome bodernull111"
                      placeholder={"Mobile no. *"}
                      country={"us"}
                      // value={this.state.fields.number}
                      // tabindex="1"
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
                      // tabindex="1"
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
                  {modal_type != "signup" ? null : (
                    <p className="terms3">
                      <input
                        type="checkbox"
                        defaultChecked={this.state.checked}
                        onChange={() => this.setState({ checked: true })}
                        color="primary"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />{" "}
                      I accept terms & condition{" "}
                    </p>
                  )}
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
                          // tabindex="1"
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

        <Dialog
          onClose={() => {
            this.setState({
              dialogBox1: false,
            });
          }}
          open={this.state.dialogBox1}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div>
            <div id="auth-modal">
              <div className="auth-modal-in">
                <span
                  className="float-right pr-2 pt-1"
                  onClick={() => {
                    this.setState({
                      dialogBox1: false,
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faTimes} />{" "}
                </span>
                <div className="forgotpwdModal">
                  <h1>Change Password</h1>
                  <fieldset className="inputHome mt-2  ml-3 mr-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Current Password"
                    />
                  </fieldset>
                  <fieldset className="inputHome mt-3 ml-3 mr-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="New Password"
                    />
                  </fieldset>
                  <fieldset className="inputHome mt-3 ml-3 mr-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Confirm Password"
                    />
                  </fieldset>
                  <div className="mt-4 ">
                    <Button
                      className="forgetpwdbtn mx-auto d-block"
                      type="submit"
                      value="Change Password"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
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
          <div className="changepasss">
            <div id="auth-modal">
              <div className="auth-modal-in">
                <span
                  className="float-right pr-2 pt-1"
                  onClick={() => {
                    this.setState({
                      dialogBox2: false,
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faTimes} />{" "}
                </span>
                <div className="forgotpwdModal">
                  <h1>Submit Request</h1>
                  <fieldset className="inputHome mt-2  ml-3 mr-3 emailwidth">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email"
                    />
                  </fieldset>

                  <textarea
                    className="ml-3 mt-4 mr-3 inputHome textareawidth"
                    placeholder="Enter message here"
                    multiline
                    rows={4}
                    rowsMax={4}
                  />

                  <div className="mt-4 ">
                    <Button
                      className="forgetpwdbtn mx-auto d-block"
                      type="submit"
                      value="SUBMIT"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
        <Dialog
          open={this.state.UniqueId}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="dialoged">
            <span
              className="floatright crossbtncolor mt-2"
              onClick={() => {
                this.setState({
                  UniqueId: false,
                });
              }}
            >
              <FontAwesomeIcon icon={faTimes} />{" "}
            </span>
          </div>
        </Dialog>
        <Dialog
          open={this.state.AddBalance}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="addbalance">
            <span
              className="floatright crossbtncolor mt-2"
              onClick={() => {
                this.setState({
                  AddBalance: false,
                });
              }}
            >
              <FontAwesomeIcon icon={faTimes} />{" "}
            </span>
          </div>
        </Dialog>
      </AppBar>
    );
  }
}

export default Nav;
