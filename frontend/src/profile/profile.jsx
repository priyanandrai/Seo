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
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { getAuthData, isLoggedIn } from "../utils";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.belowlist = this.belowlist.bind(this);
    this.state = {
      organization: "",
      deleteoption: false,
      progressbar: false,
      data: [],
      organizationEnable: true,
      profession: "N/A",
      professionEnable: true,
      emailEnable: true,
      username: "",
      email: "",
      name: "",
      mid: "",
      mname: "",
      msubmiturl: "",
      memailaddress: "",
      mtitle: "",
      mdescription: "",
      mkeyword: "",
      mpassword: "",
      mcomments: "",
      tasktype: "",
      submiturl: "",
      selectedtasktype: "",
      comments: "",
      organisation: "N/A",
      usernameEnable: true,
      emailaddress: "",

      phoneNumber: "",
      // profileImg:
      //   "https://www.yealink.com.sg/wp-content/uploads/2013/08/YEALINK-UNVEILS-BUSINESS-HD-IP-DECT-PHONE-W52P.jpg",
        profileImg:
        "https://www.yealink.com.sg/wp-content/uploads/2013/08/YEALINK-UNVEILS-BUSINESS-HD-IP-DECT-PHONE-W52P.jpg",
      drillDown: "DrillDown",
      columns: [
        {
          name: "DATE",
          selector: "date",
          sortable: true,
          left: true,
        },
        {
          name: "TASK",
          selector: "tasktype",
          sortable: true,
          left: true,
        },
        {
          name: "STATUS",
          selector: "taskstatus",
          sortable: true,
          center: true,
        },
        {
          name: "COMMENTS",
          selector: "comments",
          sortable: true,
          left: true,
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
    if (para == "username") {
      this.setState({ usernameEnable: false });
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
  playtask = (
    tasktype,
    id,
    name,
    submiturl,
    emailaddress,
    title,
    description,
    keyword,
    password,
    comments
  ) => {
    if (tasktype == "Search Engine Submission") {
      this.setState({
        Playsession: !this.state.Playsession,
        mid: id,
        mname: name,
        msubmiturl: submiturl,
        memailaddress: emailaddress,
        mcomments: comments,
      });
      return;
    }

    if (tasktype == "Social Book Marketing") {
      this.setState({
        Playsession1: !this.state.Playsession1,
        msubmiturl: submiturl,
        mtitle: title,
        mdescription: description,
        mkeyword: keyword,
        mcomments: comments,
      });
      return;
    }

    if (tasktype == "Classified Submission") {
      this.setState({
        Playsession2: !this.state.Playsession2,
        memailaddress: emailaddress,
        mtitle: title,
        mdescription: description,
        mkeyword: keyword,
        msubmiturl: submiturl,
        mpassword: password,
        mcomments: comments,
      });
      return;
    }
  };

  componentWillMount() {
    let temp = isLoggedIn();
if(temp == true || temp =="true"){

}else{
window.location ="/home";
}

    let self = this;
    let url =
      getBaseUrl() + "/getprofile?id=" + window.localStorage.getItem("id");
    axios.get(url).then(
      (response) => {
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

    this.belowlist();
  }
  deleteoptiontask = () => {
    document.getElementById("close").click();
    let url = getBaseUrl() + "/deletedtasks?id=" + this.state.selectedtasktype;
    this.setState({
      progressbar: true,
    });
    console.log(this.state.selectedtasktype);
    axios.get(url).then(
      (response) => {
        this.setState({
          progressbar: false,
        });

        this.belowlist();
        // window.location.reload();
      },

      (error) => {
        this.setState({
          progressbar: false,
        });
        console.log(error);
      }
    );
  };
  cancelprofile = () => {
    window.location.reload();
  };

  handleClickOpen(ind) {
    // alert(this.state.data[index].tasktype)
    this.setState({
      deleteoption: true,
      selectedtasktype: this.state.data[ind].id,
    });
  }

  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  belowlist() {
    let nurl =
      getBaseUrl() + "/gettask?id=" + window.localStorage.getItem("id");
    axios.get(nurl).then(
      (response) => {
        response.data.map(
          (i, ind) =>
            (i.action = (
              <span>
                <FontAwesomeIcon
                  className=" mr-2 playcolor afterplaycolor"
                  onClick={() => {
                    this.playtask(
                      i.tasktype,
                      i.id,
                      i.name,
                      i.submiturl,
                      i.emailaddress,
                      i.title,
                      i.keyword,
                      i.description,
                      i.password,
                      i.comments
                    );
                  }}
                  icon={faPlay}
                  title="Restart Session"
                />
                |
                <FontAwesomeIcon
                  className=" mr-2 ml-2 afterplaycolor dowmloadcolor"
                  icon={faDownload}
                  title="View Report"
                />
                |
                <FontAwesomeIcon
                  className=" mr-2 ml-2 afterplaycolor deletecolor"
                  onClick={() => {
                    this.handleClickOpen(ind);
                  }}
                  icon={faTrash}
                  title="Delete Session"
                />
              </span>
            ))
        );
        // alert(response.data.message);
        this.setState({
          data: response.data,
        });
      },
      (error) => {}
    );
  }
  handlesubmit = (e) => {
    let url = getBaseUrl() + "/starttask";
    this.setState({
      progressbar: true,
    });
    let month = new Date().getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    let day = new Date().getDate();
    if (day < 10) {
      day = "0" + day;
    }
    let year = new Date().getFullYear();
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let date = day + "-" + month + "-" + year + " " + hour + ":" + min;
    let temp = {
      userId: window.localStorage.getItem("id"),
      tasktype: "Search Engine Submission",
      date: date,
      name: this.state.mname,
      emailaddress: this.state.memailaddress,
      submiturl: this.state.msubmiturl,
      comments: this.state.mcomments,
    };
    axios.post(url, temp).then(
      (response) => {
        // alert(response.data.message);
        this.setState({
          progressbar: false,
          snackbar: true,
          error: "Data is successfully uploaded",
        });
        window.location.reload();
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
    let url = getBaseUrl() + "/starttask";
    this.setState({
      progressbar: true,
    });
    let month = new Date().getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    let day = new Date().getDate();
    if (day < 10) {
      day = "0" + day;
    }
    let year = new Date().getFullYear();
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let date = day + "-" + month + "-" + year + " " + hour + ":" + min;
    let temp = {
      userId: window.localStorage.getItem("id"),
      tasktype: "Social Book Marketing",
      date: date,
      submiturl: this.state.msubmiturl,
       title: this.state.mtitle,
      keyword: this.state.mkeyword,
      description: this.state.mdescription,
      comments: this.state.mcomments,
    };
    axios.post(url, temp).then(
      (response) => {
        // alert(response.data.message);
        this.setState({
          progressbar: false,
          snackbar: true,
          error: "Data is successfully uploaded",
        });
        window.location.reload();
        return;
      },
      (error) => {
        this.setState({
          progressbar: false,
        });
      }
    );
    
  };
  handleclick = (e) => {
    let url = getBaseUrl() + "/starttask";
    this.setState({
      progressbar: true,
    });
    let month = new Date().getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    let day = new Date().getDate();
    if (day < 10) {
      day = "0" + day;
    }
    let year = new Date().getFullYear();
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let date = day + "-" + month + "-" + year + " " + hour + ":" + min;
    let temp = {
      userId: window.localStorage.getItem("id"),
      tasktype: "Classified Submission",
      date: date,
     
      emailaddress: this.state.memailaddress,
      password: this.state.mpassword,
      title: this.state.mtitle,
      description: this.state.mdescription,
      submiturl: this.state.msubmiturl,
      keyword: this.state.mkeyword,
      comments: this.state.mcomments,
    };
    axios.post(url, temp).then(
      (response) => {
        // alert(response.data.message);
        this.setState({
          progressbar: false,
          snackbar: true,
          error: "Data is successfully uploaded",
        });
        window.location.reload();
        return;
      },
      (error) => {
        this.setState({
          progressbar: false,
        });
      }
    );
   
  };
  closeSnackbar = () => {
    this.setState({ snackbar: false });
  };
  refreshclick = () => {
    window.location.reload();
  };

  render() {
    const { profileImg } = this.state;
    return (
      <div className="profile-main-div container">
        <Grid container className="submenu-alignment">
          <Grid item xs={12} className="gridwidth">
            <div className="buttonsright22 btnmobile">
              <button type="button" className="btnmargin bottoncolorq" >
                Save
              </button>
              <button
                type="button"
                className="bottoncolorq"
                onClick={this.cancelprofile}
              >
                Cancel
              </button>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className="mt-5 imagecentermobile">
              <div className="">
                {/* <h1 className="heading">Add your Image</h1> */}
                <div className="profilepicture1 mx-auto d-block">
                  <img src={profileImg} alt="" id="img" className="img" />
                </div>
                <input
                  type="file"
                  accept="image/*"
                  name="image-upload"
                  id="input"
                  onChange={this.imageHandler}
                />
                <div className="label">
                  <label className="image-upload" htmlFor="input">
                    <i className="material-icons"></i>
                    Upload your Photo
                  </label>
                </div>
              </div>
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
        {/* <img
              className="dataiconsright"
              src="https://simpleicon.com/wp-content/uploads/refresh.png"
              onClick={this.refreshclick}
            /> */}
          <DataTable
            className="datatablehoer"
            title="Your History"
            columns={this.state.columns}
            data={this.state.data}
            pagination={true}
            paginationDefaultPage
            value={this.state.selectedtasktype}
           
          />
        </div>
        <br />

        <Dialog
          onClose={() => {
            this.setState({
              dialogBox: false,
            });
          }}
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
        onClose={() => {
            this.setState({
              Playsession: false,
            });
          }}
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
              <hr className="w-50 ml-5" />
              <div className="seachinginewidthset">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter name"
                  id="Name"
                  className="width90"
                  title={this.state.mname}
                  value={this.state.mname}
                  onChange={(e) => this.setState({ mname: e.target.value })}
                />
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="width90"
                  title={this.state.memailaddress}
                  id="Email"
                  value={this.state.memailaddress}
                  onChange={(e) =>
                    this.setState({
                      memailaddress: e.target.value,
                    })
                  }
                />
                <Form.Label>Enter Url</Form.Label>
                <Form.Control
                  type="Url"
                  id="Url"
                  placeholder="Enter url"
                  className="width90"
                  title={this.state.msubmiturl}
                  onChange={(e) =>
                    this.setState({ msubmiturl: e.target.value })
                  }
                  value={this.state.msubmiturl}
                />
                   <Form.Label>Comment</Form.Label>
                <Form.Control
                  type="Url"
                  id="Url"
                  placeholder="Enter your comment"
                  className="width90"
                  title={this.state.mcomments}
                  onChange={(e) =>
                    this.setState({ mcomments: e.target.value })
                  }
                  value={this.state.mcomments}
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
              </div>
              <br />
            </div>
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
                this.state.error === null
                  ? this.state.message
                  : this.state.error
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
        </Dialog>
        <Dialog
        onClose={() => {
          this.setState({
            Playsession1: false,
          });
        }}
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
              <hr className="w-50 ml-5" />
              <div className="seachinginewidthset">
                <Form.Label>Url</Form.Label>
                <Form.Control
                  type="url"
                  placeholder="Enter url"
                  className="width90"
                  title={this.state.msubmiturl}
                  value={this.state.msubmiturl}
                  onChange={(e) =>
                    this.setState({ msubmiturl: e.target.value })
                  }
                />
                <Form.Label>title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  className="width90"
                  title={this.state.mtitle}
                  value={this.state.mtitle}
                  onChange={(e) => this.setState({ mtitle: e.target.value })}
                />
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Description"
                  className="width90"
                  title={this.state.mdescription}
                  value={this.state.mdescription}
                  onChange={(e) =>
                    this.setState({ mdescription: e.target.value })
                  }
                />
                <Form.Label>Keywords</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Keywords"
                  className="width90"
                  title={this.state.mkeyword}
                  value={this.state.mkeyword}
                  onChange={(e) => this.setState({ mkeyword: e.target.value })}
                />
                 <Form.Label>Comment</Form.Label>
                <Form.Control
                  type="Url"
                  id="Url"
                  placeholder="Enter your comment"
                  className="width90"
                  title={this.state.mcomments}
                  onChange={(e) =>
                    this.setState({ mcomments: e.target.value })
                  }
                  value={this.state.mcomments}
                />
              
                <div className="d-flex justify-content-end mrrginside2200">
                  <Button
                    variant="contained"
                    className="startbtn"
                    onClick={this.handlesubmission}
                  >
                    Start
                  </Button>
                </div>
              </div>
              <br />
            </div>
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
                this.state.error === null
                  ? this.state.message
                  : this.state.error
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
        </Dialog>
        <Dialog
        onClose={() => {
          this.setState({
            Playsession2: false,
          });
        }}
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
                    className="width90"
                    title={this.state.memailaddress}
                    value={this.state.memailaddress}
                    onChange={(e) =>
                      this.setState({ memailaddress: e.target.value })
                    }
                  />
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    title={this.state.mpassword}
                    className="width90"
                    value={this.state.mpassword}
                    onChange={(e) =>
                      this.setState({ mpassword: e.target.value })
                    }
                  />
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter title"
                    className="width90"
                    title={this.state.mtitle}
                    value={this.state.mtitle}
                    onChange={(e) => this.setState({ mtitle: e.target.value })}
                  />
                   <Form.Label>Comment</Form.Label>
                <Form.Control
                  type="Url"
                  id="Url"
                  placeholder="Enter your comment"
                  className="width90"
                  title={this.state.mcomments}
                  onChange={(e) =>
                    this.setState({ mcomments: e.target.value })
                  }
                  value={this.state.mcomments}
                />
                </div>
              </Grid>
              <Grid item md={6}>
                <div className=" marginleftfor1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Description"
                    className="width90"
                    title={this.state.mdescription}
                    value={this.state.mdescription}
                    onChange={(e) =>
                      this.setState({ mdescription: e.target.value })
                    }
                  />
                  <Form.Label>URL</Form.Label>
                  <Form.Control
                    type="url"
                    placeholder="Enter url"
                    className="width90"
                    title={this.state.msubmiturl}
                    value={this.state.msubmiturl}
                    onChange={(e) =>
                      this.setState({ msubmiturl: e.target.value })
                    }
                  />
                  <Form.Label>Keywords</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Keywords"
                    className="width90"
                    title={this.state.mkeyword}
                    value={this.state.mkeyword}
                    onChange={(e) =>
                      this.setState({ mkeyword: e.target.value })
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
          <div>
            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              open={this.state.snackbar}
              onClose={this.closeSnackbar}
              message={
                this.state.error === null
                  ? this.state.message
                  : this.state.error
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
        </Dialog>

        <Dialog
         onClose={() => {
          this.setState({
            deleteoption: false,
          });
        }}
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
              {/* <h1>{this.state.selectedtasktype}</h1> */}
              <Button
                className="cancelbtn"
                id="close"
                onClick={() => {
                  this.setState({
                    deleteoption: false,
                  });
                }}
              >
                Cancel
              </Button>
              <Button className="deletebtn" onClick={this.deleteoptiontask}>
                Delete
              </Button>
            </DialogActions>
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

export default Profile;
