import React from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";

import Grid from "@material-ui/core/Grid";
import HOC from "../components/HOC";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ReactPlayer from "react-player";
import Dialog from "@material-ui/core/Dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from 'react-bootstrap';
import {
  faPencilAlt,
  faTimes,
  faDownload,
  faUser,
  faPlay,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/Button";
import { getAuthData, isLoggedIn } from "../utils";
import Input from "../components/Input";
import "./traffic.css";
class TrafficExchange extends React.Component {
  constructor(props) {
    super(props);
    this.trafficdialog = this.trafficdialog.bind(this);
    this.state = {
      trafficdialog: false,
    };
  }
  trafficdialog() {
    this.setState({
      trafficdialog: !this.state.trafficdialog,
    });
  }
  render() {
    return (
      <div className="mt-5">
      
      <div className="traffic container">  <Grid className="mt-5">
      
         
            <div className="inputtraffic ">
              <Form.Label className="leftt mt-3">Enter Url</Form.Label>
              <Form.Control
                type="name"
                id="Name"
                value={this.state.uid}
                className="mt-3"
                onChange={(e) => {
                  this.state = {
                    trafficdialog: true,
                  };
                }}
              />   <Form.Label className="leftt mt-3">Enter Time Limit</Form.Label><br/><br/>
             <Dropdown className="leftt">
  <Dropdown.Toggle variant="dark" id="dropdown-basic">
   Time Limit
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            </div>
           
         
        
        </Grid></div>
     
        <div className="buttoncenter mb-5 mt-5">
             
              <Button
                variant="contained"
                className="startbtn"
                onClick={this.trafficdialog}
               >
                Start
              </Button>
              
              <Button
                variant="contained"
                className="startbtn ml-5"
                onClick={this.trafficdialog}
               >
               Stop
              </Button>
            </div>

        <Dialog
          onClose={() => {
            this.setState({
              trafficdialog: false,
            });
          }}
          open={this.state.trafficdialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="trafficstart">
            <span
              className="floatright crossbtncolor mt-2"
              onClick={() => {
                this.setState({
                  trafficdialog: false,
                });
              }}
            >
              <FontAwesomeIcon icon={faTimes} />{" "}
            </span>
            <div>Hi I am in dialog box</div>
          </div>
        </Dialog>
      </div>
    );
  }
}
export default HOC(TrafficExchange);
