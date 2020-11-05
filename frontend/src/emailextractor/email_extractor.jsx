import React from "react";
import HOC from "../components/HOC";
import Card from "@material-ui/core/Card";
import { Form } from "react-bootstrap";
import ReactPlayer from "react-player";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import { getBaseUrl } from "../utils";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import "./email_extractor.css";


class Email_extractor extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
    
    };
  }
 

  render() {
      return (
      <div>
      <div>
      <Grid className=" mywebsite_container">
          <Grid item md={6}>
              <div className="ml-5 mt-5">
              <div className="mr-5">
              <Form.Label>Search Query</Form.Label>
                     
               
                        <Form.Control
                          type="name"
                          placeholder="Enter Query"
                          id="Name"
                          className=""
                          autoComplete="off"
                        //   value={this.state.name}
                        //   onChange={(e) =>
                        //     this.setState({ name: e.target.value })
                        //  }
                        />
              </div>
              <p className="select_engine mt-5">Select Search Engine</p>
              <Grid className=" mywebsite_container">
          <Grid item md={6}>  
          <div className="d-flex">
 {/* <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1"> I have a bike</label> */}
          </div>
      
  </Grid>
          <Grid item md={6}>fdgfd</Grid>
          </Grid>
              </div>
          </Grid>
          <Grid item md={6}>
              <div className="email_output mt-5 mb-5">
                <p className="extarct_mail">Output :</p>
              <textarea className="input_textarea"></textarea>
              </div>
          </Grid>
          </Grid>
      </div>
      </div>
    );
  }
}
export default HOC(Email_extractor);
