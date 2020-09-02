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
            <div>
              {/* <input
                type="text"
                className="form-control searchboxright mt-4"
                placeholder="Search"
              /> */}
              <button className="mt-4 searchboxright ">Search</button>
            </div>
          </Grid>
        </Grid>
        <br />
        <hr />
        <div>
          <form>
            <Grid container className="submenu-alignment">
              <Grid item md={6}>
                <div className="mt-4 w-75 ml-5">
                  <div className="d-flex mb-2">
                    <TextField
                      id="standard-basic"
                      label="User Name"
                      // disabled={this.state.emailEnable}
                      // onChange={(e) => {
                      //   this.setState({ email: e.target.value });
                      // }}
                    />
                    <div className="align-self-end p-2">
                      <FontAwesomeIcon
                        className="afterplaycolor"
                        icon={faPencilAlt}
                        // onClick={() => {
                        //   this.editForm("email");
                        // }}
                      />
                    </div>
                  </div>
                  <div className="d-flex mb-2">
                    <TextField
                      id="standard-basic"
                      label="Unique ID"
                      // disabled={this.state.emailEnable}
                      // onChange={(e) => {
                      //   this.setState({ email: e.target.value });
                      // }}
                    />
                    <div className="align-self-end p-2">
                      <FontAwesomeIcon
                        className="afterplaycolor"
                        icon={faPencilAlt}
                        // onClick={() => {
                        //   this.editForm("email");
                        // }}
                      />
                    </div>
                  </div>
                  <div className="d-flex mb-2">
                    <TextField
                      id="standard-basic"
                      label="Account Type"
                      // disabled={this.state.emailEnable}
                      // onChange={(e) => {
                      //   this.setState({ email: e.target.value });
                      // }}
                    />
                    <div className="align-self-end p-2">
                      <FontAwesomeIcon
                        className="afterplaycolor"
                        icon={faPencilAlt}
                        // onClick={() => {
                        //   this.editForm("email");
                        // }}
                      />
                    </div>
                  </div>
                  <div className="d-flex mb-2">
                    <TextField
                      id="standard-basic"
                      label="Current Balance"
                      // disabled={this.state.emailEnable}
                      // onChange={(e) => {
                      //   this.setState({ email: e.target.value });
                      // }}
                    />
                    <div className="align-self-end p-2">
                      <FontAwesomeIcon
                        className="afterplaycolor"
                        icon={faPencilAlt}
                        // onClick={() => {
                        //   this.editForm("email");
                        // }}
                      />
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item md={6}>
              <div className="mt-4 w-75 ml-5">
                  <div className="d-flex mb-2">
                    <TextField
                      id="standard-basic"
                      label="Email"
                      // disabled={this.state.emailEnable}
                      // onChange={(e) => {
                      //   this.setState({ email: e.target.value });
                      // }}
                    />
                    <div className="align-self-end p-2">
                      <FontAwesomeIcon
                        className="afterplaycolor"
                        icon={faPencilAlt}
                        // onClick={() => {
                        //   this.editForm("email");
                        // }}
                      />
                    </div>
                  </div>
                  <div className="d-flex mb-2">
                    <TextField
                      id="standard-basic"
                      label="Mobile No."
                      // disabled={this.state.emailEnable}
                      // onChange={(e) => {
                      //   this.setState({ email: e.target.value });
                      // }}
                    />
                    <div className="align-self-end p-2">
                      <FontAwesomeIcon
                        className="afterplaycolor"
                        icon={faPencilAlt}
                        // onClick={() => {
                        //   this.editForm("email");
                        // }}
                      />
                    </div>
                  </div>
                  <div className="d-flex mb-2">
                    <TextField
                      id="standard-basic"
                      label="Profession"
                      // disabled={this.state.emailEnable}
                      // onChange={(e) => {
                      //   this.setState({ email: e.target.value });
                      // }}
                    />
                    <div className="align-self-end p-2">
                      <FontAwesomeIcon
                        className="afterplaycolor"
                        icon={faPencilAlt}
                        // onClick={() => {
                        //   this.editForm("email");
                        // }}
                      />
                    </div>
                  </div>
                  <div className="d-flex mb-2">
                    <TextField
                      id="standard-basic"
                      label="Organisation"
                      // disabled={this.state.emailEnable}
                      // onChange={(e) => {
                      //   this.setState({ email: e.target.value });
                      // }}
                    />
                    <div className="align-self-end p-2">
                      <FontAwesomeIcon
                        className="afterplaycolor"
                        icon={faPencilAlt}
                        // onClick={() => {
                        //   this.editForm("email");
                        // }}
                      />
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    );
  }
}

export default Admin_profile;
