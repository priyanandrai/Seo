import React, { Component, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Leftpanel from "../leftpanel/leftpanel";
// import Nav from "../profile/nav";
import Adminheader from "../profile/adminheader";

const HOC1 = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <Fragment>
            <Adminheader></Adminheader>
         
          <WrappedComponent {...this.props}/>
          {/* <Footer/> */}
        </Fragment>
      );
    }
  };
};

export default HOC1;
