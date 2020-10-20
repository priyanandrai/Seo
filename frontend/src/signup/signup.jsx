import React from "react";
// import { Container, Row, Col, Card,Form } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import HOC from "../components/HOC";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKey,
  faEnvelope,
  faUser,
  faEye,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Input from "../components/Input";
import Button from "../components/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import { getBaseUrl } from "../utils";
import Dialog from "@material-ui/core/Dialog";

import "./signup.css";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.signupbtn = this.signupbtn.bind(this);

    this.state = {
      full_name: "",
      signin: true,
      checked: false,
      phone: "",
      email: "",
      password: "",
      confirm_password: "",
      button_status: "disabled",
    };
  }
  closeSnackbar = () => {
    this.setState({ snackbar: false });
  };
  signupbtn() {
    if (this.state.phone === undefined || this.state.phone.length < 10) {
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

      return;
    } else if (this.state.full_name.trim().length > 20) {
      this.setState({
        snackbar: true,
        error: "Full name must not exceed 20 characters.",
      });
    } else if (!this.state.full_name.trim().match(nameString)) {
      this.setState({
        snackbar: true,
        error: "Please enter characters only.",
      });

      return;
    }
    const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!this.state.email.match(emailReg)) {
      this.setState({
        snackbar: true,
        error: "Please enter a valid email.",
      });

      return;
    }
    if (this.state.password.length < 8) {
      this.setState({
        snackbar: true,
        error: "Password must be 8 characters long",
      });

      return;
    }
    if (this.state.confirm_password !== this.state.password) {
      this.setState({
        snackbar: true,
        error: "Password must match.",
      });

      return;
    }
    if (this.state.checked === false) {
      this.setState({
        snackbar: true,
        error: "Please accept the Terms and Conditions",
      });

      return;
    }

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
          if (response.data.message === undefined) {
          } else {
            this.setState({
              snackbar: true,
              error: response.data.message,
            });

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

          this.setState({ dialogBox: !this.state.dialogBox });
        },
        (error) => {
          this.setState({
            snackbar: true,
            error: error.response.data.message,
          });
        }
      )
      .catch((e) => {});
  }
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

  render() {
    return (
      <div className="Sighup_color ml-auto mr-auto">
        <p className="signup_head">SIGN UP</p>
        <fieldset className="ml-5 signup_phone">
          <PhoneInput
            className=""
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
        <fieldset className="inputHome ml-5 mt-4 signup_name">
          <FontAwesomeIcon icon={faUser} className="signup-icon" />
          {/* fa-lg m-2 align-middle text-danger */}
          <Input
            className="bodernull111 pl-4 pt-2"
            type="text"
            name="full_name"
            placeholder="Full Name"
            autocomplete="off"
            value={this.state.full_name}
            onChange={(e) => this.setState({ full_name: e.target.value })}
            //   value={full_name}
            //   onChange={this.handelOnChange}
          />
        </fieldset>
        <fieldset className="inputHome ml-5 mt-4 signup_name">
          <FontAwesomeIcon icon={faEnvelope} className="signup-icon" />
          <Input
            className="bodernull111 pl-4 pt-2"
            type="text"
            name="email"
            placeholder="Email ID"
            autocomplete="off"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
            //   value={email}
            //   onChange={this.handelOnChange}
          />
        </fieldset>
        <fieldset className="inputHome ml-5 mt-4 signup_name">
          <FontAwesomeIcon icon={faKey} className="signup-icon" />
          <Input
            id="myInput"
            className="bodernull111 pl-4 pt-2"
            type="password"
            name="password"
            placeholder="password"
            autocomplete="off"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
            //   value={password}
            //   onChange={this.handelOnChange}
          />
          <FontAwesomeIcon
            icon={faEye}
            className="mt-2 mr-1 signup_email"
            onClick={this.myFunction}
          />
        </fieldset>
        <fieldset className="inputHome ml-5 mt-4 signup_name">
          <FontAwesomeIcon icon={faKey} className="signup-icon" />
          <Input
            id="myInput1"
            className="bodernull111  pl-4 pt-2"
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            autocomplete="off"
            value={this.state.confirm_password}
            onChange={(e) =>
              this.setState({ confirm_password: e.target.value })
            }
            //   value={confirm_password}
            //   onChange={this.handelOnChange}
          />
          <FontAwesomeIcon
            icon={faEye}
            className="mt-2 mr-1 signup_email"
            onClick={this.myFunction1}
          />
        </fieldset>

        <p className="ml-5 mt-3 signup_accept">
          <input
            type="checkbox"
            defaultChecked={this.state.checked}
            onChange={() => this.setState({ checked: true })}
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />{" "}
          I accept terms & condition{" "}
        </p>
        <div className="ml-5">
          <Button
            className="btn_signup"
            type="submit"
            value="Sign Up"
            onClick={this.signupbtn}
          />
        </div>
        <p className="text-center mt-3">
          Already have an account ?{" "}
          <span
            className="signintext"
            // onClick={() => this.openModal("signin")}
            title="Sign In"
          >
            Please Click on Login
          </span>
        </p>
        <div>
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
        </div>
        {/* <Dialog
          onClose={() => {
            this.setState({
              signin: false,
            });
          }}
          open={this.state.signin}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="login_pop">
            <span
              className="floatright crossbtncolor mt-2"
              onClick={() => {
                this.setState({
                  signin: false,
                });
              }}
            >
              <FontAwesomeIcon icon={faTimes} />{" "}
            </span>
            <p className="signup_head mt-3">LOG IN</p>
            <fieldset className="ml-5 signup_phone mt-5">
              <PhoneInput
                className=""
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
              />{" "}
            </fieldset>
            <fieldset className="inputHome ml-5 mt-4 signup_name1">
          <FontAwesomeIcon icon={faKey} className="signup-icon" />
          <Input
            id="myInput"
            className="bodernull111 pl-4 pt-2"
            type="password"
            name="password"
            placeholder="password"
            autocomplete="off"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
            //   value={password}
            //   onChange={this.handelOnChange}
          />
          <FontAwesomeIcon
            icon={faEye}
            className="mt-3 mr-1 signup_email"
            onClick={this.myFunction}
          />
        </fieldset>
          </div>
        </Dialog> */}
      </div>
    );
  }
}
export default HOC(Signup);
