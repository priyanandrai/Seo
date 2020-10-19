import React from "react";
// import { Link } from "react-router-dom";
import Logo from "./Logo";
import Grid from "@material-ui/core/Grid";
import logo from "../images/logo.png";
import { Form } from "react-bootstrap";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import { getBaseUrl } from "../utils";

// const Footer = () => {
//
class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      submit: false,
    };
  }
  submit = () => {
    if (this.state.name.trim() === "") {
      this.setState({ snackbar: true, error: "Please enter  name." });
      return;
    }

    const regexex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.state.email.trim() === "") {
      this.setState({
        snackbar: true,
        error: "Please Enter your E-mail Id",
      });

      return;
    } else if (!this.state.email.match(regexex)) {
      this.setState({
        snackbar: true,
        error: "please enter a valid E-mail Id.",
      });

      return;
    }
    let url = getBaseUrl() + "/subscribe";
    let temp = {
      name: this.state.name,
      email: this.state.email,
    };
    axios
      .post(url, temp)
      .then(
        (response) => {
          if (response.data.message == undefined) {
          } else {
            this.setState({
              snackbar: true,
              error: response.data.message,
            });
            // alert(response.data.message);
          }
          this.setState({
            notifiy: !this.state.notifiy,
            name: "",
            email: "",
          });
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

    //
  };

  closeSnackbar = () => {
    this.setState({ snackbar: false });
  };
  render() {
    const fullYear = new Date().getFullYear();
    return (
      // <footer>
      <div>
        <div className="footer_color">
          <Grid container>
            <Grid item md={3}>
              <img className="logos ml-5 mt-5" src={logo} alt="" />
              <p className="footer_follow ml-5">Follow Us</p>
              <div className="ml-5">
                <a
                  href="https://www.facebook.com/SeemaRaiConsultancyServices"
                  target="_blank"
                >
                  <i className="fa fa-facebook icon_color_footer"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/seema-india-private-limited/?viewAsMember=true"
                  target="_blank"
                >
                  <i className="fa fa-linkedin ml-4 icon_color_footer"></i>
                </a>
                <a href="https://twitter.com/SRConsultancyS1" target="_blank">
                  <i className="fa fa-twitter ml-4 icon_color_footer"></i>
                </a>
              </div>
            </Grid>
            <Grid item md={3}>
              <p className="footer_top ml-5"><u>Services</u></p>
              {/* <div className="ml-5 border-top bodercolor11"> </div> */}

              <div className="ml-5 mt-2">
                <a
                  href="http://srcservicesltd.com/testing-as-a-services"
                  className="Services_color"
                  target="_blank"
                >
                  Testing As a Services
                </a>
                <br />
               
                <a
                  href="http://srcservicesltd.com/development-as-a-services"
                  className="Services_color"
                  target="_blank"
                >
              
                  Devlopment As a Services
                </a>
                <br />
              
                <a
                  href="http://srcservicesltd.com/support-as-a-services"
                  className="Services_color"
                  target="_blank"
                >
              
                  Support As a Services
                </a>
                <br />
             
                <a
                  href="http://srcservicesltd.com/manpower-as-a-services"
                  className="Services_color"
                  target="_blank"
                >
                  Manpower As a Services
                </a>
                <br />
               
                <a
                  href="http://srcservicesltd.com/devOps-as-a-services"
                  className="Services_color"
                  target="_blank"
                >
                  DevOps As a Services
                </a>
              </div>
            </Grid>
            <Grid item md={3}>
              <p className="footer_top ml-5"><u>Products</u></p>
              {/* <div className="ml-5 border-top bodercolor11"> </div> */}
              <div className="ml-5 mt-2">
                <a href="dashboard" className="Services_color" target="_blank">
                  SEO Automator
                </a>
                <br />
               
                <a
                  className="Services_color"
                  href="trafficexchange"
                  target="_blank"
                >
                  Traffic Exchange
                </a>
                <br />
              
                <a href="website" className="Services_color" target="_blank">
                  YouTube Views /Likes
                </a>
                <br />
               
                <a href="website" className="Services_color" target="_blank">
                  Facebook Views /Likes
                </a>
                <br />
            
                <a className="Services_color" href="website" target="_blank">
                  Social Media Manager
                </a>
              </div>
            </Grid>
            <Grid item md={3}>
              <p className="footer_top ml-5"><u>SubScribe</u></p>
              {/* <div className="ml-5 border-top bodercolor1122"> </div> */}
              <div className="mr-5 ml-5 mt-2">
                <div>
                  <Form.Control
                  className="footer_input"
                    type="name"
                    placeholder="Name"
                    id="Name"
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                  />
                </div>
                <div className="mt-3">
                  <Form.Control
                   className="footer_input"
                    type="name"
                    placeholder="Email Address"
                    id="Name"
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </div>
                <div className="mt-3">
                  <button className="footer-btn_color" onClick={this.submit}>
                    Submit
                  </button>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="footerin">
          <Logo />
          <p className="footer_p">
            &copy; {fullYear}. All Rights Reserved. | Privacy Policy
          </p>
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
              this.state.error === null ? this.state.message : this.state.error
            }
            action={
              <React.Fragment>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="warning"
                  onClick={this.closeSnackbar}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />
        </div>
      </div>
      // </footer>
    );
  }
}

export default Footer;
