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
    this.state = {
      formshow: false,
      organization: "",
      deleteoption: false,
      organizationEnable: true,
      profession: "",
      professionEnable: true,
      emailEnable: true,
      username: "",
      email: "",
      usernameEnable: true,
      mobile:"",
      mobileEnable:true,
      unique:"",
      uniqueEnable:true,
      account:"",
      accountEnable:true,
      balance:"",
      balanceEnable:true,
    };
  }
  editForm = (para) => {
    // const { username} = this.state
    if (para == "username") {
      this.setState({ usernameEnable: false });
      // if(username == ""){
      //   alert("Please enter name")
      // }
    }
    if (para == "unique") {
      this.setState({ uniqueEnable: false });
    }
    if (para == "account") {
      this.setState({ accountEnable: false });
    }
    if (para == "balance") {
      this.setState({ balanceEnable: false });
    }
    if (para == "email") {
      this.setState({ emailEnable: false });
    }
    if (para == "mobile") {
      this.setState({ mobileEnable: false });
    }
    if (para == "profession") {
      this.setState({ professionEnable: false });
    }
    if (para == "organization") {
      this.setState({ organizationEnable: false });
    }
  };

  render() {
    return (
      <div className="container mainadminprofile">
        <Grid container className="submenu-alignment">
          <Grid item md={6}>
            <div className="uniquediv uniqueidw">
              <Form.Label>Unique ID</Form.Label>
              <Form.Control
                type="name"
                id="Name"
                className="mobileviewset"
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
              <button
                className="mt-4 searchboxright"
                onClick={() =>
                  this.setState({ formshow: !this.state.formshow })
                }
              >
                Search
              </button>
            </div>
          </Grid>
        </Grid>
        <br />
        <hr />
        <div>
         <form>
            {this.state.formshow ? (
              <Grid container className="submenu-alignment">
                <Grid item md={6}>
                  <div className="mt-4 w-75 ml-5">
                    <div className="d-flex mb-2 gridwodth1">
                      <TextField
                        id="standard-basic"
                        label="User Name"
                        autoComplete="off"
                        disabled={this.state.usernameEnable}
                        onChange={(e) => {
                          this.setState({ username: e.target.value });
                        }}
                      />
                      <div className="align-self-end p-2">
                        <FontAwesomeIcon
                          className="afterplaycolor"
                          icon={faPencilAlt}
                          onClick={() => {
                            this.editForm("username");
                          }}
                        />
                      </div>
                    </div>
                    <div className="d-flex mb-2 gridwodth1">
                      <TextField
                        id="standard-basic"
                        label="Unique ID"
                        disabled={this.state.uniqueEnable}
                        onChange={(e) => {
                          this.setState({ unique: e.target.value });
                        }}
                      />
                      <div className="align-self-end p-2">
                        <FontAwesomeIcon
                          className="afterplaycolor"
                          icon={faPencilAlt}
                          onClick={() => {
                            this.editForm("unique");
                          }}
                        />
                      </div>
                    </div>
                    <div className="d-flex mb-2 gridwodth1">
                      <TextField
                        id="standard-basic"
                        label="Account Type"
                        disabled={this.state.accountEnable}
                        onChange={(e) => {
                          this.setState({ account: e.target.value });
                        }}
                      />
                      <div className="align-self-end p-2">
                        <FontAwesomeIcon
                          className="afterplaycolor"
                          icon={faPencilAlt}
                          onClick={() => {
                            this.editForm("account");
                          }}
                        />
                      </div>
                    </div>
                    <div className="d-flex mb-2 gridwodth1">
                      <TextField
                        id="standard-basic"
                        label="Current Balance"
                        disabled={this.state.balanceEnable}
                        onChange={(e) => {
                          this.setState({ balance: e.target.value });
                        }}
                      />
                      <div className="align-self-end p-2">
                        <FontAwesomeIcon
                          className="afterplaycolor"
                          icon={faPencilAlt}
                          onClick={() => {
                            this.editForm("balance");
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item md={6}>
                  <div className=" w-75 ml-5 marginnill">
                    <div className="d-flex mb-2 gridwodth1">
                      <TextField
                        id="standard-basic"
                        label="Email"
                        autoComplete="off"
                        disabled={this.state.emailEnable}
                        onChange={(e) => {
                          this.setState({ email: e.target.value });
                        }}
                      />
                      <div className="align-self-end p-2">
                        <FontAwesomeIcon
                          className="afterplaycolor"
                          icon={faPencilAlt}
                          onClick={() => {
                            this.editForm("email");
                          }}
                        />
                      </div>
                    </div>
                    <div className="d-flex mb-2 gridwodth1">
                      <TextField
                        id="standard-basic"
                        label="Mobile No."
                        disabled={this.state.mobileEnable}
                        onChange={(e) => {
                          this.setState({ mobile: e.target.value });
                        }}
                      />
                      <div className="align-self-end p-2">
                        <FontAwesomeIcon
                          className="afterplaycolor"
                          icon={faPencilAlt}
                          onClick={() => {
                            this.editForm("mobile");
                          }}
                        />
                      </div>
                    </div>
                    <div className="d-flex mb-2 gridwodth1">
                      <TextField
                        id="standard-basic"
                        label="Profession"
                        disabled={this.state.professionEnable}
                        onChange={(e) => {
                          this.setState({ profession: e.target.value });
                        }}
                      />
                      <div className="align-self-end p-2">
                        <FontAwesomeIcon
                          className="afterplaycolor"
                          icon={faPencilAlt}
                          onClick={() => {
                            this.editForm("profession");
                          }}
                        />
                      </div>
                    </div>
                    <div className="d-flex mb-2 gridwodth1">
                      <TextField
                        id="standard-basic"
                        label="Organisation"
                        disabled={this.state.organizationEnable}
                        onChange={(e) => {
                          this.setState({ organization: e.target.value });
                        }}
                      />
                      <div className="align-self-end p-2">
                        <FontAwesomeIcon
                          className="afterplaycolor"
                          icon={faPencilAlt}
                          onClick={() => {
                            this.editForm("organization");
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            ) : null}
          </form>
        </div>
      </div>
    );
  }
}

export default Admin_profile;
