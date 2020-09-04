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
  test = () => {
    window.location="/adminute-444-profile";
  }

  render() {
    return (
      <div className="container mt-5">
         <Grid container className="submenu-alignment">
          <Grid item md={4}>
         
             <div className="leftimagediv" onClick={() => this.test()}>
             <div className="mt-4 imagecentermobile1">
              <img
                className="profilepicture1 mx-auto d-block"
                src="https://i.pinimg.com/originals/11/fd/aa/11fdaae6f8e4deb13481103b4e9a0744.jpg"
              />
            </div>
            <div>
              <h4 className="ml-4">User Details</h4>
            </div>
             </div>
          </Grid>
          <Grid item md={4}>
          <div className="leftimagediv">
             <div className="mt-4 imagecentermobile1">
              <img
                className="profilepicture1 mx-auto d-block"
                src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/02/rupee-vs-dollar-1581315010.jpg"
              />
            </div>
            <div>
              <h4 className="ml-4">Credit Coins</h4>
            </div>
             </div>
          </Grid>
          <Grid item md={4}></Grid>
          </Grid>
     
      </div>
    );
  }
}

export default Admin_dashboard;
