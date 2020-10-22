import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "../maincontentpage/main.css";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import ReactPlayer from "react-player";
import HOC from "../components/HOC";
import { isLoggedIn } from "../utils";
import home from "../images/home.jpg";
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";
import logo4 from "../images/logo4.jpg";
import logo5 from "../images/logo5.png";
import logo10 from "../images/logo10.png";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    let temp = !isLoggedIn();

    if (temp === true || temp === "true") {
      // console(isLoggedIn)
    } else {
      window.location = "/dashboard";
    }
  }
  componentWillUnmount() {
    console.log("coming here for component willUnmoutn ");
  }
 
  render() {
    return (
      <div className="">
        <div>
          <img className="home_page img-fluid" src={home} alt="" />
        </div>

        <div className="second_colorbg">
          <div className="Img_content">
            <p className="over_image">SEEMA RAI CONSULTANCY SERVICES</p>
          </div>
          <div className=" home_backcolor">
            <Grid container className="">
              <Grid item md={4}>
                <a className="a_tag_color" href="signup-required">
                <div className="home_grid  mt-5" >
                  <p className="home_seo">Free SEO Automator</p>
                  <p className="home_content ml-3 mr-3">
                    Seo Automator will help you to automate your day to day
                    activites.
                    <br />
                    Like Serach Engine Submission,Social Book
                    Marketing,Classified Submission.
                  </p>
                  <div className="home_icon1">
                    <img className="home_img" src={logo2} alt="" />
                  </div>
                </div></a>
              </Grid>
              <Grid item md={4}>
              <a className="a_tag_color" href="trafficexchange">
                <div className="home_grid mt-5">
                  <p className="home_seo">Free Traffic Exchange</p>
                  <p className="home_content ml-3 mr-3">
                    {" "}
                    Free Website Traffic Exchange The best way to get website
                    traffic to your website.
                  </p>
                  <div className="home_icon1">
                    <img className="home_img" src={logo3} alt="" />
                  </div>
                </div></a>
              </Grid>
              <Grid item md={4}>
              <a className="a_tag_color" href="welcome">
                <div className="home_grid mt-5">
                  <p className="home_seo">Free YouTube Views </p>
                  <p className="home_content ml-3 mr-3">
                    SRCS for Youtube will help you to grow YouTube channels and
                    increase YouTube views quickly.
                  </p>
                  <div className="home_icon1">
                    <img className="home_img" src={logo4} alt="" />
                  </div>
                </div></a>
              </Grid>
            </Grid>
          </div>

          <div className=" home_backcolor pb-5">
            <Grid container className="">
              <Grid item md={4}>
              <a className="a_tag_color" href="welcome">
                <div className="home_grid mt-5" >
                  <p className="home_seo">Free Social Media Manager</p>
                  <p className="home_content ml-3 mr-3">
                    Let us help you create a fully customized niche social
                    network website with AI-based activity feed, multiple post
                    types, and powerful apps.
                  </p>
                  <div className="home_icon1">
                    <img className="home_img" src={logo5} alt="" />
                  </div>
                </div></a>
              </Grid>
              <Grid item md={4}>
              <a className="a_tag_color" href="welcome">
                <div className="home_grid mt-5" >
                  <p className="home_seo">Free Website Analytics</p>
                  <p className="home_content ml-3 mr-3">
                    Let us help you create a fully customized niche social
                    network website with AI-based activity feed, multiple post
                    types, and powerful apps.
                  </p>
                  <div className="home_icon1">
                    <img className="home_img" src={logo10} alt="" />
                  </div>
                </div></a>
              </Grid>
              <Grid item md={4}></Grid>
            </Grid>
          </div>
        </div>
        {/* <Grid container className="submenu-alignment">
          <Grid item md={7}>
            <div className="animate__animated animate__backInLeft animate__delay-10s left-main-section">
              <h2 className="main-title-heading">
                {" "}
                What does mean by Off-Page Optimization ?{" "}
              </h2>
              <div className=" main-title-text">
                <p>
                  Off-page SEO refers to activities you can perform to increase
                  the ranking of your website in search engines, outside of the
                  actual code or design of your BUSINESS pages. However, Link
                  building is a vital part of off page SEO but, it is not only
                  enough. Activities of Off page focus on boosting the authority
                  of your website. A few of the most essential off page SEO
                  factors that affect the authority and ranking of a website are
                  as follow:
                </p>
                <p>@ The Number of backlinks to your website.</p>
                <p>@ Quality of links pointing to your website.</p>
                <p>@ Anchor text of inbound links</p>
                <p>@ Relevancy of backlinks</p>
                <p>@ Link location on Web page</p>
              </div>
            </div>
          </Grid>
          <Grid item md={5}>
            <div className="animate__animated animate__backInRight right-main-section">
              <Card className="reactplayer">
                <CardActionArea>
                  <CardContent>
                 
                    <ReactPlayer
                      playing={true}
                      width="100%"
                      height="100%"
                      url="https://www.youtube.com/watch?v=H1uLU9h0k0k&t=68s"
                      controls={true}
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </Grid>
        </Grid>
        <div>
          <Grid container className="submenu-alignment container">
            <Grid item md={12}>
              <div className="container">
                <Card>
                  <CardActionArea>
                    <CardContent>
                      <h3 className="main-title-heading text-center headingcards">
                        Get off-page optimization service free of cost{" "}
                      </h3>
                      <div className="main-title-text p-3">
                        <p className="text-justify">
                          We at srcserviceltd providing the off page SEO service
                          without asking any extra amount, so don't miss the
                          chance to grab the services to boost the engagement of
                          your website. Just call us now, and get the best
                          services from our experts.
                        </p>
                        <p>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </Grid>
          </Grid>
          <br />
          <br />
         
        </div>
        <div>
          
        </div> */}
      </div>
    );
  }
}

export default HOC(Home);
