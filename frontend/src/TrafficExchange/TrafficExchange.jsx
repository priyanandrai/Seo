import React from "react";
import { Form } from "react-bootstrap";
import HOC from "../components/HOC";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/Button";

import "./traffic.css";
class TrafficExchange extends React.Component {
  constructor(props) {
    super(props);
    this.trafficdialogend = this.trafficdialogend.bind(this);
    this.trafficdialog = this.trafficdialog.bind(this);
    this.state = {
      trafficdialog: false,
      url: "",
      warning: "",
      duration: 10000,
      checkbrowser: false,
      list: [
        "http://srcservicesltd.com/",
        "http://srcservicesltd.com/testing-as-a-services",
        "http://srcservicesltd.com/development-as-a-services",
        "https://www.gurukulzone.com/",
        "https://www.gurukulzone.com/javascript/index.html",
      ],
    };
  }
  trafficdialog() {
    if (this.state.url === "") {
      alert("please enter the URL.");
      return;
    }

    console.log("Hii list loop start ");
    for (let i = 0; i < this.state.list.length; i++) {
      console.log(this.state.list[i]);
      var win = window.open(this.state.list[i]);
      setTimeout(function () {
        win.close();
      }, this.state.duration);
    }
  }

  trafficdialogend() {
    window.close();
    // setTimeout(function () {
    //   window.close(this.state.url);
    // }, 1);
  }

  componentWillMount() {
    //let tempp= navigator.userAgent.indexOf("Firfox") == -1;
    let tempp = navigator.userAgent.search("Firefox") === -1;

    this.setState({
      checkbrowser: tempp,
    });
  }
  render() {
    return (
      <div className="mt-5 innerdivwidth">
        <div>
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
      </div>
    );
  }
}
export default HOC(TrafficExchange);
