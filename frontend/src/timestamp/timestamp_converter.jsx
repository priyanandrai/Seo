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
import "./timpstamp-converter.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

class Timestamp_converter extends React.Component {
  constructor(props) {
    super(props);
    this.Timestamptodate = this.Timestamptodate.bind(this);
    this.datetotimestamp = this.datetotimestamp.bind(this);
    this.state = {
      // timestap: "N/A",
      humandate: "N/A",
      datetotime: "N/A",
      inputtimestamp: "",
      dateupdate: "",
      dateupdate1: "",
      dateupdate2: "",
      dateupdate3: "",
      dateupdate4: "",
      dateupdate5: "",
      dateupdate6: "",
      timestamp1: "N/A",
      timestamp: 1578162600000,
    };
  }
  Timestamptodate() {
    if (this.state.inputtimestamp === "") {
      this.setState({
        snackbar: true,
        error: "please insert Timestamp",
      });
      return;
    }
    var d = new Date(this.state.inputtimestamp);
    this.setState({
      humandate: d,
    });

    // let result = document.getElementById("resulttime");

    // let temp = this.state.timestamp;

    // let dateObj = new Date(temp);

    // let month = dateObj.getMonth() + 1;
    // if (month < 10) {
    //   month = "0" + month;
    // }
    // let year = dateObj.getFullYear();
    // let date = dateObj.getDate();
    // if (date < 10) {
    //   date = "0" + date;
    // }
    // let hour = dateObj.getHours();
    // if (hour < 10) {
    //   hour = "0" + hour;
    // }
    // let min = dateObj.getMinutes();
    // if (min < 10) {
    //   min = "0" + min;
    // }
    // let sec = dateObj.getSeconds();
    // if (sec < 10) {
    //   sec = "0" + sec;
    // }

    // result.innerText =
    //   `${month}-${date}-${year}` + " " + `${hour}:${min}:${sec}`;
    // });
  }
  componentDidMount() {}
  datetotimestamp() {
    if (this.state.dateupdate1 === "") {
      this.setState({
        snackbar: true,
        error: "please insert Date and Time",
      });
      return;
    }
    if(this.state.dateupdate2 >12){
      this.setState({
        snackbar: true,
        error: "Invalid Month",
      });
      return;
    }
    if(this.state.dateupdate3 >31){
      this.setState({
        snackbar: true,
        error: "Invalid Date",
      });
      return;
    }
    if(this.state.dateupdate4 >24){
      this.setState({
        snackbar: true,
        error: "Invalid Hour",
      });
      return;
    }
    if(this.state.dateupdate5 >60){
      this.setState({
        snackbar: true,
        error: "Invalid Minutes",
      });
      return;
    }
    if(this.state.dateupdate6 >60){
      this.setState({
        snackbar: true,
        error: "Invalid Second",
      });
      return;
    }
    let today = new Date(
      this.state.dateupdate1 +
        " " +
        this.state.dateupdate2 +
        " " +
        this.state.dateupdate3 +
        " " +
        this.state.dateupdate4 +
        ":" +
        this.state.dateupdate5 +
        ":" +
        this.state.dateupdate6
    );
    let timestamp = today.valueOf();
    console.log(today, "Today");
    this.setState({
      timestamp1: timestamp.toString(),
    });
  }
  closeSnackbar = () => {
    this.setState({ snackbar: false });
  };

  render() {
    const fullYear = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    let date = new Date().getDate();
    if (date < 10) {
      date = "0" + date;
    }
    let hours = new Date().getHours();
    if (hours < 10) {
      hours = "0" + hours;
    }
    let min = new Date().getMinutes();
    if (min < 10) {
      min = "0" + min;
    }
    let sec = new Date().getSeconds();
    if (sec < 10) {
      sec = "0" + sec;
    }
    return (
      <div>
        <p className="time_stamp_para">
          {" "}
          Epoch & Unix Timestamp Conversion Tools
        </p>
        <Grid className=" mywebsite_container">
          <Grid item md={6}>
            <div className="time_stamp mt-4 mb-5">
              <p className="time_convert">Convert timestamp to date</p>
              <Form.Control
                type="name"
                placeholder="Time stamp"
                id="Name"
                className="time_width"
                autoComplete="Off"
                value={this.state.inputtimestamp}
                onChange={(e) =>
                  this.setState({ inputtimestamp: e.target.value })
                }
              />
            </div>
            <div className="timestamp_btn mb-5">
              <Button
                id="timebutton"
                variant="contained"
                className="timestamp_btn_color"
                onClick={this.Timestamptodate}
              >
                Convert to Human Date
              </Button>
            </div>
            <div className="ml-5">
              <p className="time_milisecond">
                Your time zone : {this.state.humandate}
              </p>
            </div>
          </Grid>
          <Grid item md={6}>
            <div className="time_stamp mb-5">
              <p className="time_convert">Convert date to timestamp</p>
              <div className="d-flex">
                <span className="year_span_width">
                  <Form.Label>Year</Form.Label>
                  <Form.Control
                    maxlength="4"
                    type="name"
                    id="Name"
                    className="year_width"
                    autoComplete="Off"
                    placeholder={fullYear}
                    value={this.state.dateupdate1}
                    onChange={(e) => {
                      if (isNaN(e.target.value)) {
                        return;
                      }
                      this.setState({ dateupdate1: e.target.value });
                    }}
                  />
                </span>
                <span className="year_span_width ml-1">
                  <Form.Label>Mon</Form.Label>
                  {/* <div className="sect_width">
                  <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={this.state.dateupdate2}
                    onChange={(e) =>
                      this.setState({ dateupdate2: e.target.value })}
            >
              <MenuItem value={10000}>01</MenuItem>
              <MenuItem value={60000}>02</MenuItem>
              <MenuItem value={120000}>03</MenuItem>
              <MenuItem value={180000}>04</MenuItem>
              <MenuItem value={240000}>05</MenuItem>
              <MenuItem value={300000}>06</MenuItem>
              <MenuItem value={300000}>07</MenuItem>
              <MenuItem value={300000}>08</MenuItem>
              <MenuItem value={300000}>09</MenuItem>
              <MenuItem value={300000}>10</MenuItem>
              <MenuItem value={300000}>11</MenuItem>
              <MenuItem value={300000}>12</MenuItem>
            </Select></div> */}

                  <Form.Control
                    maxlength="2"
                    type="name"
                    placeholder={month}
                    id="Name"
                    className="year_width1"
                    autoComplete="Off"
                    value={this.state.dateupdate2}
                    onChange={(e) =>{
                      if (isNaN(e.target.value)) {
                        return;
                      }
                   
                      this.setState({ dateupdate2: e.target.value })
                    } }
                  />
                </span>
                <span className="year_span_width ml-1">
                  <Form.Label>Date</Form.Label>

                  <Form.Control
                    maxlength="2"
                    type="name"
                    placeholder={date}
                    id="Name"
                    className="year_width1"
                    autoComplete="Off"
                    value={this.state.dateupdate3}
                    onChange={(e) =>{

                      if (isNaN(e.target.value)) {
                        return;
                      }
                      this.setState({ dateupdate3: e.target.value })
                    }}
                  />
                </span>
                <span className="year_span_width ml-1">
                  <Form.Label>Hr</Form.Label>

                  <Form.Control
                    maxlength="2"
                    type="name"
                    placeholder={hours}
                    id="Name"
                    className="year_width1"
                    autoComplete="Off"
                    value={this.state.dateupdate4}
                    onChange={(e) =>{
                      if (isNaN(e.target.value)) {
                        return;
                      }
                   
                      this.setState({ dateupdate4: e.target.value })
                    } }
                  />
                </span>
                <span className="year_span_width ml-1">
                  <Form.Label>Min</Form.Label>

                  <Form.Control
                    maxlength="2"
                    type="name"
                    placeholder={min}
                    id="Name"
                    className="year_width1"
                    autoComplete="Off"
                    value={this.state.dateupdate5}
                    onChange={(e) =>{
                      if (isNaN(e.target.value)) {
                        return;
                      }
                    
                      this.setState({ dateupdate5: e.target.value })
                    }}
                  />
                </span>
                <span className="year_span_width ml-1">
                  <Form.Label>Sec</Form.Label>

                  <Form.Control
                    maxlength="2"
                    type="name"
                    placeholder={sec}
                    id="Name"
                    className="year_width1"
                    autoComplete="Off"
                    value={this.state.dateupdate6}
                    onChange={(e) =>{
                      if (isNaN(e.target.value)) {
                        return;
                      }
                   
                      this.setState({ dateupdate6: e.target.value })
                    } }
                  />
                </span>
              </div>
            </div>
            <div className="timestamp_btn mb-5">
              <Button
                variant="contained"
                className="timestamp_btn_color"
                onClick={this.datetotimestamp}
              >
                Convert to Timestamp
              </Button>
            </div>
            <div>
              <p className="time_milisecond">
                Timestamp in milliseconds : {this.state.timestamp1}
              </p>
            </div>
          </Grid>
        </Grid>

        <div>
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            open={this.state.snackbar}
            onClose={this.closeSnackbar}
            message={
              this.state.error === null ? this.state.message : this.state.error
            }
            action={
              <React.Fragment>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="warning"
                  onClick={this.closeSnackbar}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />
        </div>
      </div>
    );
  }
}
export default HOC(Timestamp_converter);
