import React, { Component } from "react";
import "../maincontentpage/main.css";
import "../style/quest.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import Checkbox from "@material-ui/core/Checkbox";
// import "node_modules/video-react/dist/video-react.css"; // import css
import { Player } from "video-react";
import ReactPlayer from "react-player";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Dialog from "@material-ui/core/Dialog";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleDown,
  faTimes,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import DataTable, { createTheme } from "react-data-table-component";
import { PieChart } from "react-minimal-pie-chart";
import axios from "axios";
import { getBaseUrl } from "../utils";
import CircularProgress from "@material-ui/core/CircularProgress";

export class Maincontentpage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskTitle: "none",
      pieChartData: [
        { title: "One", value: 10, color: "#E38627" },
        { title: "Two", value: 15, color: "#C13C37" },
        { title: "Three", value: 20, color: "#6A2135" },
        { title: "four", value: 5, color: "#fc8256" },
        { title: "five", value: 30, color: "red" },
      ],
      snackbar: false,
      progressbar: false,
      tasktype: "xyz",
      todaydate: new Date().toISOString(),
      userId:"",
      userId: "3",
      drilldown: false,
      // drilldown1: false,
      message: "",
      name: "",
      show: false,
      showme: false,
      showto: false,
      email: "",
      Password: "",
      sbsUrl: "",
      sbmUrl: "",
      csUrl: "",
      title: "",
      description: "",
      keywords: "",
      emailaddress: "",
      submiturl: "",
      error: null,
      emaill: "",
      Passwordd: "",
      descriptionss: "",
      urls: "",
      keywordsss: "",
      datadialog: [
        {
          id: 1,
          website: "abc",
          status1: "Done",
        },
        {
          id: 2,
          website: "def",
          status1: "Inprogrss",
        },
        {
          id: 3,
          website: "ghe",
          status1: "Failed",
        },
        {
          id: 4,
          website: "mhe",
          status1: "pending",
        },
        {
          id: 5,
          website: "jhe",
          status1: "Failed",
        },
      ],
      columnsdialog: [
        {
          name: "Website",
          selector: "website",
          sortable: true,
        },
        {
          name: "Status",
          selector: "status1",
          sortable: true,
          left: true,
        },
      ],

      data: [
        {
          id: 1,
          sno: "1",
          task: "create a table",
          time: "12:30pm",
          visual: "3123",
          //  action: <a href="#">drilDown</a>,
          action: (
            <FontAwesomeIcon
              className=" mr-2 ml-2"
              title="DrillDown"
              icon={faAngleDoubleDown}
              onClick={() => {
                this.drilldown("create a table");
              }}
            />
          ),
        },
        {
          id: 2,
          sno: "2",
          task: "Assign login",
          time: "03:50pm",
          visual: "3434",
          // action: <a href="#">drilDown 1</a>,
          action: (
            <FontAwesomeIcon
              className=" mr-2 ml-2"
              title="DrillDown"
              icon={faAngleDoubleDown}
              onClick={() => {
                this.drilldown("Assign login");
              }}
            />
          ),
        },
        {
          id: 3,
          sno: "3",
          task: "Create a new page",
          time: "08:00pm",
          visual: "2342",
          // action: <a href="#">drilDown 2</a>,
          action: (
            <FontAwesomeIcon
              className=" mr-2 ml-2"
              title="DrillDown"
              icon={faAngleDoubleDown}
              onClick={() => {
                this.drilldown("Create a new page");
              }}
            />
          ),
        },
      ],
      columns: [
        {
          name: "S.No",
          selector: "sno",
          sortable: true,
        },
        {
          name: "Task Type",
          selector: "task",
          sortable: true,
          center: true,
        },
        {
          name: "Start Time",
          selector: "time",
          sortable: true,
          right: true,
        },
        {
          name: "Visual ID",
          selector: "visual",
          sortable: true,
          right: true,
        },
        {
          name: "action",
          selector: "action",
          sortable: true,
          right: true,
        },
      ],
    };
  }
  fullView = () => {
    window.open("/tasks");
  };
  drilldown = (para) => {
    this.setState({ drilldown: !this.state.drilldown });
    if (para == "create a table") {
      this.setState({ taskTitle: "Create a table" });
    }
    if (para == "Assign login") {
      this.setState({ taskTitle: "Assign login" });
    }
    if (para == "Create a new page") {
      this.setState({ taskTitle: "Create a new page" });
    }
  };
  // drilldown1 = () => {
  //   // this.setState({ drilldown1: !this.state.profile });
  //   window.location= "/profile";
  // };

  closeSnackbar = () => {
    this.setState({ snackbar: false });
  };


  handlesubmit = (e) => {
    e.preventDefault();
    const { name, email, sbsUrl } = this.state;

    if (name.trim() == "") {
      this.setState({ snackbar: true, error: "Please enter  name." });
      return;
    }

    if (name.length < 5) {
      this.setState({
        snackbar: true,
        error: "Name must be 5 charchters long.",
      });
      return;
    }
    const regexex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.state.emailaddress.trim() == "") {
      this.setState({
        snackbar: true,
        error: "Please enter email Id.",
      });
      return;
    } else if (!this.state.emailaddress.match(regexex)) {
      this.setState({
        snackbar: true,
        error: "please enter a valid email Id.",
      });
      return;
    }

    const regesxm = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (this.state.submiturl == "") {
      this.setState({
        snackbar: true,
        error: "please enter the URL.",
      });
      return;
    } else if (!this.state.submiturl.match(regesxm)) {
      this.setState({
        snackbar: true,
        error: "please enter a valid  URL.",
      });
      return;
    }
    // if (this.state.error === null) {
    //   this.setState({ snackbar: true, message: "Success Updated" });
    // }
    // window.localStorage.setItem("name", name);
    // window.localStorage.setItem("email", emailaddress);
    // window.localStorage.setItem("url", submiturl);

    let url = getBaseUrl() + "/starttask";
    this.setState({
      progressbar: true,
    });
    let month =  new Date().getMonth() +1;
    let day= new Date().getDate();
    let year = new Date().getFullYear();
    let hour =  new Date().getHours();
    let min = new Date().getMinutes();
    let date = day + '-' + month + '-' + year + ' ' + hour + ':' + min;
    let temp = {
      userId: window.localStorage.getItem("id"),
      name: this.state.name,
      emailaddress: this.state.emailaddress,
      submiturl: this.state.submiturl,
      date: date,
      tasktype: this.state.tasktype
    };
    axios.post(url, temp).then(
      (response) => {
        // alert(response.data.message);
        this.setState({
          progressbar: false,
          snackbar: true,
          error: "Data is successfully uploaded",
        });
        return;
      },
      (error) => {
        this.setState({
          progressbar: false,
        });
      }
    );
  };

  handlesubmission = (e) => {
    const { sbmUrl, title, description, keywords } = this.state;

    const regesxemssm = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

    if (sbmUrl == "") {
      this.setState({
        snackbar: true,
        error: "please enter the url",
      });
      return;
    } else if (!sbmUrl.match(regesxemssm)) {
      this.setState({
        snackbar: true,
        error: "enter the valid url",
      });

      return;
    }
    if (title == "") {
      this.setState({
        snackbar: true,
        error: "please enter the title",
      });

      return;
    }
    if (description == "") {
      this.setState({
        snackbar: true,
        error: "please enter the descruption",
      });

      return;
    }
    if (keywords == "") {
      this.setState({
        snackbar: true,
        error: "please enter the keywords",
      });

      return;
    }
  };
  handleclick = (e) => {
    const { name, emaill, sbmUrl } = this.state;

    const regexex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emaill == "") {
      this.setState({
        snackbar: true,
        error: "Please enter email Id.",
      });
      return;
    } else if (!emaill.match(regexex)) {
      this.setState({
        snackbar: true,
        error: "please enter a valid email Id.",
      });
      return;
    }

    if (this.state.Passwordd == "") {
      this.setState({
        snackbar: true,
        error: "Please enter the password",
      });
      return;
    }
    if (this.state.descriptionss == "") {
      this.setState({
        snackbar: true,
        error: "Please enter the description",
      });
      return;
    }
    if (this.state.sbmUrl == "") {
      this.setState({
        snackbar: true,
        error: "Please enter the url",
      });
      return;
    } else if (!sbmUrl.match(regexex)) {
      this.setState({
        snackbar: true,
        error: "please enter a valid URL.",
      });
      return;
    }

    if (this.state.keywordsss == "") {
      this.setState({
        snackbar: true,
        error: "Please enter the keywords",
      });
      return;
    }
  };
  render() {
    return (
      <div className="container">
        <Grid container spacing={3} style={{ marginTop: "8%" }}>
          <Grid item md={7}>
            <Paper>
              <div className="animate__animated animate__backInLeft">
                <h2 className="headeing-text">Choose Service</h2>
                <div className="marginleftside">
                  <div>
                    <Checkbox
                      style={{}}
                      onChange={() => this.setState({ show: !this.state.show })}
                      color="primary"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                    <h3 style={{ marginRight: "10%" }} className="hidemie">
                      Search Engine Submission
                    </h3>
                  </div>
                  <h1>
                    {this.state.show ? (
                      <div
                        style={{ marginLeft: "10%" }}
                        className="input-width"
                      >
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="name"
                          placeholder="Enter name"
                          id="Name"
                          className="formwidth"
                          value={this.state.name}
                          onChange={(e) =>
                            this.setState({ name: e.target.value })
                          }
                        />
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          className="formwidth"
                          id="Email"
                          value={this.state.emailaddress}
                          onChange={(e) =>
                            this.setState({
                              emailaddress: e.target.value,
                            })
                          }
                        />
                        <Form.Label>Enter Url</Form.Label>
                        <Form.Control
                          type="Url"
                          id="Url"
                          placeholder="Enter url"
                          className="formwidth"
                          value={this.state.submiturl}
                          onChange={(e) =>
                            this.setState({ submiturl: e.target.value })
                          }
                        />

                        <div className="d-flex justify-content-end mrrginside22">
                          <Button
                            variant="contained"
                            className="startbtn"
                            onClick={this.handlesubmit}
                          >
                            Start
                          </Button>
                        </div>
                      </div>
                    ) : null}
                  </h1>

                  <div>
                    <Checkbox
                      style={{ marginTop: "5%" }}
                      onChange={() =>
                        this.setState({ showme: !this.state.showme })
                      }
                      color="primary"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                    <h3 className="hidemie">Social Book Marketing</h3>
                  </div>

                  <div>
                    {this.state.showme ? (
                      <h1>
                        <div
                          style={{ marginLeft: "10%" }}
                          className="input-width"
                        >
                          <Form.Label>Url</Form.Label>
                          <Form.Control
                            type="url"
                            placeholder="Enter url"
                            className="formwidth"
                            value={this.state.sbmUrl}
                            onChange={(e) =>
                              this.setState({ sbmUrl: e.target.value })
                            }
                          />
                          <Form.Label>title</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter title"
                            className="formwidth"
                            value={this.state.title}
                            onChange={(e) =>
                              this.setState({ title: e.target.value })
                            }
                          />
                          <Form.Label>Description</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Description"
                            className="formwidth"
                            value={this.state.description}
                            onChange={(e) =>
                              this.setState({ description: e.target.value })
                            }
                          />
                          <Form.Label>Keywords</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Keywords"
                            className="formwidth"
                            value={this.state.keywords}
                            onChange={(e) =>
                              this.setState({ keywords: e.target.value })
                            }
                          />

                          <div className="d-flex justify-content-end mrrginside22">
                            <Button
                              variant="contained"
                              className="startbtn"
                              onClick={this.handlesubmission}
                            >
                              Start
                            </Button>
                          </div>
                        </div>
                      </h1>
                    ) : null}
                  </div>
                  <div className="thirdclick">
                    <Checkbox
                      style={{ marginTop: "4%" }}
                      onChange={() =>
                        this.setState({ showto: !this.state.showto })
                      }
                      color="primary"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                    <h1></h1>
                    <h3 className="hidemie">Classified Submission</h3>
                  </div>

                  <div>
                    {this.state.showto ? (
                      <h1>
                        <div
                          style={{ marginLeft: "10%" }}
                          className="input-width"
                        >
                          <Form.Control
                            type="email"
                            placeholder="Enter Email"
                            className="formwidth"
                            value={this.state.emaill}
                            onChange={(e) =>
                              this.setState({ emaill: e.target.value })
                            }
                          />
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Enter Password"
                            className="formwidth"
                            value={this.state.Passwordd}
                            onChange={(e) =>
                              this.setState({ Passwordd: e.target.value })
                            }
                          />
                          <Form.Label>Title</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter title"
                            className="formwidth"
                            value={this.state.titles}
                            onChange={(e) =>
                              this.setState({ titles: e.target.value })
                            }
                          />
                          <Form.Label>Description</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Description"
                            className="formwidth"
                            value={this.state.descriptionss}
                            onChange={(e) =>
                              this.setState({ descriptionss: e.target.value })
                            }
                          />
                          <Form.Label>URL</Form.Label>
                          <Form.Control
                            type="url"
                            placeholder="Enter url"
                            className="formwidth"
                            value={this.state.sbmUrl}
                            onChange={(e) =>
                              this.setState({ sbmUrl: e.target.value })
                            }
                          />
                          <Form.Label>Keywords</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Keywords"
                            className="formwidth"
                            value={this.state.keywordsss}
                            onChange={(e) =>
                              this.setState({ keywordsss: e.target.value })
                            }
                          />

                          <div className="d-flex justify-content-end mrrginside22">
                            <Button
                              variant="contained"
                              className="startbtn"
                              onClick={this.handleclick}
                            >
                              Start
                            </Button>
                          </div>
                        </div>
                      </h1>
                    ) : null}
                  </div>
                </div>
              </div>
            </Paper>
          </Grid>

          <Grid item md={5}>
            <Paper>
              <div className="animate__animated animate__backInRight  mr-5 marginleftpannel">
                <Card
                  style={{
                    marginTop: "5%",
                    width: "100%",
                    height: "40vh",
                  }}
                >
                  <ReactPlayer
                    width="100%"
                    height="100%"
                    url="https://www.youtube.com/watch?v=H1uLU9h0k0k&t=68s"
                  />
                </Card>
              </div>
            </Paper>
          </Grid>
        </Grid>

        <div className="container">
          <div className="mt-5 border-top bodercolor"> </div>
          <div className="sadataset">
            <DataTable
              title="Current Session"
              columns={this.state.columns}
              data={this.state.data}
              pagination={true}
              paginationDefaultPage
            />
          </div>
          <br />
        </div>

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
        <Dialog
          // onClose={() => {
          //   this.setState({
          //     drilldown: false,
          //   });
          // }}
          open={this.state.drilldown}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="drill-main">
            <span
              className="floatright crossbtncolor mt-2"
              onClick={() => {
                this.setState({
                  drilldown: false,
                });
              }}
            >
              <FontAwesomeIcon icon={faTimes} />{" "}
            </span>
            <span
              className="floatright crossbtncolor mt-2"
              // onClick={() => {
              //   this.setState({
              //     drilldown1: false,
              //   });
              // }}
            >
              <a className="hrefcolor">
                <FontAwesomeIcon
                  icon={faEye}
                  onClick={() => {
                    this.fullView();
                  }}
                />
              </a>{" "}
            </span>
            <Grid container>
              <Grid item md={7}>
                <div>
                  <h2 className="mt-4 ml-4 progesssize">Progress Status</h2>
                </div>
                <div className="container">
                  <DataTable
                    title={this.state.taskTitle}
                    // title={this.state.title}
                    columns={this.state.columnsdialog}
                    data={this.state.datadialog}
                    // pagination={true}
                    // paginationDefaultPage
                  />
                  <br />
                </div>
              </Grid>
              <Grid item md={5}>
                <div className="piewidth mt-2">
                  <PieChart
                    data={this.state.pieChartData}
                    animate={true}
                    // reveal ={90}
                  />
                </div>
              </Grid>
            </Grid>
          </div>
        </Dialog>
        <Dialog
          // onClose={() => {
          //   this.setState({
          //     drilldown: false,
          //   });
          // }}
          open={this.state.progressbar}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="loader-main">
            {this.state.progressbar && (
              <CircularProgress size={68} className="loaderbar" />
            )}
          </div>
        </Dialog>
      </div>
    );
  }
}

export default Maincontentpage2;
