import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export class Logout extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
    this.props.logout();
    
  }

  render() {

    return (
      <div>
        <a class="dropdown-item"  onClick={this.logout}>
          logout
        </a>
      </div>
    );
  }
}

export default Logout;
