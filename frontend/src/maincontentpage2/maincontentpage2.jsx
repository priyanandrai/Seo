import React, { Component } from "react";
import "../maincontentpage/main.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import Checkbox from "@material-ui/core/Checkbox";
// import "node_modules/video-react/dist/video-react.css"; // import css
import { Player } from "video-react";
import ReactPlayer from "react-player";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

export class Maincontentpage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snackbar: false,
      message: "",
      name: "",
      show: false,
      showme: false,
      showto: false,
      email: "",
      Password: "",
      sbsUrl: "",
      sbmUrl: "",
      csUrl: "",
      title: "",
      description: "",
      keywords: "",
      emaill: "",
      error: null,
    };
  }

  closeSnackbar = () => {
    this.setState({ snackbar: false });
  };

  handlesubmit = (e) => {
    e.preventDefault();
    const { name, email, sbsUrl } = this.state;

    if (name.trim() == "") {
      this.setState({ snackbar: true, error: "Please enter  name." });
      return;
    }

    if (name.length < 5) {
      this.setState({
        snackbar: true,
        error: "Name must be 5 charchters long.",
      });
      return;
    }
    const regexex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.trim() == "") {
      this.setState({
        snackbar: true,
        error: "Please enter email Id.",
      });
      return;
    } else if (!email.match(regexex)) {
      this.setState({
        snackbar: true,
        error: "please enter a valid email Id.",
      });
      return;
    }

    const regesxm = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (sbsUrl == "") {
      this.setState({
        snackbar: true,
        error: "please enter the URL.",
      });
      return;
    } else if (!sbsUrl.match(regesxm)) {
      this.setState({
        snackbar: true,
        error: "please enter a valid  URL.",
      });
      return;
    }
    if (this.state.error === null) {
      this.setState({ snackbar: true, message: "Success Updated" });
    }
    window.localStorage.setItem("name", name);
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("url", sbsUrl);
  };

  handlesubmission = (e) => {
    const { sbmUrl, title, description, keywords } = this.state;

    const regesxemssm = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

    if (sbmUrl == "") {
      alert("please enter the url");
      return;
    } else if (!sbmUrl.match(regesxemssm)) {
      alert("enter the valid url");
      return;
    }
    if (title == "") {
      alert("please enter the title");
      return;
    }
    if (description == "") {
      alert("please enter the descruption");
      return;
    }
    if (keywords == "") {
      alert("please enter the keywords");
      return;
    }
  };
  handleclick = (e) => {};

  render() {
    return (
      <div>
        <Grid container style={{ marginTop: "8%" }}>
          <Grid item xs={8}>
            <Paper>
              <div className="animate__animated animate__backInLeft">
                <div style={{ marginLeft: "20%" }}>
                  <div>
                    <Checkbox
                      style={{}}
                      onChange={() => this.setState({ show: !this.state.show })}
                      color="primary"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                    <h3 style={{ marginRight: "10%" }} className="hidemie">
                      Search Engine Submission
                    </h3>
                  </div>
                  <h1>
                    {this.state.show ? (
                      <div
                        style={{ marginLeft: "10%" }}
                        className="input-width"
                      >
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="name"
                          placeholder="Enter name"
                          id="Name"
                          className="w-75"
                          onChange={(e) =>
                            this.setState({ name: e.target.value })
                          }
                        />
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          className="w-75"
                          id="Email"
                          value={this.state.email}
                          onChange={(e) =>
                            this.setState({
                              email: e.target.value,
                            })
                          }
                        />
                        <Form.Label>Enter Url</Form.Label>
                        <Form.Control
                          type="Url"
                          id="Url"
                          placeholder="Enter url"
                          className="w-75"
                          onChange={(e) =>
                            this.setState({ sbsUrl: e.target.value })
                          }
                        />
                        <Container>
                          <Button
                            style={{ marginRight: "24%", marginTop: "4%" }}
                            id="buttonn"
                            variant="contained"
                            color="secondary "
                            onClick={this.handlesubmit}
                          >
                            Start
                          </Button>
                        </Container>
                      </div>
                    ) : null}
                  </h1>

                  <div>
                    <Checkbox
                      style={{ marginTop: "5%" }}
                      onChange={() =>
                        this.setState({ showme: !this.state.showme })
                      }
                      color="primary"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                    <h3 className="hidemie">Social book marketing</h3>
                  </div>
                  <div>
                    {this.state.showme ? (
                      <h1>
                        <div
                          style={{ marginLeft: "10%" }}
                          className="input-width"
                        >
                          <Form.Label>Url</Form.Label>
                          <Form.Control
                            type="url"
                            placeholder="Enter url"
                            className="w-75"
                            value={this.state.sbmUrl}
                            onChange={(e) =>
                              this.setState({ sbmUrl: e.target.value })
                            }
                          />
                          <Form.Label>title</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter title"
                            className="w-75"
                            value={this.state.title}
                            onChange={(e) =>
                              this.setState({ title: e.target.value })
                            }
                          />
                          <Form.Label>Description</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Description"
                            className="w-75"
                            value={this.state.description}
                            onChange={(e) =>
                              this.setState({ description: e.target.value })
                            }
                          />
                          <Form.Label>Keywords</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Keywords"
                            className="w-75"
                            value={this.state.keywords}
                            onChange={(e) =>
                              this.setState({ keywords: e.target.value })
                            }
                          />
                          <Button
                            style={{ marginRight: "24%", marginTop: "4%" }}
                            id="buttonn"
                            variant="contained"
                            color="secondary "
                            onClick={this.handlesubmission}
                          >
                            Start
                          </Button>
                        </div>
                      </h1>
                    ) : null}
                  </div>
                  <div style={{ marginTop: "2%" }}>
                    <Checkbox
                      style={{ marginTop: "4%" }}
                      onChange={() =>
                        this.setState({ showto: !this.state.showto })
                      }
                      color="primary"
                      inputProps={{ "aria-label": "secondary checkbox" }}
                    />
                    <h1></h1>
                    <h3 style={{ marginTop: "-5.5%" }} className="hidemie">
                      Classified Submission
                    </h3>
                  </div>

                  <div>
                    {this.state.showto ? (
                      <h1>
                        <div
                          style={{ marginLeft: "10%" }}
                          className="input-width"
                        >
                          <TextField
                            id="standard-uncontrolled"
                            label="Uncontrolled"
                            defaultValue=""
                          />

                          {/* <TextField id="outlined-bas" label="Email" variant="outlined" /> */}
                          <Form.Control
                            type="email"
                            placeholder="Enter Email"
                            className="w-75"
                            value={this.state.emaill}
                            onChange={(e) =>
                              this.setState({ emaill: e.target.value })
                            }
                          />
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Password"
                            className="w-75"
                          />
                          <Form.Label>Title</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter title"
                            className="w-75"
                          />
                          <Form.Label>Description</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Description"
                            className="w-75"
                          />
                          <Form.Label>URL</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Url"
                            className="w-75"
                          />
                          <Form.Label>Keywords</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Keywords"
                            className="w-75"
                          />
                          <Button
                            style={{ marginRight: "24%", marginTop: "4%" }}
                            id="buttonn"
                            variant="contained"
                            color="secondary "
                            onClick={this.handleclick}
                          >
                            Start
                          </Button>
                        </div>
                      </h1>
                    ) : null}
                  </div>
                </div>
              </div>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper>
              <div className="animate__animated animate__backInRight ">
                <Card
                  style={{
                    marginLeft: "-12%",
                    marginTop: "",
                    width: "25rem",
                    height: "20rem",
                  }}
                >
                  <ReactPlayer
                    width="100%"
                    height="100%"
                    url="https://www.youtube.com/watch?v=H1uLU9h0k0k&t=68s"
                  />
                </Card>
              </div>
            </Paper>
          </Grid>
        </Grid>

        <div>
          <Grid container style={{ marginTop: "%" }}>
            <Grid item xs={2}>
              <Paper></Paper>
            </Grid>

            <Grid item xs={8}>
              <Paper style={{ width: "100%", marginLeft: "15%" }}>
                <div className="animate__animated animate__backInUp longcards">
                  <Card variant="outlined">
                    <CardContent>
                      <Typography color="textSecondary" gutterBottom>
                        Get off-page optimization service free of cost
                      </Typography>
                      <Typography variant="h5" component="h2"></Typography>
                      <Typography color="textSecondary">adjective</Typography>
                      <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={2}>
              <Paper></Paper>
            </Grid>
          </Grid>
        </div>

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

export default Maincontentpage2;
