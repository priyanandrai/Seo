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
import logo4 from "../images/logo4.jpg";
import logo5 from "../images/logo5.jpg";
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
            <Accordion className="mt-3">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <FontAwesomeIcon className="urlcolors" icon={faHome} />
                <Typography className="urlcolors homemargin urlfontsize">Home</Typography>
              </AccordionSummary>
              <AccordionDetails>
               
              </AccordionDetails>
            </Accordion>
            <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography   className="urlcolors urlfontsize">PRODUCTS</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {/* <Accordion>
                      <AccordionSummary
                      className="iconrightside"
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <img className="logowidthhight " src={logo2} />

                        <a className="urlcolors urlfontsize" href="">
                          SEO Automator
                        </a>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography></Typography>
                      </AccordionDetails>
                    </Accordion> */}
                    <div className="d-flex">
                      <span>
                        <img className="logowidthhight" src={logo2} alt="" />
                      </span>
                      <span>
                        <a href="/#"
                          className="urlcolors urlfontsize"
                         
                        >
                           SEO Automator
                        </a>
                      </span>
                    </div>
                    <div className="d-flex">
                      <span>
                        <img className="logowidthhight" src={logo3} alt="" />
                      </span>
                      <span>
                        <a
                          className="urlcolors urlfontsize"
                          href="trafficexchange"
                        >
                          Traffic Exchange
                        </a>
                      </span>
                    </div>
                    <div className="d-flex">
                      <span>
                        <img className="logowidthhight" src={logo4} alt="" />
                      </span>

                      <span>
                        <a  href="/#" className="urlcolors urlfontsize" >
                          YouTube Views
                        </a>
                      </span>
                    </div>
                    <div className="d-flex">
                      <span>
                        <img className="logowidthhight" src={logo5} alt="" />
                      </span>

                      <span>
                        <a className="urlcolors urlfontsize" href="website">
                          Social Media Manager
                        </a>
                      </span>
                    </div>

                  
                  </AccordionDetails>
                </Accordion>
          </div>
        ) : // <div id="mySidenav" class="sidenav">
        //   <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>
        //     &times;
        //   </a>
        //   <a className="urlcolors" href="#">SEO Automator</a>
        //   <a className="urlcolors" href="trafficexchange">Traffic Exchange</a>
        //   <a className="urlcolors" href="trafficexchange">YouTube Views</a>
        //   <a className="urlcolors" href="website">Social Media Manager</a>

        //   {/* <a href="#">Contact</a> */}
        // </div>
        null}
        <div id="leftmain">
          <span onClick={this.openNav} className="cursor">
            &#9776;
          </span>
        </div>
      </div>
    );
  }
}
export default Leftpanel;
