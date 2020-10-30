import React from "react";
import HOC from "../components/HOC";
import Card from "@material-ui/core/Card";
import { Form } from "react-bootstrap";
import ReactPlayer from "react-player";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import { getBaseUrl } from "../utils";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import "./mywebsite.css";

class Mywebsite extends React.Component {
  constructor(props) {
    super(props);
    this.MywebsiteUrl = this.MywebsiteUrl.bind(this);
    this.state = {
      url: "",
      user_id: "",
    };
  }
  componentWillMount() {
    this.setState({
      url: window.localStorage.getItem("url"),
    });
  }
  MywebsiteUrl() {
    const regesxm = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (this.state.url.trim() === "") {
      this.setState({
        snackbar: true,
        error: "please enter the URL.",
      });
      return;
    }  if (!this.state.url.match(regesxm)) {
      this.setState({
        snackbar: true,
        error: "please enter a valid  URL.",
      });
      return;
    }

    let url1 = getBaseUrl() + "/mywebsite";
    let temp = {
      url: this.state.url,
      user_id: window.localStorage.getItem("id"),
    };
    axios
      .post(url1, temp)
      .then(
        (response) => {
          this.setState({
            snackbar: true,
            error: response.data.message,
          });
          window.localStorage.setItem("url", this.state.url);
        },
        (error) => {}
      )
      .catch((e) => {});

    //
  }
  closeSnackbar = () => {
    this.setState({ snackbar: false });
  };

  render() {
    return (
      <div>
        <Grid className=" mywebsite_container">
          <Grid item md={6}>
            <div className="d-flex input_button">
            <div className="mt-5">
              {/* <Form.Label>Enter Url</Form.Label> */}
              <Form.Control
                type="name"
                placeholder="Enter url"
                id="Name"
                className="myweb_input"
                value={this.state.url}
                onChange={(e) => this.setState({ url: e.target.value })}
              />
            </div>
            <div className="mywebsite_btn mt-5 ml-5">
              <Button
                variant="contained"
                className="mywebsite_startbtn"
                onClick={this.MywebsiteUrl}
              >
                Analyse Your Website
              </Button>
            </div></div>
            {/* <div className="trafiic_count"> */}
            <div className="all_cards">
            <Grid container className="three_card">
              
              <Grid item md={4} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious">
                  <Card className="my_web bg_color1">
                   <p className="gridfirst">one</p>
                  </Card> </div>
              </a>
              </Grid>
             
              <Grid item md={4} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious">
                  <Card className="my_web bg_color2">
                  <p className="gridfirst">Two</p>
                  </Card></div>
                </a>
              </Grid>
              <Grid item md={4} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious">
                  <Card className="my_web bg_color3">
                  <p className="gridfirst">Three</p>
                  </Card></div>
               </a>
              </Grid>
            </Grid>
            <Grid container className="three_card">
              <Grid item md={4} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious">
                  <Card className="my_web bg_color4">
                  <p className="gridfirst">Four</p>
                  </Card></div>
              </a>
              </Grid>

              <Grid item md={4} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious">
                  <Card className="my_web bg_color5">
                  <p className="gridfirst">Five</p>
                  </Card></div>
               </a>
              </Grid>
              <Grid item md={4} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious">
                  <Card className="my_web bg_color6">
                  <p className="gridfirst">Six</p>
                  </Card></div>
               </a>
              </Grid>
            </Grid>
            <Grid container className="three_card mb-3">
              <Grid item md={4} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious">
                  <Card className="my_web bg_color7">
                  <p className="gridfirst">Seven</p>
                  </Card></div>
              </a>
              </Grid>

              <Grid item md={4} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious">
                  <Card className="my_web bg_color8">
                  <p className="gridfirst">Eight</p>
                  </Card></div>
               </a>
              </Grid>
              <Grid item md={4} className="ml-5 my_gridone">
              <a className="a_tag_color" href="welcome">
              <div className="boder_radious">
                  <Card className="my_web bg_color9">
                  <p className="gridfirst">Nine</p>
                  </Card>
                  </div>
               </a>
              </Grid>
            </Grid>
            </div>
          </Grid>
         
          <Grid item md={6}>
            <div className="right_iframe">
              <iframe
                className="iframe_width"
                src={this.state.url}
                //   title="W3Schools Free Online Web Tutorials"
              ></iframe>
            </div>
          </Grid>
        </Grid>
       
        <div>
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            open={this.state.snackbar}
            onClose={this.closeSnackbar}
            message={
              this.state.error === null ? this.state.message : this.state.error
            }
            action={
              <React.Fragment>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="warning"
                  onClick={this.closeSnackbar}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />
        </div>
      </div>
    );
  }
}
export default HOC(Mywebsite);
