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
import { getAuthData, isLoggedIn } from "../utils";
import axios from "axios";
import { getBaseUrl } from "../utils";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      pwd:"",
    };
  }
  adminlogin = () => {
    //const nameString = "[a-zA-Z]+\\.?";
    // if (this.state.Name.trim()==null || this.state.Name.trim()=="") {
    //   alert("Please Enter User Name");
    //   return;
    // } else if (this.state.Name.trim().length < 4) {
    //   alert("User name must be more than 4 characters.");
    //   return;
    // } else if (this.state.Name.trim().length > 20) {
    //   alert("User name must not exceed 20 characters.");
    // } else if (!this.state.Name.trim().match(nameString)) {
    //   alert("Please enter characters only.");
    //   return;
    // }
    // else if (!this.state.Name.trim().match("admin")) {
    //   alert("UserName Admin");
    //   return;
    // }
    // if (this.state.pwd.length < 8) {
    //   alert("Password must be 8 characters long");
    //   return;
    // }
alert("i am going to adminlogin")

    let temp = {
      mobileNumber: this.state.Name,
      password: this.state.pwd,
    };
    let url = getBaseUrl() + "/login";
    axios
      .post(url, temp)
      .then(
        (response) => {
          if (response.data.message != undefined) {
            alert(response.data.message);
            return;
          }
          let tmp = response.data;
          window.localStorage.setItem("isadminuteLoggedin", true);
         alert("I am going to")
          window.location = "adminute-dashboard";
        },
        (error) => {
          alert(error.response.data.message);
        }
      )
      .catch((e) => {});




 
    
  };
//   componentWillMount() {
//     let temp = !window.localStorage.getItem("isadminuteLoggedin");
// // alert(isLoggedIn());
// if(temp == true || temp =="true"){
 

// }else{
//   console.log("user is login and have a session ")
// window.location ="/adminute-dashboard";
// }
//   }

  render() {
    return (
      <div className="admin-main ml-auto mr-auto">
        {/* <span
          className="float-right pr-2 pt-1"
          onClick={() => {
            this.setState({
              dialogBox2: false,
            });
          }}
        >
          <FontAwesomeIcon icon={faTimes} />{" "}
        </span> */}

        <div className="ml-4 mt-4">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter user name"
            id="Name"
            className="inputwidth"
              onChange={(e) =>
                this.setState({ Name: e.target.value })
              }
          />
        </div>
        <div className="ml-4 mt-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            id="pwd"
            className="inputwidth"
              onChange={(e) =>
                this.setState({ pwd: e.target.value })
              }
          />
        </div>
        <div className="mt-4 mb-4">
          <Button
            className="forgetpwdbtn1 mx-auto d-block"
            type="submit"
            value="Login"
            onClick={this.adminlogin}
          />
        </div>
      </div>
    );
  }
}

export default Admin;
