import React, { Component } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";

import Grid from "@material-ui/core/Grid";
import HOC from "../components/HOC";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ReactPlayer from "react-player";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from "@material-ui/core/Dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "react-bootstrap";
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
      url: "",
      warning:"",
      duration:10,
      checkbrowser:false,
    };
  }
  trafficdialog() {
  
    if (this.state.url == "") {
      alert("please enter the URL.");
      return;
    } 

    var win = window.open(this.state.url);

    // var win=  window.open("http://srcservicesltd.com/");
    setTimeout(function () {
      win.close();
    }, 10000);
  }

componentWillMount(){
  //let tempp= navigator.userAgent.indexOf("Firfox") == -1;
  let tempp= navigator.userAgent.search("Firefox") == -1;
  
this.setState({
checkbrowser:tempp
})
}
  render() {
    return (
      <div className="mt-5">
        <div className=" container">
          <div className="traffic inputtraffic ">
            <Form.Label className="leftt mt-3">Enter Url</Form.Label>
            <Form.Control
              type="Url"
              value={this.state.url}
              className="mt-3"
              onChange={(e) => {
                this.setState({
                  url: e.target.value,
                });
              }}
            />
          </div>
          {this.state.checkbrowser==true?   
             <div className="alertcolor">Fire fox + PC is STRONGLY recommended
</div>: ""}
      
          <div className="timecenter">
            <span className="mr-4 mt-2">
              <p>Enter Time Limit</p>
            </span>{" "}
            <span>
           
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={this.state.duration}
          onChange={(e)=>{
            this.setState({
              duration:e.target.value
            })
          }}
        >
           <MenuItem value={1}>1 min</MenuItem>
          <MenuItem value={2}>2 min</MenuItem>
          <MenuItem value={3}>3 min</MenuItem>
          <MenuItem value={5}>5 min</MenuItem>
          <MenuItem value={10}>10 min</MenuItem>
          <MenuItem value={20}>20 min</MenuItem>
          <MenuItem value={30}>30 min</MenuItem>
        </Select>
              
            </span>
          </div>
        
        </div>

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
            // onClick={this.trafficdialog}
          >
            Stop
          </Button>
        </div>

        {/* <Dialog
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
        </Dialog> */}
      </div>
    );
  }
}
export default HOC(TrafficExchange);
