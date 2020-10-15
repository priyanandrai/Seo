import React from "react";
import Profile from "./profile/profile"
import Tasks from "./profile/tasks"
import Admin from "./profile/admin"
import Admin_Dashboard from "./profile/admin_dashboard"
import Admin_Profile from "./profile/admin_profile"
import "./App.css";
import Maincontentpage from "./maincontentpage/maincontentpage";
import Logout from "./logout/logout";
import Userhistory from "./profile/userhistory";
import TrafficExchange from "./TrafficExchange/TrafficExchange";
import Yourwebsite from "./yourwebsite/yourwebsite"
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
} from "react-router-dom";
import  Maincontentpage2  from "./maincontentpage2/maincontentpage2";
import { SubmitRequest } from "./submitRequest/submitRequest";
import { Changepassword } from "./changepassword/changepassword";
import { Confirmotp } from "./confirmotp/confirmotp";


function App() {
 // if (!isLoggedIn()) {
    //   return (<Maincontentpage/>)
    //  }
    // let tempppp = window.localStorage.getItem("isLoggedIn") ;
    
 
    // if (window.localStorage.getItem("isLoggedIn") == "true") {
      
    return (
      
    <Router history={BrowserRouter}>

        {/* <Maincontentpage2/> */}
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/confirmotp" component={Confirmotp} />
        <Route exact path="/submit" component={SubmitRequest} />
        <Route exact path="/changepassword" component={Changepassword} />
        <Route exact path="/home" component={Maincontentpage} />
        <Route exact path="/" component={Maincontentpage} />
        <Route exact path="/dashboard" component={Maincontentpage2} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/tasks" component={Tasks}  />
        <Route exact path="/history" component={Userhistory}  />
        {/* <Route exact path="/leftpanel" component={Leftpanel}  /> */}
        <Route exact path="/adminute-home" component={Admin}  />
        <Route exact path="/adminute-dashboard" component={Admin_Dashboard}  />
        <Route exact path="/adminute-444-profile" component={Admin_Profile}  />
        <Route exact path="/trafficexchange" component={TrafficExchange}  />
        <Route exact path="/website" component={Yourwebsite}  />
      </Router>
       );

// else {
//   return (
//     <Router history={BrowserRouter}>
//     <div>
//     <Nav></Nav>

//     <Redirect to="/home"/>
//    <Route exact path="/home" component={Maincontentpage} />
   
//     </div>
//      </Router>
//   );
// }
  
 
}
export default App;
