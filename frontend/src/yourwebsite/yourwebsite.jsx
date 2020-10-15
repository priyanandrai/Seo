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
import axios from "axios";
import { getBaseUrl } from "../utils";
class Yourwebsite extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email:"",
      notifiy: false,
      // facebook:"https://www.facebook.com/SeemaRaiConsultancyServices"
    };
  }
  notifiy = () => {
    const regexex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.state.email.trim() === "") {
      alert("Please Enter your email Id");
      return;
    } else if (!this.state.email.match(regexex)) {
      alert("please enter a valid email Id.");

      return;
    }
    let url = getBaseUrl() + "/subscribe";
    axios
      .post(url, this.state)
      .then(
        (response) => {

          this.setState({
               notifiy:!this.state.notifiy
           })

        
        },
        (error) => {
         
        }
      )
     
  
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

  render() {
    return (
      <div className="websitecloro ml-auto mr-auto">
        <div className="logocenter">
          <img className="logoheight" src={logo} alt="" />
          <p className="fontweighthight">We are coming soon</p>
        </div>
        <p className="parapadiing">
          We are almost there! If you want to get notified when the tool goes
          live,subscribe to our mailing list!
        </p>
        <div className="mt-5">
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
      </div>
    );
  }
}
export default HOC(Yourwebsite);
