import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import "./profile.css";
import "../style/quest.css";
import logo from "../images/logo.png";

class Adminheader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedd:"ankur",
      adminuteuser:"Amit Rai"
   
    };
  }
  logout = () => {
   
    window.localStorage.setItem("isadminuteLoggedin", "sha");
    window.location = "/adminute-home";
  };
  componentWillMount(){
    let id = window.localStorage.getItem("id");
    this.setState({ id: id });
    // if (window.location.pathname == "/adminute-dashboard") {
    //   this.setState({ adminGuard: true });
    // }
    // if (window.location.pathname == "/444-profile") {
    //   this.setState({ adminprofile: true });
    // }
    let temp = window.localStorage.getItem("isadminuteLoggedin");
    // alert(temp)
    if (temp === true || temp ==="true") {
      let adminuteuser = window.localStorage.getItem("adminuteuser");
      let newUser = adminuteuser.substring(0, 8);
      this.setState({
        isLoggedd: true,
        adminuteuser: newUser,
      });
    }
  }
 
  

  render() {
    return (
      <div>
         <AppBar position="static" color="danger">
        <Toolbar>
    
         
         
          {window.localStorage.getItem("isadminuteLoggedin") === "ankur" ?
           (
            <a href="/adminute-dashboard">
              <img className="logos" src={logo} alt="" />
            </a>
          ) 
          : 
          (
            <a href="/adminute-home">
           <img className="logos" src={logo} alt="" />
            </a>
          )
          }
          
          {window.localStorage.getItem("isadminuteLoggedin") === "ankur" ? (
            <div className="ml-auto">
                  <a 
                  className="nav-link dropdown-toggle text-dark dropdownss dropwidth ml-auto"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {this.state.adminuteuser}
                  
              </a>
              
                <div
                  className="dropdown-menu dropdown-menu-right drophover margindrop"
                  aria-labelledby="navbarDropdown"
                >
                   <a className="dropdown-item" href="adminute-dashboard">
                    DashBoard
                  </a>
                   <a className="dropdown-item" href="adminute-444-profile">
                    View Profile
                  </a>
                  <a className="dropdown-item" onClick={this.logout}>
                    Logout
                  </a>
                  

                </div>
                </div>
                ) :null}
         
         
         
        </Toolbar>
      </AppBar>
      </div>
    );
  }
}

export default Adminheader;
