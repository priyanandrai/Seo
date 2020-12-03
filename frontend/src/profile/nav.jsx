import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./profile.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/semantic-ui.css";
import logo from "../images/logo.png";
import login from "../images/login.png";
import "../style/quest.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import LinearProgress from '@material-ui/core/LinearProgress';
import "../App.css";
// import { NavLink } from "react-router-dom";
// import { animateScroll as scroll } from "react-scroll";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as authActions from "../actions/auth";
// import Confirmotp from "../confirmotp/confirmotp";
import axios from "axios";
// import TextField from "@material-ui/core/TextField";

import Input from "../components/Input";
// import Label from "../components/Label";
import Button from "../components/Button";
// import { getAuthData, isLoggedIn } from "../utils";
import Dialog from "@material-ui/core/Dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Checkbox from "@material-ui/core/Checkbox";
import { getBaseUrl } from "../utils";

import {
  faKey,
  faEnvelope,
  faUser,
  faEye,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

// import Logout from "../logout/logout";
import Leftpanel from "../leftpanel/leftpanel";
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adminGuard: false,
      forgotpassdiaglog: false,
      adminprofile: false,
      balance: "N/A",
      checked: false,
      dialogBox: false,
      linearprogressbar:false,
      dialogBox1: false,
      dialogBox2: false,
      UniqueId: false,
      AddBalance: false,
      isLogged: false,
      phone: "",
      otp: "",
      id: "",
      user: "Francis",
      show_account_dropdown: false,
      modal_open: false,
      modal_type: "",
      full_name: "",
      current_pass: "",
      currentPassword: "",
      progressbar: false,
      newPassword: "",
      new_pass: "",
      conf_pass: "",
      email: "",
      password: "",
      confirm_password: "",
      button_status: "disabled",
      register: false,
      getintouch: false,
      barmenu: false,
      message: "",
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
  submitrequest = () => {
    const regexex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.state.email === "") {
      this.setState({
        snackbar: true,
        error: "Enter your Email",
      });
      // alert("Enter your Email");
      return;
    } else if (!this.state.email.match(regexex)) {
      this.setState({
        snackbar: true,
        error: "Please valid Email",
      });
      // alert("Please valid Email");
      return;
    }
    if (this.state.message === "") {
      this.setState({
        snackbar: true,
        error: "Enter your message",
      });
      // alert("Enter your message");
      return;
    }

    let url = getBaseUrl() + "/submitrequest";
    this.setState({
      linearprogressbar: true,
      message:"Please Wait your Request Submitted"
    });
    let temp = {
      userId: window.localStorage.getItem("id"),
      email: this.state.email,
      message: this.state.message,
    };

    axios.post(url, temp).then(
      (response) => {
        // alert(response.data.message);
        this.setState({
          linearprogressbar:false,
          snackbar: true,
          error: "Request Successfully Submit",
        });
        // alert("Request Successfully Submit");

        return;
      },

      (error) => {}
    );
  };

  myFunction = () => {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  myFunction1 = () => {
    var x = document.getElementById("myInput1");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

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
  chnagepassword = () => {
    if (this.state.currentPassword.length === "") {
      this.setState({
        snackbar: true,
        error: "Please enter the old password",
      });
      // alert("Please enter the old password");
      return;
    }
    if (this.state.newPassword.length === "") {
      this.setState({
        snackbar: true,
        error: "Please enter the new password",
      });
      // alert("Please enter the new password");
      return;
    }
    if (this.state.newPassword.length < 8) {
      this.setState({
        snackbar: true,
        error: "Password must be 8 characters long",
      });
      // alert("Password must be 8 characters long");
      return;
    }
    if (this.state.conf_pass.length === "") {
      this.setState({
        snackbar: true,
        error: "Please enter Confirm Password ",
      });
      // alert("Password must be 8 characters long");
      return;
    }
    if (this.state.conf_pass !== this.state.newPassword) {
      this.setState({
        snackbar: true,
        error: "Password must match.",
      });
      // alert("Password must match.");
      return;
    }
    let url = getBaseUrl() + "/changepassword";
    this.setState({
      linearprogressbar: true,
      message:"Please Wait your password changed"
    });
    let temp = {
      userId: window.localStorage.getItem("id"),
      currentPassword: this.state.currentPassword,
      newPassword: this.state.newPassword,
    };

    axios.put(url, temp).then(
      (response) => {
        // alert(response.data.message);
        this.setState({
          linearprogressbar:false,
          snackbar: true,
          error: "Password Successfully Changed",
        });
        // alert("Password Successfully Changed");

        return;
      },

      (error) => {}
    );
  };
  dialogBox1 = () => {
    this.setState({ dialogBox1: !this.state.dialogBox });
  };
  // chnagepass = () => {
  //   window.location = "/changepassword";
  // };
  Confirmotp = () => {
    window.location = "/dashboard";
  };

  componentWillMount() {
    let id = window.localStorage.getItem("id");
    this.setState({ id: id });
    // if (window.location.pathname == "/adminute-dashboard") {
    //   this.setState({ adminGuard: true });
    // }
    // if (window.location.pathname == "/444-profile") {
    //   this.setState({ adminprofile: true });
    // }
    let temp = window.localStorage.getItem("isLoggedIn");
    // alert(temp)
    if (temp === true || temp === "true") {
      let user = window.localStorage.getItem("user");
      let newUser = user.substring(0, 8);
      this.setState({
        isLogged: true,
        user: newUser,
      });
    }
    let self = this;
    let url =
      getBaseUrl() + "/getprofile?id=" + window.localStorage.getItem("id");
    axios.get(url).then(
      (response) => {
        // alert(response.data.message);
        self.setState({
          email: response.data.email,
        });
      },
      (error) => {}
    );
  }

  logout = () => {
    window.localStorage.clear();
    window.location = "/home";
  };

  openModal(type) {
    if (type === "contactus") {
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
    // window.localStorage.setItem("isLoggedIn", true);
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const {
      // how_account_dropdown,
      // modal_open,
      modal_type,
      // phone,
      full_name,
      // email,
      // password,
      // confirm_password,
      // checkbox,
    } = this.state;

    if (modal_type === "signup") {
      if (this.state.phone === undefined || this.state.phone.length < 10) {
        // alert("Phone number must be 10 digit");
        this.setState({
          snackbar: true,
          error: "Phone number must be 10 digit",
        });
        return;
      }
      const nameString = "[a-zA-Z]+\\.?";
      if (this.state.full_name.trim().length < 4) {
        this.setState({
          snackbar: true,
          error: "Full name must be more than 4 characters.",
        });

        //  alert("Full name must be more than 4 characters.");
        return;
      } else if (full_name.trim().length > 20) {
        this.setState({
          snackbar: true,
          error: "Full name must not exceed 20 characters.",
        });
        // alert("Full name must not exceed 20 characters.");
      } else if (!full_name.trim().match(nameString)) {
        this.setState({
          snackbar: true,
          error: "Please enter characters only.",
        });
        // alert("Please enter characters only.");
        return;
      }
      const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!this.state.email.match(emailReg)) {
        this.setState({
          snackbar: true,
          error: "Please enter a valid email.",
        });
        // alert("Please enter a valid email.");
        return;
      }
      if (this.state.password.length < 8) {
        this.setState({
          snackbar: true,
          error: "Password must be 8 characters long",
        });
        // alert("Password must be 8 characters long");
        return;
      }
      if (this.state.confirm_password !== this.state.password) {
        this.setState({
          snackbar: true,
          error: "Password must match.",
        });
        // alert("Password must match.");
        return;
      }
      if (this.state.checked === false) {
        this.setState({
          snackbar: true,
          error: "Please accept the Terms and Conditions",
        });
        // alert("Please accept the Terms and Conditions");
        return;
      }

      // alert(this.state.phone);
      // console.log(this.state.phone)
      let temp = {
        name: this.state.full_name,
        email: this.state.email,
        phoneNumber: this.state.phone,
        password: this.state.password,
      };
      let url = getBaseUrl() + "/signup";
      this.setState({
        linearprogressbar: true,
        message:"Displaying message after successful registration."
      });
      axios
        .post(url, temp)
        .then(
          (response) => {
            // window.location = "/dashboard";
            // console.log("iddddddddddddddddddddddddddddd",console.data.id);
            // if(response.data.message  != undefined){
            //   alert(response.data.message);
            // }else
            // {// }
            if (response.data.message === undefined) {
            } else {
              this.setState({
                linearprogressbar:false,
                snackbar: true,
                error: response.data.message,
              });
              // alert(response.data.message);
              return;
            }
            this.setState({
              modal_open: false,
            });
            window.localStorage.setItem("user", response.data.name);
            window.localStorage.setItem("id", response.data.id);
            window.localStorage.setItem("isLoggedIn", true);
            window.location = "/dashboard";
            this.setState({
              snackbar: true,
              error: "Thank you for Regisrtion",
            });
            // alert("Thank you for Regisrtion");
            this.setState({ dialogBox: !this.state.dialogBox });
          },
          (error) => {
            this.setState({
              snackbar: true,
              error: error.response.data.message,
            });
            // alert(error.response.data.message);
          }
        )
        .catch((e) => {});
    }
    if (modal_type === "signin") {
      // if (this.state.phone == undefined) {
      //   // alert("Phone number must be 10 digit");
      //   this.setState({
      //     snackbar: true,
      //     error: "Please Enter Phone number.",
      //   });
      //   return;
      // }
      // if (this.state.password.length < 8) {
      //   this.setState({
      //     snackbar: true,
      //     error: "Password must be 8 characters long",
      //   });
      //   // alert("Password must be 8 characters long");
      //   return;
      // }
      // if (this.state.checked === false) {
      //   alert("Please indicate that you accept the Terms and Conditions");
      //   return;
      // }

      let temp = {
        mobileNumber: this.state.phone,
        password: this.state.password,
      };
      let url = getBaseUrl() + "/login";
      this.setState({
        linearprogressbar: true,
        message:"Please Wait "
      });
      axios
        .post(url, temp)
        .then(
          (response) => {
            if (response.data.message !== undefined) {
              alert(response.data.message);
              return;
            }
           
            // let tmp = response.data;
            window.localStorage.setItem("isLoggedIn", true);
            window.localStorage.setItem("user", response.data.name);
            window.localStorage.setItem("id", response.data.id);
            this.setState({
              linearprogressbar:false,
              
            });
            window.location = "/dashboard";
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
      this.setState({
        linearprogressbar: true,
        message:"Please Wait Your Password Forgotted "
      });
      axios
        .post(url, temp)
        .then(
          (response) => {
            this.setState({
              linearprogressbar:false,
              
            });
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
  closeSnackbar = () => {
    this.setState({ snackbar: false });
  };
  // openNav =()=>{
  //   document.getElementById("mySidenav").style.width = "250px";
  // }

  // closeNav=()=>{
  //   document.getElementById("mySidenav").style.width = "0";
  // }

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
        window.location.href.indexOf("adminute") === -1 ? (
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
      // show_account_dropdown,
      // modal_open,
      modal_type,
      full_name,
      email,
      password,
      confirm_password,
      // checkbox,
      // button_status,
    } = this.state;

    return (
      <AppBar position="fixed">
        <Toolbar className="navigationbar" variant="dense">
          {this.state.isLogged === true ? (
            //   <a href="/dashboard">
            //     <img className="logos" src={logo} />
            //   </a>
            // ) : (
            //   <a href="/home">
            //     <img className="logos" src={logo} />
            //   </a>
            <div className="headerhight">
              <Leftpanel></Leftpanel>
              <a href="/dashboard">
                <img className="logoss ml-3" src={logo} alt="" />
              </a>{" "}
            </div>
          ) : (
            <a href="/home">
              <img className="logos" src={logo} alt="" />
            </a>
          )}

          {this.state.isLogged === true ? (
            <div className="ml-auto">
              <div className="d-flex">
                {/* {this.state.adminGuard == false &&
                this.state.adminprofile == false ? ( */}
                <a className="nav-link text-dark Balancebold">
                  Balance:
                  <span className="align-middle">{this.state.balance}</span>
                </a>
                {/* // ) : null} */}

                <a className="navbar-brand mr-0">
                  <img
                    width="30"
                    height="30"
                    src={login}
                    className="logomin"
                    alt=""
                  />
                </a>
                <a
                  className="nav-link dropdown-toggle text-dark dropdownss dropwidth"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  // maxLength="8"
                >
                  {this.state.user}
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right drophover margindrop"
                  aria-labelledby="navbarDropdown"
                >
                  {/* {this.state.adminGuard == false &&
                  this.state.adminprofile == false ? ( */}
                  <a
                    // onClick={this.UniqueId}
                    className=" dropdown-item"
                  >
                    <b>Unique Id: {this.state.id}</b>
                  </a>
                  <a className="dropdown-item" href="profile">
                    View Profile
                  </a>
                  {/* ) : null} */}
                  {/* {this.state.adminGuard == false &&
                  this.state.adminprofile == false ? ( */}
                  {/* <a className="dropdown-item" onClick={this.AddBalance}>
                    Add Balance
                  </a> */}
                  {/* ) : null} */}
                  {/* {this.state.adminGuard == false &&
                  this.state.adminprofile == false ? ( */}
                  <a className="dropdown-item" href="dashboard">
                    DashBoard
                  </a>
                  {/* ) : null} */}
                  <a className="dropdown-item" href="history">
                    View History
                  </a>

                  <a className="dropdown-item" onClick={this.dialogBox1}>
                    Change Password
                  </a>
                  {/* {this.state.adminGuard == false &&
                  this.state.adminprofile == false ? ( */}
                  <a className="dropdown-item" onClick={this.dialogBox2}>
                    Submit Request
                  </a>
                  {/* ) : null} */}

                  <a className="dropdown-item" onClick={this.logout}>
                    Logout
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="navLinks">
              
              {/* <a className="traffic_exchangecolor mr-3" href="trafficexchange">
                Traffic Exchange
              </a> */}
              {navigation_links_list}
              <FontAwesomeIcon
                icon={faBars}
                className="bugermenu"
                onClick={(e) => {
                  this.setState({ barmenu: !this.state.barmenu });
                }}
              />
              {this.state.barmenu ? (
                <div className="dropblock mt-4 drophovering">
                  {/* let navigation_links_list = navigation_links.map((data, index) => {
                       <button
                       id={data.title}
                       className="auth-button"
                       type="button"
                       onClick={() => this.openModal(data.endpoint)}
                     >
                       {data.title}
                     </button>
                      }); */}

                  {/* <a href="trafficexchange" className="dropdown-item">
                    Traffic Exchange
                  </a> */}
                  <a
                    className="dropdown-item"
                    onClick={() => this.openModal("signin")}
                  >
                    Login
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => this.openModal("signup")}
                  >
                    Register
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => this.openModal("contactus")}
                  >
                    Contact Us
                  </a>
                </div>
              ) : (
                ""
              )}
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
                      country={"in"}
                      // value={this.state.fields.number}
                      // tabindex="1"
                      value={this.state.phone}
                      onChange={(e) => {
                        console.log(e);
                        if (isNaN(e)) {
                          return;
                        }
                        this.setState({
                          phone: "+" + e,
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
                      country={"in"}
                      // value={this.state.fields.number}
                      // tabindex="1"
                      value={this.state.phone}
                      onChange={(e) => {
                        console.log(e);
                        if (isNaN(e)) {
                          return;
                        }
                        this.setState({
                          phone: "+" + e,
                        });
                      }}
                    />
                  </fieldset>
                )}
                {modal_type !== "forgotpassword" && (
                  <fieldset className="inputHome">
                    <FontAwesomeIcon icon={faKey} className="signup-icon" />
                    <Input
                      id="myInput"
                      className="bodernull111"
                      type="password"
                      name="password"
                      placeholder="password"
                      autocomplete="off"
                      value={password}
                      onChange={this.handelOnChange}
                    />
                    <FontAwesomeIcon
                      icon={faEye}
                      className="ml-5 signup-icon"
                      onClick={this.myFunction}
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
                      id="myInput1"
                      className="bodernull111"
                      type="password"
                      name="confirm_password"
                      placeholder="Confirm Password"
                      autocomplete="off"
                      value={confirm_password}
                      onChange={this.handelOnChange}
                    />
                    <FontAwesomeIcon
                      icon={faEye}
                      className="ml-5 signup-icon"
                      onClick={this.myFunction1}
                    />
                  </fieldset>
                )}

                <div>
                  {modal_type !== "signup" ? null : (
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
                        this.state.phone === "" ||
                        this.state.email === "" ||
                        this.state.password === "" ||
                        this.state.full_name === "" ||
                        this.state.confirm_password === ""
                      }
                    />
                  )}
                  {modal_type === "signin" && (
                    <Button
                      type="submit"
                      value="Sign In"
                      disabled={
                        this.state.phone === "" || this.state.password === ""
                      }
                    />
                  )}
                  {modal_type === "forgotpassword" && (
                    <div>
                      {/* <input type="text" /> */}
                      {/* <fieldset className="padii222">
                        <PhoneInput
                          className="inputHome bodernull111"
                          placeholder={"Mobile no. *"}
                          country={"in"}
                          // value={this.state.fields.number}
                          // tabindex="1"
                          value={this.state.phone}
                          onChange={(e) => {
                            console.log(e);
                            if (isNaN(e)) {
                              return;
                            }
                            this.setState({
                              phone: "+" + e,
                            });
                          }}
                        />
                      </fieldset> */}
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

                      <Button
                        type="submit"
                        value="Send Reset Instructions"
                        disabled={this.state.email === ""}
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
                    className="backtosigh11"
                    onClick={() => this.openModal("signin")}
                    title="Sign In"
                  >
                    &larr; Back to Sign In
                  </span>
                </p>
              )}
            </div>
          </div>
          <div>
            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              open={this.state.snackbar}
              onClose={this.closeSnackbar}
              message={
                this.state.error === null
                  ? this.state.message
                  : this.state.error
              }
              action={
                <React.Fragment>
                  <IconButton
                    size="small"
                    aria-label="close"
                    color="red"
                    onClick={this.closeSnackbar}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </React.Fragment>
              }
            />
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
                <a className="ml-5 mr-auto mt-2 resendotp">
                  Try Another Number
                </a>
                <a className="mr-5 mt-2 resendotp">Resend OTP</a>
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
                  <h1 className="dropwidth">Change Password</h1>
                  <fieldset className="inputHome mt-2  ml-3 mr-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Current Password"
                      value={this.state.currentPassword}
                      onChange={(e) => {
                        this.setState({
                          currentPassword: e.target.value,
                        });
                      }}
                    />
                  </fieldset>
                  <fieldset className="inputHome mt-3 ml-3 mr-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="New Password"
                      value={this.state.newPassword}
                      onChange={(e) => {
                        this.setState({
                          newPassword: e.target.value,
                        });
                      }}
                    />
                  </fieldset>
                  <fieldset className="inputHome mt-3 ml-3 mr-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      value={this.state.conf_pass}
                      onChange={(e) => {
                        this.setState({
                          conf_pass: e.target.value,
                        });
                      }}
                    />
                  </fieldset>
                  <div className="mt-4 ">
                    <Button
                      className="forgetpwdbtn mx-auto d-block"
                      type="submit"
                      value="Change Password"
                      onClick={this.chnagepassword}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Snackbar
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                open={this.state.snackbar}
                onClose={this.closeSnackbar}
                message={
                  this.state.error === null
                    ? this.state.message
                    : this.state.error
                }
                action={
                  <React.Fragment>
                    <IconButton
                      size="small"
                      aria-label="close"
                      color="red"
                      onClick={this.closeSnackbar}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </React.Fragment>
                }
              />
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
                      className="form-control"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={(e) => {
                        this.setState({
                          email: e.target.value,
                        });
                      }}
                    />
                  </fieldset>

                  <textarea
                    className="ml-3 mt-4 mr-3 inputHome textareawidth"
                    placeholder="Enter message here"
                    multiline
                    rows={4}
                    value={this.state.message}
                    onChange={(e) => {
                      this.setState({
                        message: e.target.value,
                      });
                    }}
                    rowsMax={4}
                  />

                  <div className="mt-4 ">
                    <Button
                      className="forgetpwdbtn mx-auto d-block"
                      type="submit"
                      value="SUBMIT"
                      onClick={this.submitrequest}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            open={this.state.snackbar}
            onClose={this.closeSnackbar}
            message={
              this.state.error === null ? this.state.message : this.state.error
            }
            action={
              <React.Fragment>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="red"
                  onClick={this.closeSnackbar}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />
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
          onClose={() => {
            this.setState({
              AddBalance: false,
            });
          }}
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
        {/* <Dialog
         onClose={() => {
          this.setState({
            forgotpassdiaglog: false,
          });
        }}
          open={this.state.forgotpassdiaglog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div>
            <div id="auth-modal">
              <div className="auth-modal-in">
                <h2 className="link forgottext text-center mt-2"> New Password</h2>
              <fieldset className="inputHome mt-3 ml-3 mr-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="New Password"
                      value={this.state.newPassword}
                      onChange={(e) => {
                        this.setState({
                          newPassword: e.target.value,
                        });
                      }}
                    />
                  </fieldset>
                  <fieldset className="inputHome mt-3 ml-3 mr-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      value={this.state.conf_pass}
                      onChange={(e) => {
                        this.setState({
                          conf_pass: e.target.value,
                        });
                      }}
                    />
                  </fieldset>
                  <div className="mt-4 mb-2 ">
                    <Button
                      className="forgetpwdbtn mx-auto d-block"
                      type="submit"
                      value="Change Password"
                      onClick={this.chnagepassword}
                    />
                  </div>
              </div>
            </div>
          </div>
        </Dialog> */}
        {/* <div id="mySidenav" className="sidenav mt-5">
          <a href="javascript:void(0)" className="closebtn"  onClick={this.closeNav}>
            &times;
          </a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div> */}
           <Dialog
          // onClose={() => {
          //   this.setState({
          //     drilldown: false,
          //   });
          // }}
          open={this.state.progressbar}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="loader-main">
            {this.state.progressbar && (
              <CircularProgress size={68} className="loaderbar" />
            )}
          </div>
        </Dialog>
        <Dialog
          // onClose={() => {
          //   this.setState({
          //     drilldown: false,
          //   });
          // }}
          open={this.state.linearprogressbar}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="linear-progress">
            <p className="ml-5 mr-5 change-profile">{this.state.message}</p>
            {this.state.linearprogressbar && (
              <LinearProgress  size={68} className="ml-5 mr-5 progress-hight" />
            )}
          </div>
        </Dialog>
      </AppBar>
    );
  }
}

export default Nav;
