import React, { Component } from 'react'
// import App from "../../src/App";
// import Sitemap from "react-router-sitemap";
//const Sitemap = require("react-router-sitemap").default;
//const Sitemap = require('../').default;
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
} from "react-router-dom";

const App = require("../../src/App").default;
const Sitemap = require("react-router-sitemap").default;
class GenerateSitemap extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

  }
  sitemapbtn = () => {
    return (
      new Sitemap( <Route>
        <Route path='/' />
        <Route path='/blog/:id' />
          </Route>)
        .build('http://localhost:3000/dashboard')
        .save('./sitemap.xml')

    )


  }

  render() {
    return (
      <div>
        <div className="ml-5 mt-5">
          <button onClick={this.sitemapbtn} className="">sitemap</button>
        </div>
      </div>
    )
  }
}

export default GenerateSitemap


// import React from "react";
// import App from "../../src/App";
// import Sitemap from "../"
// require('babel-register');

// const App = require('../../src/App').default;
// const Sitemap = require('../').default;

// (
//     new Sitemap(App)
//         .build('http://localhost:3000/dashboard')
//         .save('./sitemap.xml')
// );