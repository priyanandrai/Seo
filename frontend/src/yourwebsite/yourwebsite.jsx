import React from "react";
// import { Container, Row, Col, Card,Form } from "react-bootstrap";
import logo from "../images/logo.png";
import { Form } from "react-bootstrap";
import HOC from "../components/HOC";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./yourwebsite.css";
import logo6 from "../images/logo6.jpg";
import logo7 from "../images/logo7.png";
import logo8 from "../images/logo8.jpg";
import logo9 from "../images/logo9.png";
import Dialog from "@material-ui/core/Dialog";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import { getBaseUrl } from "../utils";

class Yourwebsite extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      notifiy: false,
      // facebook:"https://www.facebook.com/SeemaRaiConsultancyServices"
    };
  }
  notifiy = () => {
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
    axios
      .post(url, this.state)
      .then(
        (response) => {
          if (response.data.message == undefined) {
          } else {
            alert(response.data.message);
          }
          this.setState({
            notifiy: !this.state.notifiy,
            email: "",
          });
        },
        (error) => {
          alert(error.response.data.message);
        }
      )
      .catch((e) => {});

    //
  };
  facebook = () => {
    window.open("https://www.facebook.com/SeemaRaiConsultancyServices");
  };
  linkdin = () => {
    window.open(
      "https://www.linkedin.com/company/seema-india-private-limited/?viewAsMember=true"
    );
  };
  youtube = () => {
    window.open(" https://www.youtube.com/channel/UClTbdAlVj4Mp8zlOFVB9jDw");
  };
  twitter = () => {
    window.open(" https://twitter.com/SRConsultancyS1   ");
  };
  closeSnackbar = () => {
    this.setState({ snackbar: false });
  };

  render() {
    return (
      <div className="websitecloro ml-auto mr-auto">
        <div className="logocenter">
          <img className="logoheight" src={logo} alt="" />
          <p className="fontweighthight">We are Coming Soon</p>
        </div>
        <p className="parapadiing">
          We are almost there! If you want to get notified when the tool goes
          live,subscribe to our mailing list!
        </p>
        <div className="mt-5 input_media">
          <Form.Control
            type="name"
            placeholder="Email Address"
            id="Name"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>
        <div className="button_center mt-5">
          <button className="button_color" onClick={this.notifiy}>
            Notify Me!
          </button>
        </div>
        <div className="icons_padding mt-5">
          <span>
            {" "}
            <img
              className="facbook_size"
              src={logo6}
              alt=""
              onClick={this.facebook}
            />
          </span>
          <span className="ml-4">
            {" "}
            <img
              className="pin_size"
              src={logo7}
              alt=""
              onClick={this.linkdin}
            />
          </span>
          <span className="ml-4">
            {" "}
            <img
              className="facbook_size1"
              src={logo8}
              alt=""
              onClick={this.twitter}
            />
          </span>
          <span className="ml-4">
            {" "}
            <img
              className="youtube_size"
              src={logo9}
              alt=""
              onClick={this.youtube}
            />
          </span>
        </div>
        <div>
          {" "}
          <Dialog
            onClose={() => {
              this.setState({
                notifiy: false,
              });
            }}
            open={this.state.notifiy}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <div className="notifiy_width">
              <span
                className="floatright crossbtncolor mt-2"
                onClick={() => {
                  this.setState({
                    notifiy: false,
                  });
                }}
              >
                <FontAwesomeIcon icon={faTimes} />{" "}
              </span>
              <div className="mt-5">
                <p className="thank_you">Thank You </p>
                <p className="subscribe_our">To Subscribe our mailing list!</p>
              </div>
            </div>
          </Dialog>
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
    );
  }
}
export default HOC(Yourwebsite);
