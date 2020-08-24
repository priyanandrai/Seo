import React, { Component } from "react";
import "../style/quest.css";
import "../App.css";
import "../style/header.css";
import Input from "../components/Input";
import Dialog from "@material-ui/core/Dialog";
import { faEthernet } from "@fortawesome/free-solid-svg-icons";

export class Changepassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal_type: "signup",
      full_name: "",
      email: "",
      password: "",
      confirm_password: "",
    };
  }
  // openModal(type) {
  //   if (type == "contactus") {
  //     // window.open("http://srcservicesltd.com/contactus");
  //     return;
  //   }

  //   this.closeModal();
  //   this.setState({
  //     modal_open: true,
  //     modal_type: type,
  //   });
  // }

  closeModal() {
    this.setState({
      modal_open: false,
      modal_type: "",
      full_name: "",
      email: "",
      password: "",
      confirm_password: "",
      checkbox: false,
      button_status: false,
    });
  }
  handleOnSubmit(event) {
    window.localStorage.setItem("isLoggedIn", true);
    window.localStorage.setItem("user", this.state.email);
    window.location = "/dashboard";

    event.preventDefault();
    const {
      how_account_dropdown,
      modal_open,
      modal_type,
      full_name,
      email,
      password,
      confirm_password,
      checkbox,
    } = this.state;

    const { doSignUp } = this.props.authActions;
    let temp = doSignUp({
      full_name,
      email,
      password,
      confirm_password,
    });
  }

  render() {
    return (
      <div>
        {/* <h1 style={{ marginTop: "20%" }}>hello</h1> */}
        <Dialog
          onClose={() => {
            this.setState({
              modal_open: false,
            });
          }}
          aria-labelledby="simple-dialog-title"
          open={this.state.modal_open}
        >
          <div id="auth-modal">
            Login
            <div className="auth-modal-in">
              {this.state.modal_type === "signup" && (
                <div>
                  <h1>
                    Si<label className="underscore">gn U</label>p{" "}
                    <span
                      className="floatright"
                      onClick={() => {
                        this.setState({
                          modal_open: false,
                        });
                      }}
                    >
                      {/* <FontAwesomeIcon icon={faTimes} />{" "} */}
                    </span>
                  </h1>
                </div>
              )}

              <fieldset className="inputHome">
                {/* <FontAwesomeIcon
                      icon={faUser}
                      className="signup-icon"
                    /> */}
                {/* fa-lg m-2 align-middle text-danger */}
                <Input
                  className="bodernull111"
                  type="text"
                  name="full_name"
                  placeholder="Current Password"
                  autocomplete="off"
                  value={this.state.full_name}
                  onChange={this.handelOnChange}
                />
              </fieldset>

              <fieldset className="inputHome">
                {/* <FontAwesomeIcon  className="signup-icon" /> */}
                <Input
                  className="bodernull111"
                  type="text"
                  name="email"
                  placeholder="New Password"
                  autocomplete="off"
                  value={this.state.email}
                  onChange={(e) =>
                    this.setState({
                      email: e.target.value,
                    })
                  }
                />
              </fieldset>

              <fieldset className="inputHome">
                {/* <FontAwesomeIcon  className="signup-icon" /> */}
                <Input
                  className="bodernull111"
                  type="text"
                  name="email"
                  placeholder="Confirm password"
                  autocomplete="off"
                  value={this.state.password}
                  onChange={(e) =>
                    this.setState({
                      password: e.target.value,
                    })
                  }
                />
              </fieldset>
              <button>Change Password</button>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default Changepassword;
