import React, { Component } from "react";
import "./profile.css";
import "../style/quest.css";
import Dialog from "@material-ui/core/Dialog";
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

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
   
    };
  }

  render() {
    return (
      <div className="admin-main ml-auto mr-auto">
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
       
        <div className="ml-4 mt-4">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter user name"
            id="Name"
            className="inputwidth"
            //   onChange={(e) =>
            //     this.setState({ name: e.target.value })
            //   }
          />
        </div>
        <div className="ml-4 mt-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            id="Name"
            className="inputwidth"
            //   onChange={(e) =>
            //     this.setState({ name: e.target.value })
            //   }
          />
        </div>
        <div className="mt-4 mb-4">
                    <Button
                      className="forgetpwdbtn1 mx-auto d-block"
                      type="submit"
                      value="Login"
                    //   onClick={() => {
                    //     this.drilldown();
                    //   }}
                    />
                  </div>
      </div>
    );
  }
}

export default Admin;
