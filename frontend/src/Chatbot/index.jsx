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
          <Grid className=" mywebsite_container">
            <Grid item md={3} className="pl-2 pr-2 pt-2">
              <div id="draggable">
                <Card>
                  <CardActionArea>
                    <CardContent>
                      <div className="chatbot-card">Your Header color</div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </Grid>
            <Grid item md={3} className="pl-2 pr-2 pt-2">
            <div id="draggable1">
                <Card>
                  <CardActionArea>
                    <CardContent>
                      <div className="chatbot-card">hello</div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </Grid>
            <Grid item md={3} className="pl-2 pr-2 pt-2">
            <div id="draggable2">
                <Card>
                  <CardActionArea>
                    <CardContent>
                      <div className="chatbot-card">hello</div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </Grid>
            <Grid item md={3} className="pl-2 pr-2 pt-2">
            <div id="draggable3">
                <Card>
                  <CardActionArea>
                    <CardContent>
                      <div className="chatbot-card">hello</div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </Grid>
          </Grid>
          <div className="mt-4">
          <Grid className=" mywebsite_container">
            <Grid item md={3} className="pl-2 pr-2 pt-2">
              <div id="draggable4">
                <Card>
                  <CardActionArea>
                    <CardContent>
                      <div className="chatbot-card">hello</div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </Grid>
            <Grid item md={3} className="pl-2 pr-2 pt-2">
            <div id="draggable5">
                <Card>
                  <CardActionArea>
                    <CardContent>
                      <div className="chatbot-card">hello</div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </Grid>
            <Grid item md={3} className="pl-2 pr-2 pt-2">
            <div id="draggable6">
                <Card>
                  <CardActionArea>
                    <CardContent>
                      <div className="chatbot-card">hello</div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </Grid>
            <Grid item md={3} className="pl-2 pr-2 pt-2">
            <div id="draggable7">
                <Card>
                  <CardActionArea>
                    <CardContent>
                      <div className="chatbot-card">hello</div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
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
