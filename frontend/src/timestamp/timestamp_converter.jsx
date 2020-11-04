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

class Timestamp_converter extends React.Component {
  constructor(props) {
    super(props);
this.Timestamptodate=this.Timestamptodate.bind(this);
this.datetotimestamp=this.datetotimestamp.bind(this);
    this.state = {
      timestap:"N/A",
      datetotime:"N/A",
      dateupdate:"",
      timestamp: 1578162600000
    };
  }
  Timestamptodate(){
    if (this.state.timestamp === "") {
        this.setState({
          snackbar: true,
          error: "please insert date",
        });
        return;
      }
      // if (this.state.timestamp === timestamp) {
      //   this.setState({
      //     snackbar: true,
      //     error: "dsfsd",
      //   });
      //   return;
      // }
    // let btnGet = document.getElementById('timebutton');
    let result = document.getElementById('resulttime');
     
    //1/5/2020
  let temp =this.state.timestamp;
     
    // btnGet.addEventListener('click', () => {
        let dateObj = new Date(temp);
     
        let month = dateObj.getMonth() + 1;
        if (month < 10) {
          month = "0" + month;
        }
        let year = dateObj.getFullYear();
        let date = dateObj.getDate();
        if (date < 10) {
          date = "0" + date;
        }
        let hour = dateObj.getHours();
        if (hour < 10) {
          hour = "0" + hour;
        }
        let min =dateObj.getMinutes();
        if (min < 10) {
          min = "0" + min;
        }
        let sec =dateObj.getSeconds();
        if (sec < 10) {
          sec = "0" + sec;
        }
     
        result.innerText = `${month}-${date}-${year}`+" "+`${hour}:${min}:${sec}`;
    // });
  }
  // componentDidMount(){

  //   let datennn=Math.floor(new Date().getTime()/1000.0);

      
  // }
  datetotimestamp(){

    // alert("Hii")
    // let a=this.state.dateupdate;
    //  alert(a)

//     var dateString = a,
//     dateTimeParts = dateString.split(' '),
//     timeParts = dateTimeParts[1].split(':'),
//     dateParts = dateTimeParts[0].split('-'),
//     date;

// date = new Date(dateParts[2], parseInt(dateParts[1], 10) - 1, dateParts[0], timeParts[0], timeParts[1]);

// console.log(date.getTime()); //1379426880000
// console.log(date); 
// new Date().getTime()/1000;
// alert(date)
//////////alert(	Math.floor(new Date().getTime()/1000.0));

    // console.log("r54534",Math.floor(new Date().getTime()/1000.0))
    // let datetotime= Math.floor(new Date().getTime()/1000.0)
    // if (this.state.dateupdate === "") {
    //   this.setState({
    //     snackbar: true,
    //     error: "please insert date",
    //   });
    //   return;
    // }
    // if (this.state.dateupdate === datetotime) {
    //   this.setState({
    //     snackbar: true,
    //     error: "dsfsd",
    //   });
    //   return;
    // }

   
   
  }
  closeSnackbar = () => {
    this.setState({ snackbar: false });
  };

  render() {
//     const unixTime = 1210981217;
// const date = new Date(unixTime*1000);
// console.log(date.toLocaleDateString("en-US"));
//expected: "5/16/2008"
    return (
      <div>
        <p className="time_stamp_para"> Epoch & Unix Timestamp Conversion Tools</p>
        <Grid className=" mywebsite_container">
          <Grid item md={6}>
          <div className="time_stamp mt-5 mb-5">
            <p className="time_convert">Convert timestamp to date</p>
          <Form.Control
            type="name"
            placeholder="Time stamp"
            id="Name"
            className="time_width"
            value={this.state.timestamp}
            onChange={(e) => this.setState({ timestamp: e.target.value })}
          />
        </div>
        <div className="timestamp_btn mb-5">
          <Button id="timebutton"
            variant="contained"
            className="timestamp_btn_color"
            onClick={this.Timestamptodate}
          >
            Converter
          </Button>
        </div>
        <div className="ml-5">
         <p id="resulttime">{this.state.timestap}</p>
        </div>
        </Grid>
        <Grid item md={6}>
           
        <div className="time_stamp mt-5 mb-5">
        <p className="time_convert">Convert date to timestamp</p>
          <Form.Control
            type="name"
            placeholder="Time stamp"
            id="Name"
            className="time_width"
            value={this.state.dateupdate}
            onChange={(e) => this.setState({ dateupdate: e.target.value })}
          />
        </div>
        <div className="timestamp_btn mb-5">
          <Button
            variant="contained"
            className="timestamp_btn_color"
            onClick={this.datetotimestamp}
          >
            Converter
          </Button>
        </div>
        <div>
            <p>{this.state.datetotime}</p>
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
