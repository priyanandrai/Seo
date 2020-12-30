import React from "react";
import HOC from "../components/HOC";
import Card from "@material-ui/core/Card";
import { Form } from "react-bootstrap";
import ReactPlayer from "react-player";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import LinearProgress from '@material-ui/core/LinearProgress';
import axios from "axios";
import { getBaseUrl } from "../utils";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import "./mywebsite.css";

class Mywebsite extends React.Component {
  constructor(props) {
    super(props);
    this.MywebsiteUrl = this.MywebsiteUrl.bind(this);
    this.getrankingdata = this.getrankingdata.bind(this);
    this.state = {
      url: "",
      user_id: "",
      fetchdata: [],
      ranking: "",
      urls: "",
      linearprogressbar:false,
      country: "",
      delta: "",
    };
  }

  getrankingdata() {
    let self = this;
    let url =
      getBaseUrl() +
      "/fetchdataforstatic?type=ranking&url=" +
      window.localStorage.getItem("url");
      // this.setState({
      //   linearprogressbar: true,
      //   message:"Your Ranking is Fetching"
      // })
    axios.get(url).then(
      (response) => {
        try {
        
          this.setState({
            ranking: response.data.ALEXA.SD[1].POPULARITY.TEXT,
            linearprogressbar:false,
          });
        } catch (error) {
          this.setState({
            ranking: "Need to calculate data ",
            linearprogressbar:false,
          });
        }
        try {
        
          this.setState({
            country: response.data.ALEXA.SD[1].COUNTRY.NAME,
          });
        } catch (error) {
          this.setState({
            country: "N/A",
          });
        }
        try {
         
          this.setState({
            delta: response.data.ALEXA.SD[1].RANK.DELTA,
          });
        } catch (error) {
          this.setState({
            delta: "N/A",
          });
        }
      },
      (error) => {}
    );
  }
  componentWillMount() {
    this.setState({
      url: window.localStorage.getItem("url"),
    });
    this.getrankingdata();
  }
  MywebsiteUrl() {
    // const regesxm = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    // if (this.state.url.trim() === "") {
    //   this.setState({
    //     snackbar: true,
    //     error: "please enter the URL.",
    //   });
    //   return;
    // }
    // if (!this.state.url.match(regesxm)) {
    //   this.setState({
    //     snackbar: true,
    //     error: "please enter a valid  URL.",
    //   });
    //   return;
    // }

    let url1 = getBaseUrl() + "/mywebsite";
    let temp = {
      url: this.state.url,
      user_id: window.localStorage.getItem("id"),
    };
    this.setState({
      linearprogressbar: true,
      message:"Please Waiting"
    })
    axios
      .post(url1, temp)
      .then(
        (response) => {
          this.setState({
            linearprogressbar: false,
            snackbar: true,
            error: response.data.message,
          });
          window.localStorage.setItem("url", this.state.url);
          this.getrankingdata();
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
              </div>
            </div>
            {/* <div className="trafiic_count"> */}

            <div className="all_cards">
              <Grid container className="three_card">
                <Grid item md={4} className="ml-5 my_gridone">
                  <a className="a_tag_color" href="welcome">
                    <div className="boder_radious" id="draggable">
                      <Card className="my_web bg_color1">
                        <p className="gridfirst">Your Global Ranking</p>
                        <p className="global_rank">
                          {this.state.ranking}   </p>
                          <p className={this.state.delta.toString(0,1)==="+"? "global_ranking1":"global_ranking"}> ({this.state.delta})</p>
                     
                      </Card>{" "}
                    </div>
                  </a>
                </Grid>

                <Grid item md={4} className="ml-5 my_gridone">
                  <a className="a_tag_color" href="welcome">
                    <div className="boder_radious" id="draggable1">
                      <Card className="my_web bg_color2">
                        <p className="gridfirst">Your Country Ranking</p>
                        <p className="global_rank">{this.state.country}</p>
                      </Card>
                    </div>
                  </a>
                </Grid>
                <Grid item md={4} className="ml-5 my_gridone">
                  <a className="a_tag_color" href="welcome">
                    <div className="boder_radious" id="draggable2">
                      <Card className="my_web bg_color3">
                        <p className="gridfirst">Three</p>
                        <p></p>
                      </Card>
                    </div>
                  </a>
                </Grid>
              </Grid>
              <Grid container className="three_card">
                <Grid item md={4} className="ml-5 my_gridone">
                  <a className="a_tag_color" href="welcome">
                    <div className="boder_radious" id="draggable3">
                      <Card className="my_web bg_color4">
                        <p className="gridfirst">Four</p>
                      </Card>
                    </div>
                  </a>
                </Grid>

                <Grid item md={4} className="ml-5 my_gridone">
                  <a className="a_tag_color" href="welcome">
                    <div className="boder_radious" id="draggable4">
                      <Card className="my_web bg_color5">
                        <p className="gridfirst">Five</p>
                      </Card>
                    </div>
                  </a>
                </Grid>
                <Grid item md={4} className="ml-5 my_gridone">
                  <a className="a_tag_color" href="welcome">
                    <div className="boder_radious" id="draggable5">
                      <Card className="my_web bg_color6">
                        <p className="gridfirst">Six</p>
                      </Card>
                    </div>
                  </a>
                </Grid>
              </Grid>
              <Grid container className="three_card mb-3">
                <Grid item md={4} className="ml-5 my_gridone">
                  <a className="a_tag_color" href="welcome">
                    <div className="boder_radious" id="draggable6">
                      <Card className="my_web bg_color7">
                        <p className="gridfirst">Seven</p>
                      </Card>
                    </div>
                  </a>
                </Grid>

                <Grid item md={4} className="ml-5 my_gridone">
                  <a className="a_tag_color" href="welcome">
                    <div className="boder_radious" id="draggable7">
                      <Card className="my_web bg_color8">
                        <p className="gridfirst">Eight</p>
                      </Card>
                    </div>
                  </a>
                </Grid>
                <Grid item md={4} className="ml-5 my_gridone">
                  <a className="a_tag_color" href="welcome">
                    <div className="boder_radious" id="draggable8">
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
        <Dialog
          // onClose={() => {
          //   this.setState({
          //     drilldown: false,
          //   });
          // }}
          open={this.state.linearprogressbar}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="linear-progress mb-4">
            <p className="ml-5 mr-5 change-profile">{this.state.message} </p>
            {this.state.linearprogressbar && (
              <LinearProgress  size={68} className="ml-5 mr-5 progress-hight" />
            )}
          </div>
        </Dialog>
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
