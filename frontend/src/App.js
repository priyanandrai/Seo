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
import Yourwebsite from "./yourwebsite/yourwebsite";
import Youtube from "./youtubeview/youtubeview";
import Youtubeplayer from "./youtubeview/youtubeplayer";
import Mywebsite from "./mywebsite/mywebsite";
import Timestamp_converter from "./timestamp/timestamp_converter";
import Signup from "./signup/signup";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
} from "react-router-dom";
import  Maincontentpage2  from "./maincontentpage2/maincontentpage2";
import { SubmitRequest } from "./submitRequest/submitRequest";
import { Changepassword } from "./changepassword/changepassword";
import { Confirmotp } from "./confirmotp/confirmotp";
import Mywebsiteseoreport from "./mywebsiteseoreport/mywebsiteseoreport";
import Seosixweeks from "./seosixweeks/seosixweeks";
import Activity from "./acitivity/activity";
import Email_extractor from "./emailextractor/email_extractor";
import Backlink_check from "./backlinkchecks/backlink_check";
function App() {
 
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
        <Route exact path="/welcome" component={Yourwebsite}  />
        <Route exact path="/youtube_views" component={Youtube}  />
        <Route exact path="/youtube_player" component={Youtubeplayer}  />
        <Route exact path="/signup-required" component={Signup}  />
        <Route exact path="/my-website" component={Mywebsite}  />
        <Route exact path="/my-website-seo-report" component={Mywebsiteseoreport}  />
        <Route exact path="/seo-seven-weeks" component={Seosixweeks} />
        <Route exact path="/admin-activity" component={Activity}/>
        <Route exact path="/timestamp-converter" component={ Timestamp_converter}/>
        <Route exact path="/bulk-email-extractor" component={ Email_extractor}/>
        <Route exact path="/Backlink-checkes" component={ Backlink_check}/>
      </Router>
       );
 
}
export default App;
