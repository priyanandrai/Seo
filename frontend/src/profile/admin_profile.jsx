import React, { Component } from "react";
import "./profile.css";
import "../style/quest.css";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faTimes,
  faDownload,
  faUser,
  faPlay,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Input from "../components/Input";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "../components/Button";
import TextField from "@material-ui/core/TextField";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/semantic-ui.css";

class Admin_profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container mainadminprofile">
        <Grid container className="submenu-alignment">
          <Grid item md={6}>
            <div>
              <Form.Label>Unique ID</Form.Label>
              <Form.Control
                type="name"
                id="Name"
                className="uniqueidw"
                //   onChange={(e) =>
                //     this.setState({ Name: e.target.value })
                //   }
              />
            </div>
          </Grid>
          <Grid item md={6}>
            <div className="uniqueidw1">
              <Form.Label>Mobile No.</Form.Label>
              <PhoneInput placeholder={"Mobile no. *"} country={"us"} />
            </div>
          </Grid>
        </Grid>
        <div>{/* <input type="text"  */}</div>
      </div>
    );
  }
}

export default Admin_profile;
