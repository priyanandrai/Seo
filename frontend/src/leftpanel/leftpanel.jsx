import React from "react";
import "../maincontentpage/main.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";
import logo6 from "../images/logo6.jpg";
import logo4 from "../images/logo4.jpg";
import logo5 from "../images/logo5.png";
import logo10 from "../images/logo10.png";
import logo11 from "../images/logo11.png";
import photo from "../images/photo.jpg";
import favicon1 from "../images/favicon1.jpg";
import "./leftpanel.css";

class Leftpanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      panelshow: false,
    };
  }
  openNav = () => {
    this.setState({
      panelshow: !this.state.panelshow,
    });
  };
  render() {
    return (
      <div>
        {this.state.panelshow ? (
          <div id="mySidenav" class="sidenav">
            <Accordion className="mt-3 mb-3">
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                // aria-controls="panel1bh-content"
                // id="panel1bh-header"
              >
                <FontAwesomeIcon className="urlcolors" icon={faHome} />
                <Typography className="urlcolors homemargin urlfontsize">
                  Home
                </Typography>
              </AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <span>
                  <img className="logowidthhight" src={logo11} alt="" />
                </span>
                <Typography className="urlcolors homemargin urlfontsize">
                  Products
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
               
                <div className="d-flex">
                  <span>
                    <img className="logowidthhight" src={logo2} alt="" />
                  </span>
                  <span>
                    <a href="dashboard" className="urlcolors urlfontsize">
                      SEO Automator
                    </a>
                  </span>
                </div>
                <div className="d-flex">
                  <span>
                    <img className="logowidthhight" src={logo3} alt="" />
                  </span>
                  <span>
                    <a className="urlcolors urlfontsize" href="trafficexchange">
                      Traffic Exchange
                    </a>
                  </span>
                </div>
                <div className="d-flex">
                  <span>
                    <img className="logowidthhight" src={logo4} alt="" />
                  </span>

                  <span>
                    <a href="youtube_views" className="urlcolors urlfontsize">
                      YouTube Views 
                    </a>
                  </span>
                </div>
                {/* <div className="d-flex">
                  <span>
                    <img className="logowidthhight" src={logo6} alt="" />
                  </span>

                  <span>
                    <a href="welcome" className="urlcolors urlfontsize">
                      Facebook Views /Likes
                    </a>
                  </span>
                </div> */}
                <div className="d-flex">
                  <span>
                    <img className="logowidthhight" src={logo5} alt="" />
                  </span>

                  <span>
                    <a className="urlcolors urlfontsize" href="welcome">
                      Social Media Manager
                    </a>
                  </span>
                </div>
                
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <span>
                  <img className="logowidthhight" src={logo10} alt="" />
                </span>
                <Typography className="urlcolors homemargin urlfontsize">
                 Website Analytics
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
               
                 <div className="d-flex">
                  <span>
                    <img className="logowidthhight" src={photo} alt="" />
                  </span>
                  <span>
                    <a href="my-website" className="urlcolors urlfontsize">
                    My Website
                    </a>
                  </span>
                </div>
                
                <div className="d-flex">
                  <span>
                    <img className="logowidthhight" src={favicon1} alt="" />
                  </span>
                  <span>
                    <a className="urlcolors urlfontsize" href="my-website-seo-report">
                    My Website SEO Report
                    </a>
                  </span>
                </div>
                
                <div className="d-flex">
                  <span>
                    <img className="logowidthhight" src={favicon1} alt="" />
                  </span>

                  <span>
                    <a href="seo-six-weeks" className="urlcolors urlfontsize">
                    SEO in 6 Weeks
                    </a>
                  </span>
                </div>
                {/*
                <div className="d-flex">
                  <span>
                    <img className="logowidthhight" src={logo10} alt="" />
                  </span>

                  <span>
                    <a href="welcome" className="urlcolors urlfontsize">
                      File 4
                    </a>
                  </span>
                </div>
                <div className="d-flex">
                  <span>
                    <img className="logowidthhight" src={logo10} alt="" />
                  </span>

                  <span>
                    <a className="urlcolors urlfontsize" href="welcome">
                   File 5
                    </a>
                  </span>
                </div>
                <div className="d-flex">
                  <span>
                    <img className="logowidthhight" src={logo10} alt="" />
                  </span>

                  <span>
                    <a className="urlcolors urlfontsize" href="welcome">
                     File 6
                    </a>
                  </span>
                </div> */}
              </AccordionDetails>
            </Accordion>
          </div>
        ) : 
        null}
        <div id="leftmain">
          <span 
          onClick={this.openNav} className="cursor1">
            &#9776;
          </span>
        </div>
      </div>
    );
  }
}
export default Leftpanel;
