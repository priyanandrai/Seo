import React, { Component, Fragment } from "react";
import Footer from "./Footer";
import Leftpanel from "../leftpanel/leftpanel";
import Nav from "../profile/nav";

 const HOC = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <Fragment>            
          <Nav></Nav>
          <Leftpanel></Leftpanel>
          <WrappedComponent {...this.props}/>
          <Footer/>
        </Fragment>
      );
    }
  };
};

export default HOC;
