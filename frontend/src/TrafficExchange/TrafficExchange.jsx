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
        <Grid container className="mt-5 submenu-alignment">
        <Grid item md={3}></Grid>
          <Grid item md={6}>
            <div className="inputwidth">
              <Form.Label>Url</Form.Label>
              <Form.Control
                type="name"
                id="Name"
                value={this.state.uid}
                className="mobileviewset"
                onChange={(e) => {
                  this.state = {
                    trafficdialog: true,
                  };
                }}
              />
            </div>
           
          </Grid>
          <Grid item md={3}></Grid>
        </Grid>
        <div className="buttoncenter mb-5 mt-5">
             
              <Button
                variant="contained"
                className="startbtn"
                onClick={this.trafficdialog}
                // onClick={(e) => {
                //   this.setState = {
                //     trafficdialog:false
                //   };
                // }}
              >
                Start
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
