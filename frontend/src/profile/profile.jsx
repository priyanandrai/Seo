import React, { Component } from "react";
import "./profile.css";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faTimes,
  faDownload,
  faPlay,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import DataTable, { createTheme } from "react-data-table-component";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import { getBaseUrl } from "../utils";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organization: "",
      deleteoption: false,
      data:[],
      organizationEnable: true,
      profession: "N/A",
      professionEnable: true,
      emailEnable: true,
      username: "",
      email: "",
      name: "",
      comments:"",
      organisation: "N/A",
      usernameEnable: true,

      phoneNumber: "",
      drillDown: "DrillDown",
      // data: [
      //   {
          
      //     action: (
      //       <span>
      //         <FontAwesomeIcon
      //           className=" mr-2"
      //           onClick={this.Playsession}
      //           icon={faPlay}
      //         />
      //         |
      //         <FontAwesomeIcon
      //           className=" mr-2 ml-2 afterplaycolor"
      //           icon={faDownload}
      //         />
      //         |
      //         <FontAwesomeIcon
      //           className=" mr-2 ml-2"
      //           onClick={this.deleteoption}
      //           icon={faTrash}
      //         />
      //       </span>
      //     ),
      //   },
      //   {
          
      //     action: (
      //       <span>
      //         <FontAwesomeIcon
      //           className=" mr-2 "
      //           onClick={this.Playsession1}
      //           icon={faPlay}
      //         />
      //         |
      //         <FontAwesomeIcon
      //           className=" mr-2 ml-2 afterplaycolor"
      //           icon={faDownload}
      //         />
      //         |
      //         <FontAwesomeIcon
      //           className=" mr-2 ml-2"
      //           onClick={this.deleteoption}
      //           icon={faTrash}
      //         />
      //       </span>
      //     ),
      //   },
      //   {
          
      //     action: (
      //       <span>
      //         <FontAwesomeIcon
      //           className=" mr-2"
      //           onClick={this.Playsession2}
      //           icon={faPlay}
      //         />
      //         |
      //         <FontAwesomeIcon
      //           className=" mr-2 ml-2 afterplaycolor"
      //           icon={faDownload}
      //         />
      //         |
      //         <FontAwesomeIcon
      //           className=" mr-2 ml-2"
      //           onClick={this.deleteoption}
      //           icon={faTrash}
      //         />
      //       </span>
      //     ),
      //   },
      //   {
          
      //     action: (
      //       <span>
      //         <FontAwesomeIcon
      //           className=" mr-2"
      //           onClick={this.Playsession}
      //           icon={faPlay}
      //         />
      //         |
      //         <FontAwesomeIcon
      //           className=" mr-2 ml-2 afterplaycolor"
      //           icon={faDownload}
      //         />
      //         |
      //         <FontAwesomeIcon
      //           className=" mr-2 ml-2"
      //           onClick={this.deleteoption}
      //           icon={faTrash}
      //         />
      //       </span>
      //     ),
      //   },
      // ],
      columns: [
        {
          name: "DATE",
          selector: "date",
          sortable: true,
        },
        {
          name: "TASK",
          selector: "tasktype",
          sortable: true,
          center: true,
        },
        {
          name: "STATUS",
          selector: "taskstatus",
          sortable: true,
          right: true,
        },
        {
          name: "COMMENTS",
          selector: "comments",
          sortable: true,
          right: true,
        },
        {
          name: "ACTION",
          selector: "action",

          sortable: true,
          right: true,
        },
      ],
      dialogBox: false,
      Playsession: false,
    };
  }

  updateState = (state) => {
    this.setState({ selectedRows: state.selectedRows });
  };
  handle = () => {
    alert("i am clicked");
  };

  selectTable = () => {
    alert("selected");
  };

  editForm = (para) => {
    // const { username} = this.state
    if (para == "username") {
      this.setState({ usernameEnable: false });
      // if(username == ""){
      //   alert("Please enter name")
      // }
    }
    if (para == "email") {
      this.setState({ emailEnable: false });
    }
    if (para == "profession") {
      this.setState({ professionEnable: false });
    }
    if (para == "organization") {
      this.setState({ organizationEnable: false });
    }
  };
  deleteoption = () => {
    this.setState({ deleteoption: !this.state.deleteoption });
  };
  dialogBox = () => {
    this.setState({ dialogBox: !this.state.dialogBox });
  };
  Playsession = () => {
    this.setState({ Playsession: !this.state.Playsession });
  };
  Playsession1 = () => {
    this.setState({ Playsession1: !this.state.Playsession1 });
  };
  Playsession2 = () => {
    this.setState({ Playsession2: !this.state.Playsession2 });
  };

  componentWillMount() {
    let self = this;
    let url =
      getBaseUrl() + "/getprofile?id=" + window.localStorage.getItem("id");
    axios.get(url).then(
      (response) => {
      
        // alert(response.data.message);
        self.setState({
          
          name: response.data.name,
          email: response.data.email,
          phoneNumber: response.data.phoneNumber,
          profession: response.data.profession,
          organisation: response.data.organisation,
        });
      },
      (error) => {}
    );


    
    
    let nurl =  getBaseUrl() + "/gettask?id=" + window.localStorage.getItem("id");
    axios.get(nurl).then(
      (response) => {
        let fontonly = (
          <span>
                  <FontAwesomeIcon
                    className=" mr-2"
                    onClick={this.Playsession}
                    icon={faPlay}
                    title="Play Session"
                  />
                  |
                  <FontAwesomeIcon
                    className=" mr-2 ml-2 afterplaycolor"
                    icon={faDownload}
                    title="Download Session"
                  />
                  |
                  <FontAwesomeIcon
                    className=" mr-2 ml-2"
                    onClick={this.deleteoption}
                    icon={faTrash}
                    title="Delete Session"
                  />
                </span>
        );
        response.data.map((i) => (i.action = fontonly));
        // alert(response.data.message);
        this.setState({
          data:response.data
        });
      },
      (error) => {}
    );

  }

  render() {
    return (
      <div className="profile-main-div container">
        <Grid container className="submenu-alignment">
          <Grid item md={12}>
            <div className="buttonsright22 btnmobile">
              <button type="button" className="btnmargin bottoncolorq">Save</button>
              <button type="button" className="bottoncolorq">Cancel</button>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className="mt-5 imagecentermobile">
              <img
                className="profilepicture1 mx-auto d-block"
                src="https://i.pinimg.com/originals/11/fd/aa/11fdaae6f8e4deb13481103b4e9a0744.jpg"
              />
            </div>

            <div className=" d-flex mt-4 inputdata11 ">
              <TextField
              
                className="textcolorfont"
                id="standard-basic"
              
                disabled={this.state.usernameEnable}
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                }}
                value={this.state.name}
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

            <div className="pt-2 upgrademargin ">
              <a onClick={this.dialogBox} className="upgradetext">
                Upgrade to Premium
              </a>
            </div>
          </Grid>
          <Grid item md={8}>
            <div className="profile-right">
              <div className="d-flex">
                <TextField
                  className="textcolorfont1"
                  id="standard-basic"
                  label="Email"
                  disabled={this.state.emailEnable}
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                  value={this.state.email}
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
              <div className="d-flex mr-4">
                <TextField
                  id="standard-basic"
                  className="mt-1 textcolorfont1"
                  label="Mobile No."
                  disabled
                  value={this.state.phoneNumber}
                />
              </div>
              <div className="d-flex profrssionclick">
                <TextField
                  id="standard-basic"
                  className="mt-1 textcolorfont1"
                  label="Profession"
                  disabled={this.state.professionEnable}
                  onChange={(e) => {
                    this.setState({ profession: e.target.value });
                  }}
                  value={this.state.profession}
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
              <div className="d-flex">
                <TextField
                  id="standard-basic"
                  className="mt-1 textcolorfont1"
                  label="Organisation"
                  disabled={this.state.organizationEnable}
                  onChange={(e) => {
                    this.setState({ organisation: e.target.value });
                  }}
                  value={this.state.organisation}
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
              <br />
            </div>
          </Grid>
        </Grid>
        <div className="mt-5 border-top bodercolor"> </div>
        <div className="sadataset">
          <DataTable
            title="Your History"
            columns={this.state.columns}
            data={this.state.data}
            pagination={true}
            paginationDefaultPage
          />
        </div>
        <br />

        <Dialog
          // onClose={() => {
          //   this.setState({
          //     dialogBox: false,
          //   });
          // }}
          open={this.state.dialogBox}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="dialoged222">
            <span
              className="floatright crossbtncolor mt-2"
              onClick={() => {
                this.setState({
                  dialogBox: false,
                });
              }}
            >
              <FontAwesomeIcon icon={faTimes} />{" "}
            </span>
          </div>
        </Dialog>
        <Dialog
          open={this.state.Playsession}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="dialoged">
            <span
              className="floatright crossbtncolor mt-2"
              onClick={() => {
                this.setState({
                  Playsession: false,
                });
              }}
            >
              <FontAwesomeIcon icon={faTimes} />{" "}
            </span>
            <div className="mt-3 ml-4 seacrhengine2">
              <h3 className="seacrhengine mt-4">Search Engine Submission</h3>
              <hr className="w-50 ml-4" />
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                id="Name"
                className="w-75"
                onChange={(e) => this.setState({ name: e.target.value })}
              />
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="w-75"
                id="Email"
                value={this.state.email}
                onChange={(e) =>
                  this.setState({
                    email: e.target.value,
                  })
                }
              />
              <Form.Label>Enter Url</Form.Label>
              <Form.Control
                type="Url"
                id="Url"
                placeholder="Enter url"
                className="w-75"
                onChange={(e) => this.setState({ sbsUrl: e.target.value })}
              />

              <div className="d-flex justify-content-end mrrginside2200">
                <Button
                  variant="contained"
                  className="startbtn"
                  onClick={this.handlesubmit}
                >
                  Start
                </Button>
              </div>
              <br />
            </div>
          </div>
        </Dialog>
        <Dialog
          open={this.state.Playsession1}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="dialoged">
            <span
              className="floatright crossbtncolor mt-2"
              onClick={() => {
                this.setState({
                  Playsession1: false,
                });
              }}
            >
              <FontAwesomeIcon icon={faTimes} />{" "}
            </span>
            <div className="mt-3 ml-4 seacrhengine2">
              <h3 className="seacrhengine mt-4">Social Book Marketing</h3>
              <hr className="w-50 ml-4" />
              <Form.Label>Url</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter url"
                className="w-75"
                value={this.state.sbmUrl}
                onChange={(e) => this.setState({ sbmUrl: e.target.value })}
              />
              <Form.Label>title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                className="w-75"
                value={this.state.title}
                onChange={(e) => this.setState({ title: e.target.value })}
              />
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Description"
                className="w-75"
                value={this.state.description}
                onChange={(e) => this.setState({ description: e.target.value })}
              />
              <Form.Label>Keywords</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Keywords"
                className="w-75"
                value={this.state.keywords}
                onChange={(e) => this.setState({ keywords: e.target.value })}
              />
              {/* <Button
                            style={{ marginRight: "24%", marginTop: "4%" }}
                            id="buttonn"
                            variant="contained"
                            color="secondary "
                            onClick={this.handlesubmission}
                          >
                            Start
                          </Button> */}
              <div className="d-flex justify-content-end mrrginside2200">
                <Button
                  variant="contained"
                  className="startbtn"
                  onClick={this.handlesubmission}
                >
                  Start
                </Button>
              </div>
              <br />
            </div>
          </div>
        </Dialog>
        <Dialog
          open={this.state.Playsession2}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="dialoged seacrhengine2">
            <span
              className="floatright crossbtncolor mt-2"
              onClick={() => {
                this.setState({
                  Playsession2: false,
                });
              }}
            >
              <FontAwesomeIcon icon={faTimes} />{" "}
            </span>
            <h3 className="seacrhengine1 mt-4">Classified Submission</h3>
            <hr className="w-25 hrcolor" />
            <Grid container>
              <Grid item md={6}>
                <div className="ml-3 marginleftfor">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    className="w-75"
                    value={this.state.emaill}
                    onChange={(e) => this.setState({ emaill: e.target.value })}
                  />
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    className="w-75"
                    value={this.state.Passwordd}
                    onChange={(e) =>
                      this.setState({ Passwordd: e.target.value })
                    }
                  />
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter title"
                    className="w-75"
                    value={this.state.titles}
                    onChange={(e) => this.setState({ titles: e.target.value })}
                  />
                </div>
              </Grid>
              <Grid item md={6}>
                <div className="ml-3 marginleftfor">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Description"
                    className="w-75"
                    value={this.state.descriptionss}
                    onChange={(e) =>
                      this.setState({ descriptionss: e.target.value })
                    }
                  />
                  <Form.Label>URL</Form.Label>
                  <Form.Control
                    type="url"
                    placeholder="Enter url"
                    className="w-75"
                    value={this.state.sbmUrl}
                    onChange={(e) => this.setState({ sbmUrl: e.target.value })}
                  />
                  <Form.Label>Keywords</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Keywords"
                    className="w-75"
                    value={this.state.keywordsss}
                    onChange={(e) =>
                      this.setState({ keywordsss: e.target.value })
                    }
                  />
                </div>
              </Grid>
            </Grid>
            <div className="d-flex justify-content-end btnrighttoleft">
              <Button
                variant="contained"
                className="startbtn"
                onClick={this.handleclick}
              >
                Start
              </Button>
            </div>
            <br />
          </div>
        </Dialog>

        <Dialog
          open={this.state.deleteoption}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="dialoged2">
            <DialogContent>
              <DialogContentText
                id="alert-dialog-description "
                className="headingfont"
              >
                Are you Sure Do you want to Delete ?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                className="cancelbtn"
                onClick={() => {
                  this.setState({
                    deleteoption: false,
                  });
                }}
              >
                Cancel
              </Button>
              <Button className="deletebtn">Delete</Button>
            </DialogActions>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default Profile;
