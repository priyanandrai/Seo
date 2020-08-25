import React, { Component } from "react";
import "./profile.css";
import Grid from "@material-ui/core/Grid";

class Profile extends Component {
  render() {
    return (
      <div className="profile-main-div">
        <Grid container className="submenu-alignment">
          <Grid item md={4}>
            <div className="profilepicture">
              <div className="profileimg">Profile picture</div>
            </div>
            <div>
              <input type="text" placeholder="User Name" className="username" />
            </div>
          </Grid>
          <Grid item md={8}>
              <div>
                   
              </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Profile;
