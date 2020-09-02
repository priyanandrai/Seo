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

class Admin_dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
   
    };
  }

  render() {
    return (
      <div className="container mt-5">
         <Grid container className="submenu-alignment">
          <Grid item md={6}>
          <div className="mt-5 imagecentermobile1">
              <img
                className="profilepicture1 mx-auto d-block"
                src="https://i.pinimg.com/originals/11/fd/aa/11fdaae6f8e4deb13481103b4e9a0744.jpg"
              />
            </div>
           
            <div className="ml-4 mt-4 usermobile">
          {/* <Form.Label>User Name</Form.Label> */}
          <Form.Control
            type="name"
            placeholder="User Details"
            id="Name"
            className="userdetails"
            //   onChange={(e) =>
            //     this.setState({ name: e.target.value })
            //   }
          />
        
             </div>
          </Grid>
          <Grid item md={6}>
          <div className="mt-5 imagecentermobile1 ">
              <img
                className="profilepicture1 mx-auto d-block"
                src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/02/rupee-vs-dollar-1581315010.jpg"
                
              />
                
            </div>
            <div>
            <div className="ml-4 mt-4 usermobile">
          {/* <Form.Label>User Name</Form.Label> */}
          <Form.Control
            type="name"
            placeholder="Credit Coins"
            id="Name"
            className="userdetails"
            //   onChange={(e) =>
            //     this.setState({ name: e.target.value })
            //   }
          />
        </div>
             </div>
          </Grid>
          </Grid>
     
      </div>
    );
  }
}

export default Admin_dashboard;
