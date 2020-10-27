import React from "react";
import HOC from "../components/HOC";
import { Form } from "react-bootstrap";


import logo20 from "../images/logo20.png";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { getBaseUrl } from "../utils";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
import "./youtube.css";


class Youtube extends React.Component {
  constructor(props) {
    super(props);
    this.trafficdialogend = this.trafficdialogend.bind(this);
    this.trafficdialog = this.trafficdialog.bind(this);
    this.openWindow = this.openWindow.bind(this);
    this.getClientData = this.getClientData.bind(this);
    this.updatecomponentData = this.updatecomponentData.bind(this);
    this.updatecountForBoth = this.updatecountForBoth.bind(this);
    this.state = {
        urllhit: [],
        total_count: "0",
        archieved_views: "0",
        remaining_balance_views: "0",
        trafficdialog: false,
        url: "",
        numberofURLopen: 0,
        warning: "",
        duration: 10000,
        checkbrowser: false,
        windowHandler: [],
        list: []
    };
  }
  updatecountForBoth(name) {
    let self = this;
    let url = getBaseUrl() + "/updatearchivedviews?url=" + name;
    axios.get(url).then(
      (response) => {},
      (error) => {}
    );

    url = getBaseUrl() + "/updateCountviews?url=" + this.state.url;
    axios.get(url).then(
      (response) => {
        this.getClientData();
      },
      (error) => {}
    );
  }

// totalcount(){
//   var count_hit =JSON.parse(this.state.count_hit) ;
//     var count_remaining =JSON.parse(this.state.count_remaining) ;
//          var total_count = count_hit + count_remaining;
//          this.setState({ total_count: total_count });
// }

  getClientData() {

    let self = this;
    let url =
      getBaseUrl() +
      "/getpersoninformation?url=" +
      window.localStorage.getItem("ClientUrl");
    axios.get(url).then(
      (response) => {
        // self.totalcount();
        //   var count_hit =JSON.parse(this.state.count_hit==undefined ? "" :this.state.count_hit) ;
        // var count_remaining =JSON.parse(this.state.count_remaining==undefined ? "":this.state.count_remaining) ;
        // var total_count = count_hit + count_remaining;
        // self.setState({ total_count: total_count });
        self.setState({
            archieved_views: response.data.archieved_views,
          remaining_balance_views: response.data.remaining_balance_views,
        
        });
        // alert(this.state.count_hit);
        var archieved_views =0;
        if(this.state.archieved_views==undefined) 
        {
         this.setState({
            archieved_views:0,
         });
        }
        
        // alert(count_hit);
        var remaining_balance_views =0;
        if(this.state.remaining_balance_views==undefined)
        {
         this.setState({
            remaining_balance_views:0,
         });
        }
        // var count_remaining =JSON.parse(this.state.count_remaining==undefined ? "":this.state.count_remaining) ;
        // console.log(count_remaining);
        var total_count = JSON.parse(this.state.archieved_views) +JSON.parse(this.state.remaining_balance_views);
        this.setState({ total_count: total_count });
        
      },
      (error) => {}
    );
  }

  trafficdialog() {
    const regesxemssm = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    if (this.state.url === "") {
      this.setState({
        snackbar: true,
        error: "Please enter the url",
      });
      return;
    } else if (!this.state.url.match(regesxemssm)) {
      this.setState({
        snackbar: true,
        error: "please enter Only Youtube Video Urls.",
      });
      return;
    }
    window.localStorage.setItem("ClientUrl", this.state.url);
    this.getClientData();
    this.openWindow();
    setTimeout(() => {
      this.openWindow();
    }, this.state.duration);

    let url = getBaseUrl() + "/saveyoutubeUrl";
    let temp = {
      url: this.state.url,
    };
    axios.post(url, temp).then(
      (response) => {
        window.open("youtube_player");
      },
    
      (error) => {}
    );
  }
  updatecomponentData() {
    if (window.localStorage.getItem("ClientUrl") != undefined) {
      this.setState({
        url: window.localStorage.getItem("ClientUrl"),
      });
    }
  }
  componentDidMount() {
    this.updatecomponentData();
    this.getClientData();

    let url = getBaseUrl() + "/getyoutubelist";
    axios.get(url).then(
      (response) => {
        this.setState({
          list: response.data,
        });
      },
      (error) => {}
    );
  }

  openWindow() {
    let temp = 1;
    for (let index1 = 0; index1 < this.state.windowHandler.length; index1++) {
      this.updatecountForBoth(this.state.windowHandler[index1].name);
      this.state.windowHandler[index1].window.close();
    }
    let temphandler = [];

    for (
      let index = this.state.numberofURLopen;
      index < this.state.list.length &&
      index < this.state.numberofURLopen + temp;
      index++
    ) {
      let element = this.state.list[index].url;

      if (this.state.list[index].remaining_balance_views <= 0) {
        // let temp =
        //   "need to send email for user that his hit become Zero " + element;
        // alert(temp);
      }

      if (
        element == this.state.url ||
        this.state.list[index].remaining_balance_views <= 0
      ) {
        temp = temp + 1;
        continue;
      } else {
        temphandler.push({ window: window.open(element), name: element });
      }
    }

    if (this.state.list.length > this.state.numberofURLopen + temp) {
      setTimeout(() => {
        this.openWindow();
      }, this.state.duration);
    }
    this.setState({
      windowHandler: temphandler,
      numberofURLopen: this.state.numberofURLopen + temp,
    });
  }

  trafficdialogend() {}

  componentWillMount() {
    //let tempp= navigator.userAgent.indexOf("Firfox") == -1;
    let tempp = navigator.userAgent.search("Firefox") === -1;

    this.setState({
      checkbrowser: tempp,
    });
  }
  closeSnackbar = () => {
    this.setState({ snackbar: false });
  };

  render() {
    return (
        <div className=" innerdivwidth">
          <div className="youtube_first">  <p className="youtube_head">A Free Youtube Views </p>
          <p className="youtube_para">
          SRCS for Youtube will help you to grow YouTube channels <br/> and increase YouTube views quickly.
          </p>
          <img
              className="youtube_img mx-auto d-block"
              src={logo20}
              alt=""
          
            /></div>
          {/* <div></div> */}
        <div className="traffic_head youtube_margin">
        
          
        </div>
        <div className="trafiic_count">
          <Grid container className="mt-5 pt-3 ">
            <Grid item md={4} className="grid_content">
              <div className="count_hit" >
                <p className="total_count">Target Views</p>
                <p className="hit_counting">{this.state.total_count}</p>

                {/* Total Count ={this.state.count_remaining}{this.state.count_hit} */}
              </div>
            </Grid>
            <Grid item md={4} className="grid_content">
              <div className="count_hit">
                <p className="total_count">achieved Views</p>
                <p className="hit_counting">{this.state.archieved_views} </p>
                {/* Count Remaining ={this.state.count_remaining} */}
              </div>
            </Grid>
            <Grid item md={4} className="grid_content">
              <div className=" count_hit">
                <p className="total_count">Remaining Balance Views</p>
                <p className="hit_counting">{this.state.remaining_balance_views}</p>
                {/* Count Hit ={this.state.count_hit} */}
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="traffic inputtraffic ">
          <Form.Control
            type="Url"
            value={this.state.url}
            placeholder="Enter Url"
            className="mt-4"
            onChange={(e) => {
              this.setState({
                url: e.target.value,
              });
            }}
          />
        </div>
        {/* {this.state.checkbrowser === true ? (
          <div className="alertcolor">
            <p className="waringcolor">
              {" "}
              <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" />
              Fire fox + PC is STRONGLY recommended
            </p>
          </div>
        ) : (
          ""
        )} */}

        {/* <div className="timecenter justify-content-center mt-2">
          <span className="mr-4 mt-2">
            <p>Enter Time Limit</p>
          </span>{" "}
          <span>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={this.state.duration}
              onChange={(e) => {
                this.setState({
                  duration: e.target.value,
                });
              }}
            >
              <MenuItem value={10000}>10 Sec</MenuItem>
              <MenuItem value={60000}>1 min</MenuItem>
              <MenuItem value={120000}>2 min</MenuItem>
              <MenuItem value={180000}>3 min</MenuItem>
              <MenuItem value={240000}>4 min</MenuItem>
              <MenuItem value={300000}>5 min</MenuItem>
            </Select>
          </span>
        </div> */}

        <div className="buttoncenter mb-5 mt-1">
          <Button
            variant="contained"
            className="startbtn"
            onClick={this.trafficdialog}
          >
            Submit
          </Button>

          {/* <Button
            variant="contained"
            className="startbtn ml-5"
            onClick={this.trafficdialogend}
          >
            Stop
          </Button> */}
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
export default HOC(Youtube);
