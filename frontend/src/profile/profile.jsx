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

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organization: "",
      deleteoption: false,
      organizationEnable: true,
      profession: "",
      professionEnable: true,
      emailEnable: true,
      username: "",
      email: "",
      usernameEnable: true,
      drillDown: "DrillDown",
      data: [
        {
          id: 1,
          Date: "20/12/2000",
          task: "Search Engine Submission",
          status: "Inprogress",
          action: (
            <span>
              <FontAwesomeIcon
                className=" mr-2"
                onClick={this.Playsession}
                icon={faPlay}
              />
              |
              <FontAwesomeIcon className=" mr-2 ml-2" icon={faDownload} />|
              <FontAwesomeIcon
                className=" mr-2 ml-2"
                onClick={this.deleteoption}
                icon={faTrash}
              />
            </span>
          ),
        },
        {
          id: 2,
          Date: "21/12/2000",
          task: "Social book marketing",
          status: "Aborted",
          action: (
            <span>
              <FontAwesomeIcon
                className=" mr-2"
                onClick={this.Playsession1}
                icon={faPlay}
              />
              |
              <FontAwesomeIcon className=" mr-2 ml-2" icon={faDownload} />|
              <FontAwesomeIcon
                className=" mr-2 ml-2"
                onClick={this.deleteoption}
                icon={faTrash}
              />
            </span>
          ),
        },
        {
          id: 3,
          Date: "22/12/2000",
          task: "Classified Submission",
          status: "Stopped",
          action: (
            <span>
              <FontAwesomeIcon
                className=" mr-2"
                onClick={this.Playsession}
                icon={faPlay}
              />
              |
              <FontAwesomeIcon className=" mr-2 ml-2" icon={faDownload} />|
              <FontAwesomeIcon
                className=" mr-2 ml-2"
                onClick={this.deleteoption}
                icon={faTrash}
              />
            </span>
          ),
        },
        {
          id: 4,
          Date: "23/12/2000",
          task: "Search Engine Submission",
          status: "Complete",
          action: (
            <span>
              <FontAwesomeIcon
                className=" mr-2"
                onClick={this.Playsession}
                icon={faPlay}
              />
              |
              <FontAwesomeIcon className=" mr-2 ml-2" icon={faDownload} />|
              <FontAwesomeIcon
                className=" mr-2 ml-2"
                onClick={this.deleteoption}
                icon={faTrash}
              />
            </span>
          ),
        },
      ],
      columns: [
        {
          name: "DATE",
          selector: "Date",
          sortable: true,
        },
        {
          name: "TASK",
          selector: "task",
          sortable: true,
          center: true,
        },
        {
          name: "STATUS",
          selector: "status",
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
  render() {
    return (
      <div className="profile-main-div container">
        <Grid container className="submenu-alignment">
          <Grid item md={4}>
            <div className="mt-5">
              
              <img
                className="profilepicture1 mx-auto d-block"
                src="https://i.pinimg.com/originals/11/fd/aa/11fdaae6f8e4deb13481103b4e9a0744.jpg"
              />
            </div>

            <div className=" d-flex mt-4">
              
              <TextField
                id="standard-basic"
                label=""
                disabled={this.state.usernameEnable}
                onChange={(e) => {
                  this.setState({ username: e.target.value });
                }}
                value={this.state.username}
              />
              <div className="align-self-end p-2">
                <FontAwesomeIcon
                  className=""
                  icon={faPencilAlt}
                  onClick={() => {
                    this.editForm("username");
                  }}
                />
              </div>
            </div>

            <div className="pt-2">
              <a onClick={this.dialogBox} className="upgradetext">
                Upgrade to Premium
              </a>
            </div>
          </Grid>
          <Grid item md={8}>
            <div className="profile-right">
              <div className="d-flex">
                
                <TextField
                  id="standard-basic"
                  label="Email"
                  disabled={this.state.emailEnable}
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                />
                <div className="align-self-end p-2">
                  <FontAwesomeIcon
                    className=""
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
                  className="mt-1"
                  label="Mobile No."
                  disabled
                />
              </div>
              <div className="d-flex">
                
                <TextField
                  id="standard-basic"
                  className="mt-1"
                  label="Profession"
                  disabled={this.state.professionEnable}
                  onChange={(e) => {
                    this.setState({ profession: e.target.value });
                  }}
                />
                <div className="align-self-end p-2">
                  <FontAwesomeIcon
                    className=""
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
                  className="mt-1"
                  label="Organisation"
                  disabled={this.state.organizationEnable}
                  onChange={(e) => {
                    this.setState({ organization: e.target.value });
                  }}
                />
                <div className="align-self-end p-2">
                  <FontAwesomeIcon
                    className=""
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
        <div>
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
          <div className="dialoged">
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
              <div className="mt-3 ml-4">
              <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="name"
                          placeholder="Enter name"
                          id="Name"
                          className="w-75"
                          onChange={(e) =>
                            this.setState({ name: e.target.value })
                          }
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
                          onChange={(e) =>
                            this.setState({ sbsUrl: e.target.value })
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
              <div className="mt-3 ml-4">
              <Form.Label>Url</Form.Label>
                          <Form.Control
                            type="url"
                            placeholder="Enter url"
                            className="w-75"
                            value={this.state.sbmUrl}
                            onChange={(e) =>
                              this.setState({ sbmUrl: e.target.value })
                            }
                          />
                          <Form.Label>title</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter title"
                            className="w-75"
                            value={this.state.title}
                            onChange={(e) =>
                              this.setState({ title: e.target.value })
                            }
                          />
                          <Form.Label>Description</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Description"
                            className="w-75"
                            value={this.state.description}
                            onChange={(e) =>
                              this.setState({ description: e.target.value })
                            }
                          />
                          <Form.Label>Keywords</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Keywords"
                            className="w-75"
                            value={this.state.keywords}
                            onChange={(e) =>
                              this.setState({ keywords: e.target.value })
                            }
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
