import React, { Component } from "react";

export class TrafficExchanger extends Component {
  constructor() {
    super();
  }
 
  componentDidMount(){

  }

  componentDidCatch(){
      alert("issue in page , have to look why error is coming ");
  }

  componentWillUnmount(){
      alert("going to destory page ")
  }

  componentDidUpdate(){
      alert("something is update , we have to have a look on it")
  }
  render() {
    return (
      <div className="headerspace">
       Welcome to 
      </div>
    );
  }
}

export default TrafficExchanger;
