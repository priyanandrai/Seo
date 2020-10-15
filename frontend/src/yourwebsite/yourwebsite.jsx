import React from "react";
// import { Container, Row, Col, Card,Form } from "react-bootstrap";


import HOC from "../components/HOC";

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
