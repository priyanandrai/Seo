import React from "react";
import { Container, Row, Col, Card,Form } from "react-bootstrap";

import Grid from "@material-ui/core/Grid";
import HOC from "../components/HOC";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ReactPlayer from "react-player";
import Dialog from "@material-ui/core/Dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faTimes,
  faDownload,
  faUser,
  faPlay,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/Button";
import { getAuthData, isLoggedIn } from "../utils";
import Input from "../components/Input";
import "./yourwebsite.css";
class Yourwebsite extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
 
    };
  }
 
  render() {
    return (
      <div className="mt-5 websitecolor">
     helllo
     
      </div>
    );
  }
}
export default HOC(Yourwebsite);
