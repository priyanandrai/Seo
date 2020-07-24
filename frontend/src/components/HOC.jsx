import React, { Component, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";

const HOC = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <Fragment>
            
           {/* <Header/>  */}
          {/* <WrappedComponent {...this.props}/> */}
          <Footer/>
        </Fragment>
      );
    }
  };
};

export default HOC;
