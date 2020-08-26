import React, { Component } from "react";
import "./profile.css";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faTimes,
  faPlay,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import DataTable, { createTheme } from "react-data-table-component";
import TextField from "@material-ui/core/TextField";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organization: "",
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
          task: "create a table",
          status: "Inprogress",
          action: (
            <span>
              <FontAwesomeIcon className=" mr-2" onClick={this.Playsession} icon={faPlay} />{" "}
              <FontAwesomeIcon className=" mr-2 ml-2" icon={faTimes} />{" "}
              <FontAwesomeIcon className=" mr-2 ml-2" icon={faTrash} />
            </span>
          ),
        },
        {
          id: 2,
          Date: "21/12/2000",
          task: "Assign login",
          status: "Aborted",
          action: (
            <span>
              <FontAwesomeIcon className=" mr-2" onClick={this.Playsession} icon={faPlay} />{" "}
              <FontAwesomeIcon className=" mr-2 ml-2" icon={faTimes} />{" "}
              <FontAwesomeIcon className=" mr-2 ml-2" icon={faTrash} />
            </span>
          ),
        },
        {
          id: 3,
          Date: "22/12/2000",
          task: "Create a new page",
          status: "Stopped",
          action: (
            <span>
              <FontAwesomeIcon className=" mr-2" onClick={this.Playsession} icon={faPlay} />{" "}
              <FontAwesomeIcon className=" mr-2 ml-2" icon={faTimes} />{" "}
              <FontAwesomeIcon className=" mr-2 ml-2" icon={faTrash} />
            </span>
          ),
        },
        {
          id: 4,
          Date: "23/12/2000",
          task: "Create a some page",
          status: "Complete",
          action: (
            <span>
              <FontAwesomeIcon className=" mr-2" onClick={this.Playsession} icon={faPlay} />{" "}
              <FontAwesomeIcon className=" mr-2 ml-2" icon={faTimes} />{" "}
              <FontAwesomeIcon className=" mr-2 ml-2" icon={faTrash} />
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
          // cell: (row) => (
          //   <div>
          //     <div>report</div>
          //   </div>
          // ),
        },
      ],
      dialogBox: false,
      Playsession:false,
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
  dialogBox = () => {
    this.setState({ dialogBox: !this.state.dialogBox });
  };
  Playsession = () => {
    this.setState({ Playsession: !this.state.Playsession });
  };
  render() {
    return (
      <div className="profile-main-div container">
        <Grid container className="submenu-alignment">
          <Grid item md={4}>
            <div className="mt-5">
              {/* <div className="profileimg">Profile picture</div> */}
              <img
                className="profilepicture1 mx-auto d-block"
                src="https://i.pinimg.com/originals/11/fd/aa/11fdaae6f8e4deb13481103b4e9a0744.jpg"
              />
            </div>

            <div className=" d-flex mt-4">
              {/* <input
                type="text"
                class="form-control border-top-0 border-left-0 border-right-0 mx-auto"
                placeholder="User Name"
                required
              /> */}
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
                {/* <input
                  type="email"
                  class="form-control border-top-0 border-left-0 border-right-0"
                  placeholder="Email"
                  required
                /> */}
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
                {/* <input
                  type="phone"
                  class="form-control border-top-0 border-left-0 border-right-0 mt-3"
                  placeholder="Mobile No."
                  required
                /> */}
                <TextField
                  id="standard-basic"
                  className="mt-1"
                  label="Mobile No."
                  disabled
                />
              </div>
              <div className="d-flex">
                {/* <input
                  type="text"
                  class="form-control border-top-0 border-left-0 border-right-0 mt-3"
                  placeholder="Profession"
                  required
                /> */}
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
                {/* <input
                  type="text"
                  class="form-control border-top-0 border-left-0 border-right-0 mt-3"
                  placeholder="Organisation"
                  required
                /> */}
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
          </div>
        </Dialog>
      </div>
    );
  }
}

export default Profile;
