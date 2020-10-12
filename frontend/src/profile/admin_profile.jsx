import React, { Component } from "react";
import "./profile.css";
import "../style/quest.css";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faTimes,
  faDownload,
  faAngleDoubleDown,
  faUser,
  faPlay,
  faTrash,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import Input from "../components/Input";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "../components/Button";
import TextField from "@material-ui/core/TextField";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/semantic-ui.css";
import DataTable, { createTheme } from "react-data-table-component";
import { PieChart } from "react-minimal-pie-chart";
import HOC1 from "../components/HOC1";
import { getAuthData, isLoggedIn } from "../utils";
import axios from "axios";
import { getBaseUrl } from "../utils";

class Admin_profile extends Component {
  constructor(props) {
    super(props);
    this.searchprofile = this.searchprofile.bind(this);
    this.state = {
      uid: "",
      phone: "",
      pieChartData: [
        { title: "One", value: 10, color: "#E38627" },
        { title: "Two", value: 15, color: "#C13C37" },
        { title: "Three", value: 20, color: "#6A2135" },
        { title: "four", value: 5, color: "#fc8256" },
        { title: "five", value: 30, color: "red" },
      ],
      formshow: false,
      drilldown: false,
      organization: "",
      deleteoption: false,
      organizationEnable: true,
      profession: "",
      professionEnable: true,
      emailEnable: true,
      username: "",
      email: "",
      usernameEnable: true,
      mobile: "",
      mobileEnable: true,
      unique: "",
      uniqueEnable: true,
      account: "",
      accountEnable: true,
      balance: "",
      balanceEnable: true,
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

          task: "Search Engine Submission",
          count: "23",
          pass: "2",
          fail: "5",
          //  action: <a href="#">drilDown</a>,
          action: (
            <FontAwesomeIcon
              className=" mr-2 ml-2"
              title="DrillDown"
              icon={faAngleDoubleDown}
              onClick={() => {
                this.drilldown("Search Engine Submission");
              }}
            />
          ),
        },
        {
          id: 2,

          task: "Social book marketing",
          count: "10",
          pass: "10",
          fail: "2",
          // action: <a href="#">drilDown 1</a>,
          action: (
            <FontAwesomeIcon
              className=" mr-2 ml-2"
              title="DrillDown"
              icon={faAngleDoubleDown}
              onClick={() => {
                this.drilldown("Social book marketing");
              }}
            />
          ),
        },
        {
          id: 3,

          task: "Classified Submission",
          count: "5",
          pass: "5",
          fail: "4",
          // action: <a href="#">drilDown 2</a>,
          action: (
            <FontAwesomeIcon
              className=" mr-2 ml-2"
              title="DrillDown"
              icon={faAngleDoubleDown}
              onClick={() => {
                this.drilldown("Classified Submission");
              }}
            />
          ),
        },
      ],
      columns: [
        {
          name: "Task Type",
          selector: "task",
          sortable: true,
          left: true,
        },
        {
          name: "Total Count",
          selector: "count",
          sortable: true,
          center: true,
        },
        {
          name: "Pass",
          selector: "pass",
          sortable: true,
          right: true,
        },
        {
          name: "Fail",
          selector: "fail",
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
  editForm = (para) => {
    // const { username} = this.state
    if (para == "username") {
      this.setState({ usernameEnable: false });
      // if(username == ""){
      //   alert("Please enter name")
      // }
    }
    if (para == "unique") {
      this.setState({ uniqueEnable: false });
    }
    if (para == "account") {
      this.setState({ accountEnable: false });
    }
    if (para == "balance") {
      this.setState({ balanceEnable: false });
    }
    if (para == "email") {
      this.setState({ emailEnable: false });
    }
    if (para == "mobile") {
      this.setState({ mobileEnable: false });
    }
    if (para == "profession") {
      this.setState({ professionEnable: false });
    }
    if (para == "organization") {
      this.setState({ organizationEnable: false });
    }
  };
  drilldown = (para) => {
    this.setState({ drilldown: !this.state.drilldown });
    if (para == "Search Engine Submission") {
      this.setState({ taskTitle: "Search Engine Submission" });
    }
    if (para == "Social book marketing") {
      this.setState({ taskTitle: "Social book marketing" });
    }
    if (para == "Classified Submission") {
      this.setState({ taskTitle: "Classified Submission" });
    }
  };
  searchprofile() {
    let temp = {
      uniqueid: this.state.uid,
      mobileNumber: this.state.phone,
    };

    let url = getBaseUrl() + "/searchuserprofile";
    axios
      .post(url, temp)
      .then(
        (response) => {
          console.log("My usersearch response 1 ", response.data);
          this.setState({
            username: response.data.name,
            unique: response.data.id,
            mobile: response.data.phoneNumber,
            email: response.data.email,
            organization: response.data.organisation,
            profession: response.data.profession,
            formshow: !this.state.formshow,
          });
        },
        (error) => {
          alert(error.response.data.message);
        }
      )
      .catch((e) => {});
  }

  componentWillMount() {
    //let temp = isLoggedIn();
    let temp = window.localStorage.getItem("isadminuteLoggedin");
    if (temp == "ankur") {
    } else {
      window.location = "/adminute-home";
    }
  }

  render() {
    return (
      <div className="container mainadminprofile">
        <Grid container className="submenu-alignment">
          <Grid item md={6}>
            <div className="uniquediv uniqueidw">
              <Form.Label>Unique ID</Form.Label>
              <Form.Control
                type="name"
                id="Name"
                value={this.state.uid}
                className="mobileviewset"
                onChange={(e) => {
                  this.setState({ uid: e.target.value });
                }}
              />
            </div>
          </Grid>
          <Grid item md={6}>
            <div className="uniqueidw1">
              <Form.Label>Mobile No.</Form.Label>
              <PhoneInput
                placeholder={"Mobile no. *"}
                country={"in"}
                value={this.state.phone}
                onChange={(e) => {
                  console.log(e);
                  if (isNaN(e)) {
                    return;
                  }
                  this.setState({
                    phone: "+" + e,
                  });
                }}
              />
            </div>
            <div>
              {/* <input
                type="text"
                className="form-control searchboxright mt-4"
                placeholder="Search"
              /> */}
              <button
                className="mt-4 searchboxright"
                onClick={this.searchprofile}
              >
                Search
              </button>
            </div>
          </Grid>
        </Grid>
        <br />
        <hr />
        <div>
          <form>
            {this.state.formshow ? (
              <div>
                <Grid container className="submenu-alignment">
                  <Grid item md={6}>
                    <div className="mt-4 w-75 ml-5">
                      <div className="d-flex mb-2 gridwodth1">
                        <TextField
                          id="standard-basic"
                          label="User Name"
                          autoComplete="off"
                          disabled={this.state.usernameEnable}
                          value={this.state.username}
                          onChange={(e) => {
                            this.setState({ username: e.target.value });
                          }}
                        />
                        <div className="align-self-end p-2">
                          <FontAwesomeIcon
                            className="afterplaycolor"
                            icon={faPencilAlt}
                            onClick={() => {
                              this.editForm("username");
                            }}
                          />
                        </div>
                      </div>
                      <div className="d-flex mb-2 gridwodth1">
                        <TextField
                          id="standard-basic"
                          label="Unique ID"
                          disabled={this.state.uniqueEnable}
                          value={this.state.unique}
                          onChange={(e) => {
                            this.setState({ unique: e.target.value });
                          }}
                        />
                        <div className="align-self-end p-2">
                          <FontAwesomeIcon
                            className="afterplaycolor"
                            icon={faPencilAlt}
                            onClick={() => {
                              this.editForm("unique");
                            }}
                          />
                        </div>
                      </div>
                      <div className="d-flex mb-2 gridwodth1">
                        <TextField
                          id="standard-basic"
                          label="Account Type"
                          disabled={this.state.accountEnable}
                          onChange={(e) => {
                            this.setState({ account: e.target.value });
                          }}
                        />
                        <div className="align-self-end p-2">
                          <FontAwesomeIcon
                            className="afterplaycolor"
                            icon={faPencilAlt}
                            onClick={() => {
                              this.editForm("account");
                            }}
                          />
                        </div>
                      </div>
                      <div className="d-flex mb-2 gridwodth1">
                        <TextField
                          id="standard-basic"
                          label="Current Balance"
                          disabled={this.state.balanceEnable}
                          onChange={(e) => {
                            this.setState({ balance: e.target.value });
                          }}
                        />
                        <div className="align-self-end p-2">
                          <FontAwesomeIcon
                            className="afterplaycolor"
                            icon={faPencilAlt}
                            onClick={() => {
                              this.editForm("balance");
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={6}>
                    <div className=" w-75 ml-5 marginnill">
                      <div className="d-flex mb-2 gridwodth1">
                        <TextField
                          id="standard-basic"
                          label="Email"
                          autoComplete="off"
                          disabled={this.state.emailEnable}
                          value={this.state.email}
                          onChange={(e) => {
                            this.setState({ email: e.target.value });
                          }}
                        />
                        <div className="align-self-end p-2">
                          <FontAwesomeIcon
                            className="afterplaycolor"
                            icon={faPencilAlt}
                            onClick={() => {
                              this.editForm("email");
                            }}
                          />
                        </div>
                      </div>
                      <div className="d-flex mb-2 gridwodth1">
                        <TextField
                          id="standard-basic"
                          label="Mobile No."
                          value={this.state.mobile}
                          disabled={this.state.mobileEnable}
                          onChange={(e) => {
                            this.setState({ mobile: e.target.value });
                          }}
                        />
                        <div className="align-self-end p-2">
                          <FontAwesomeIcon
                            className="afterplaycolor"
                            icon={faPencilAlt}
                            onClick={() => {
                              this.editForm("mobile");
                            }}
                          />
                        </div>
                      </div>
                      <div className="d-flex mb-2 gridwodth1">
                        <TextField
                          id="standard-basic"
                          label="Profession"
                          value={this.state.profession}
                          disabled={this.state.professionEnable}
                          onChange={(e) => {
                            this.setState({ profession: e.target.value });
                          }}
                        />
                        <div className="align-self-end p-2">
                          <FontAwesomeIcon
                            className="afterplaycolor"
                            icon={faPencilAlt}
                            onClick={() => {
                              this.editForm("profession");
                            }}
                          />
                        </div>
                      </div>
                      <div className="d-flex mb-2 gridwodth1">
                        <TextField
                          id="standard-basic"
                          label="Organisation"
                          value={this.state.organization}
                          disabled={this.state.organizationEnable}
                          onChange={(e) => {
                            this.setState({ organization: e.target.value });
                          }}
                        />
                        <div className="align-self-end p-2">
                          <FontAwesomeIcon
                            className="afterplaycolor"
                            icon={faPencilAlt}
                            onClick={() => {
                              this.editForm("organization");
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <div>
                  <hr className="mt-5" />
                </div>
                <div>
                  <DataTable
                    title="Uses Activity"
                    columns={this.state.columns}
                    data={this.state.data}
                    pagination={true}
                    paginationDefaultPage
                  />
                </div>
                <br />
              </div>
            ) : null}
          </form>
        </div>
        <div>
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
                    // onClick={() => {
                    //   this.fullView();
                    // }}
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
        </div>
      </div>
    );
  }
}

export default HOC1(Admin_profile);
