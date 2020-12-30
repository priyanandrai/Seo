import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import HOC from "../components/HOC";
import Grid from "@material-ui/core/Grid";
import { Card } from "react-bootstrap";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import "../Chatbot/chatbot.css";

export class Chatbot extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        <div className="mt-4 mb-3">
        <Grid container className="three_card">
                <Grid item md={3} className="pl-2 pr-2">
                  <a className="a_tag_color">
                    <div className="boder_radious" id="draggable9">
                      <Card className="chot-web bg_color1">
                        <p className="gridfirst">Your Header color</p>
                        {/* <p className="global_rank">
                          bnmnbmbnmb   </p> */}
                        
                      </Card>{" "}
                    </div>
                  </a>
                </Grid>
                <Grid item md={3} className="pl-2 pr-2">
                  <a className="a_tag_color">
                    <div className="boder_radious" id="draggable1">
                      <Card className="chot-web  bg_color1">
                        <p className="gridfirst">Your Header color</p>
                        {/* <p className="global_rank">
                          bnmnbmbnmb   </p> */}
                        
                      </Card>{" "}
                    </div>
                  </a>
                </Grid>
                <Grid item md={3} className="pl-2 pr-2">
                  <a className="a_tag_color">
                    <div className="boder_radious" id="draggable2">
                      <Card className="chot-web  bg_color1">
                        <p className="gridfirst">Your Header color</p>
                        {/* <p className="global_rank">
                          bnmnbmbnmb   </p> */}
                        
                      </Card>{" "}
                    </div>
                  </a>
                </Grid>
                <Grid item md={3} className="pl-2 pr-2">
                  <a className="a_tag_color">
                    <div className="boder_radious" id="draggable3">
                      <Card className="chot-web  bg_color1">
                        <p className="gridfirst">Your Header color</p>
                        {/* <p className="global_rank">
                          bnmnbmbnmb   </p> */}
                        
                      </Card>{" "}
                    </div>
                  </a>
                </Grid>
          </Grid>
          <div className="mt-4">
          <Grid className=" mywebsite_container">
          <Grid item md={3} className="pl-2 pr-2">
                  <a className="a_tag_color">
                    <div className="boder_radious" id="draggable4">
                      <Card className="chot-web  bg_color1">
                        <p className="gridfirst">Your Header color</p>
                        {/* <p className="global_rank">
                          bnmnbmbnmb   </p> */}
                        
                      </Card>{" "}
                    </div>
                  </a>
                </Grid>
                <Grid item md={3} className="pl-2 pr-2">
                  <a className="a_tag_color">
                    <div className="boder_radious" id="draggable5">
                      <Card className="chot-web bg_color1">
                        <p className="gridfirst">Your Header color</p>
                        {/* <p className="global_rank">
                          bnmnbmbnmb   </p> */}
                        
                      </Card>{" "}
                    </div>
                  </a>
                </Grid>
                <Grid item md={3} className="pl-2 pr-2">
                  <a className="a_tag_color">
                    <div className="boder_radious" id="draggable6">
                      <Card className="chot-web  bg_color1">
                        <p className="gridfirst">Your Header color</p>
                        {/* <p className="global_rank">
                          bnmnbmbnmb   </p> */}
                        
                      </Card>{" "}
                    </div>
                  </a>
                </Grid>
                <Grid item md={3} className="pl-2 pr-2">
                  <a className="a_tag_color">
                    <div className="boder_radious" id="draggable7">
                      <Card className="chot-web  bg_color1">
                        <p className="gridfirst">Your Header color</p>
                        {/* <p className="global_rank">
                          bnmnbmbnmb   </p> */}
                        
                      </Card>{" "}
                    </div>
                  </a>
                </Grid>
          </Grid>
          </div>
        </div>

        <div
          id="chatbotmagic"
          clientid="12654415645452"
          titleforchatbox="ghjgjhgjhgjh "
          src="https://srcservicesltd.com/static/media/SR_logo.283440b0.PNG"
          welcomemessage="Welcome To help desk , How can i help you"
          popupbackgroundcolor="black"
          headercolor=""
          serverlabelcolor=""
          clientlabelcolor=""
        ></div>
      </div>
    );
  }
}
export default HOC(Chatbot);
