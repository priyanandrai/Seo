import React from "react";
import { Form } from "react-bootstrap";
import HOC from "../components/HOC";
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

import "./traffic.css";
class TrafficExchange extends React.Component {
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
      count_hit: "N/A",
      count_remaining: "N/A",
      trafficdialog: false,
      url: "",
      numberofURLopen: 0,
      warning: "",
      duration: 10000,
      checkbrowser: false,
      windowHandler: [],
      list: [],
    };
  }

  updatecountForBoth(name){
    let self = this;
    let url = getBaseUrl() + "/updatehit?url=" + name;
    axios.get(url).then((response) => {},(error) => {});

     url = getBaseUrl() + "/updateCount?url=" + this.state.url;
    axios.get(url).then((response) => {
      this.getClientData();
    },(error) => {});
    
  }
  getClientData() {
    let self = this;
    let url = getBaseUrl() + "/getclientinformation?url=" + window.localStorage.getItem("ClientUrl");
    axios.get(url).then(
      (response) => {
        self.setState({
          count_hit: response.data.count_hit,
          count_remaining: response.data.count_remaining,
        })
      },
      (error) => { }
    );
  }

  trafficdialog() {
    if (this.state.url === "") {
      this.setState({
        snackbar: true,
        error: "please enter the URL.",
      });

      return;
    }
    window.localStorage.setItem("ClientUrl", this.state.url)
    this.getClientData();
    this.openWindow();
    setTimeout(() => {
      this.openWindow();
    }, this.state.duration);

    let url = getBaseUrl() + "/saveUrl";
    let temp = {
      url: this.state.url
    }
    axios.post(url, temp).then(
      (response) => {

      },
      (error) => { }
    );
  }
  updatecomponentData() {
    if (window.localStorage.getItem("ClientUrl") != undefined) {
      this.setState({
        url: window.localStorage.getItem("ClientUrl")
      })
    }
  }
  componentDidMount() {
    this.updatecomponentData();
    this.getClientData();

    let url = getBaseUrl() + "/gettrafficlist";
    axios.get(url).then(
      (response) => {
        this.setState({
          list: response.data

        });
      },
      (error) => { }
    );
  }

  openWindow() {
    let temp = 3;
    for (let index1 = 0; index1 < this.state.windowHandler.length; index1++) {
      this.updatecountForBoth(this.state.windowHandler[index1].name);
      this.state.windowHandler[index1].window.close();
    }
    let temphandler = [];

    for (
      let index = this.state.numberofURLopen;
      index < this.state.list.length &&
      index < (this.state.numberofURLopen + temp);
      index++
    ) {
      let element = this.state.list[index].url;

      if(this.state.list[index].count_remaining <=0){
        let temp = "need to send email for user that his hit become Zero " +   element ;
        alert(temp);
      }
   
      if(element == this.state.url ||  this.state.list[index].count_remaining <= 0 ){
        continue;
      }else{
      temphandler.push({ "window": window.open(element), "name": element });
      }
    }

    if (this.state.list.length > (this.state.numberofURLopen + temp)) {
      setTimeout(() => {
        this.openWindow();
      }, this.state.duration);
    }
    this.setState({
      windowHandler: temphandler,
      numberofURLopen: this.state.numberofURLopen + temp,
    });

  }

  trafficdialogend() { }

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
      <div className="mt-5 innerdivwidth">
        <div>
          <div className="traffic inputtraffic ">
            <Form.Label className="leftt mt-3">ENTER URL</Form.Label>
            <Form.Control
              type="Url"
              value={this.state.url}
              placeholder="Enter Url"
              className="mt-3"
              onChange={(e) => {
                this.setState({
                  url: e.target.value,
                });
              }}
            />
          </div>
          {this.state.checkbrowser === true ? (
            <div className="alertcolor">
              <p className="waringcolor">
                {" "}
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  className="mr-2"
                />
                Fire fox + PC is STRONGLY recommended
              </p>
            </div>
          ) : (
              ""
            )}

          <div className="timecenter justify-content-center mt-2">
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
            onClick={this.trafficdialogend}
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

        <div className="ml-5 count_hit">
          Count Hit ={this.state.count_hit}
        </div>

        <div className="ml-5 mt-2 count_hit">
          Count Remaining ={this.state.count_remaining}
        </div>


      </div>
    );
  }
}
export default HOC(TrafficExchange);
