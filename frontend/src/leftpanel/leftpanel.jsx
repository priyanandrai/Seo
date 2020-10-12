import React from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import "../maincontentpage/main.css";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ReactPlayer from "react-player";
import { getAuthData, isLoggedIn } from "../utils";
import "./leftpanel.css";

class Leftpanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      panelshow:false,
    };
  }
   openNav =()=>{
  //  document.getElementById("mySidenav").style.width = "250px";
  // document.getElementById("leftmain").style.marginLeft = "250px";
   this.setState({
    panelshow: !this.state.panelshow
   })
 }
 
 closeNav=()=>{
   document.getElementById("mySidenav").style.width = "0";
   document.getElementById("leftmain").style.marginLeft= "0";
 }
  render() {
    return (
      <div  >
        {this.state.panelshow ? (
        <div id="mySidenav" class="sidenav">
          <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>
            &times;
          </a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
           ) : null} 
          <div id="leftmain">
        <span  onClick={this.openNav} className="cursor">
          &#9776; 
        </span>
        </div>
      </div>
    );
  }
}
export default Leftpanel;
