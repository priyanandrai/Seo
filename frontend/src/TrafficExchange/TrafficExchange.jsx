import React from "react";
import { Container, Row, Col, Card,Form } from "react-bootstrap";

import Grid from "@material-ui/core/Grid";
import HOC from "../components/HOC";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ReactPlayer from "react-player";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { getAuthData, isLoggedIn } from "../utils";
import Input from "../components/Input";
import "./traffic.css";
class TrafficExchange extends React.Component {
  constructor(props) {
    super(props);
    this.handlesubmit=this.handlesubmit.bind(this);
    this.state = {
      trafficdialog:false
    };
  }
  handlesubmit(){
    this.setState = ({
      trafficdialog:true
    });
  }
  render() {
    return (
      <div className="mt-5 mb-5 center makecenter">
     
     <Grid container className="mt-5 submenu-alignment">
          <Grid item md={12}>
            <div className="mt-5 uniquediv uniqueidw">
              <Form.Label>Url</Form.Label>
              <Form.Control
                type="name"
                id="Name"
                value={this.state.uid}
                className="mobileviewset"
                onChange={(e) => {
                  this.state = {
                    trafficdialog:true
                  };
                }}
              />
            </div>
           <div className="ms"> <Button
                            variant="contained"
                            className="startbtn btttn mt-5"
                            onClick={this.handlesubmit}
                            // onClick={(e) => {
                            //   this.setState = {
                            //     trafficdialog:false
                            //   };
                            // }}
                          >
                            Start
                          </Button></div>
          </Grid>
          </Grid>
     
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
    <div className="trafficstart">Hi I am in dialog box </div>

        </Dialog>
      </div>
    );
  }
}
export default HOC(TrafficExchange);
