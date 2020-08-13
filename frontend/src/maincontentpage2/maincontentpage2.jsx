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

export class Maincontentpage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      show: false,
      showme: false,
      showto: false,
      email: "",
      Password: "",
      sbsUrl: "",
      sbmUrl: "",
      csUrl: "",
    };
  }

  handlesubmit = (e) => {
    e.preventDefault();
    const { name, email, sbsUrl } = this.state;

    window.localStorage.setItem("name", name);
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("url", sbsUrl);

    if (name.length < 5) {
      alert("please enter the name minimum 5 characture");
      return;
    }
    const regexex = "[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}";
    if (email.trim() == "") {
      alert("Please enter email.");
      return;
    } else if (!email.match(regexex)) {
      alert("please enter a valid email");
      return;
    }
    // else(regexex=="email"){
    //   alert("enter the valid")
    //   }

    if (sbsUrl == "") {
      alert("please enter the url");
      return;
    }
  };

  handlesubmission = (e) => {
    const { sbmUrl, title, description, keywords } = this.state;

    if (sbmUrl == "") {
      alert("please enter the url");
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
                            value={this.state.url}
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
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="name"
                            placeholder="Enter Email"
                            className="w-75"
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
      </div>










      //   <div>
      //     <Container>
      //       <h1 className="hidingfirst animate__animated animate__backInLeft">
      //         Choose services
      //       </h1>
      //       <div>
      //         <Row>
      //             <Col sm={8}>
      //               <div className="animate__animated animate__backInLeft">
      //                 <div>
      //                   <Checkbox
      //                     style={{}}
      //                     onChange={() =>
      //                       this.setState({ show: !this.state.show })
      //                     }
      //                     color="primary"
      //                     inputProps={{ "aria-label": "secondary checkbox" }}
      //                   />
      //                   <h3 style={{ marginRight: "10%" }} className="hidemie">
      //                     Search Engine Submission
      //                   </h3>
      //                 </div>
      //                 <h1>
      //                   {this.state.show ? (
      //                     <div
      //                       style={{ marginLeft: "10%" }}
      //                       className="input-width"
      //                     >
      //                       <Form.Label>Name</Form.Label>
      //                       <Form.Control
      //                         type="name"
      //                         placeholder="Enter name"
      //                         id="Name"
      //                         className="w-75"
      //                         onChange={(e) =>
      //                           this.setState({ name: e.target.value })
      //                         }
      //                       />
      //                       <Form.Label>Email address</Form.Label>
      //                       <Form.Control
      //                         type="email"
      //                         placeholder="Enter email"
      //                         className="w-75"
      //                         id="Email"
      //                         value={this.state.email}
      //                         onChange={(e) =>
      //                           this.setState({
      //                             email: e.target.value,
      //                           })
      //                         }
      //                       />
      //                       <Form.Label>Enter Url</Form.Label>
      //                       <Form.Control
      //                         type="Url"
      //                         id="Url"
      //                         placeholder="Enter url"
      //                         className="w-75"
      //                         onChange={(e) =>
      //                           this.setState({ sbsUrl: e.target.value })
      //                         }
      //                       />
      //                       <Container>
      //                         <Button
      //                           style={{ marginRight: "24%", marginTop: "4%" }}
      //                           id="buttonn"
      //                           variant="contained"
      //                           color="secondary "
      //                           onClick={this.handlesubmit}
      //                         >
      //                           Start
      //                         </Button>
      //                       </Container>
      //                     </div>
      //                   ) : null}
      //                 </h1>

      //                 <div>

      //                   <Checkbox
      //                     style={{ marginTop: "5%" }}
      //                     onChange={() =>
      //                       this.setState({ showme: !this.state.showme })
      //                     }
      //                     color="primary"
      //                     inputProps={{ "aria-label": "secondary checkbox" }}
      //                   />
      //                   <h3 className="hidemie">Social book marketing</h3>
      //                 </div>
      //                 <div>
      //                   {this.state.showme ? (
      //                     <h1>
      //                       <div
      //                         style={{ marginLeft: "10%" }}
      //                         className="input-width"
      //                       >
      //                         <Form.Label>URL</Form.Label>
      //                         <Form.Control
      //                           type="url"
      //                           placeholder="Enter url"
      //                           className="w-75"
      //                           value={this.state.url}
      //                           onChange={(e) =>
      //                             this.setState({ sbmUrl: e.target.value })
      //                           }
      //                         />
      //                         <Form.Label>title</Form.Label>
      //                         <Form.Control
      //                           type="text"
      //                           placeholder="Enter title"
      //                           className="w-75"
      //                           value={this.state.title}
      //                           onChange={(e) =>
      //                             this.setState({ title: e.target.value })
      //                           }
      //                         />
      //                         <Form.Label>Description</Form.Label>
      //                         <Form.Control
      //                           type="text"
      //                           placeholder="Enter Description"
      //                           className="w-75"
      //                           value={this.state.description}
      //                           onChange={(e) =>
      //                             this.setState({ description: e.target.value })
      //                           }
      //                         />
      //                         <Form.Label>Keywords</Form.Label>
      //                         <Form.Control
      //                           type="text"
      //                           placeholder="Enter Keywords"
      //                           className="w-75"
      //                           value={this.state.keywords}
      //                           onChange={(e) =>
      //                             this.setState({ keywords: e.target.value })
      //                           }
      //                         />
      //                         <Button
      //                           style={{ marginRight: "24%", marginTop: "4%" }}
      //                           id="buttonn"
      //                           variant="contained"
      //                           color="secondary "
      //                           onClick={this.handlesubmission}
      //                         >
      //                           Start
      //                         </Button>
      //                       </div>
      //                     </h1>
      //                   ) : null}
      //                 </div>
      //                 <div style={{ marginTop: "2%" }}>
      //                   <Checkbox
      //                     style={{ marginTop: "4%" }}
      //                     onChange={() =>
      //                       this.setState({ showto: !this.state.showto })
      //                     }
      //                     color="primary"
      //                     inputProps={{ "aria-label": "secondary checkbox" }}
      //                   />
      //                   <h1></h1>
      //                   <h3 style={{ marginTop: "-5.5%" }} className="hidemie">
      //                     Classified Submission
      //                   </h3>
      //                 </div>

      //                 <div>
      //                   {this.state.showto ? (
      //                     <h1>
      //                       <div
      //                         style={{ marginLeft: "10%" }}
      //                         className="input-width"
      //                       >
      //                         <Form.Label>Email</Form.Label>
      //                         <Form.Control
      //                           type="name"
      //                           placeholder="Enter Email"
      //                           className="w-75"
      //                         />
      //                         <Form.Label>Password</Form.Label>
      //                         <Form.Control
      //                           type="text"
      //                           placeholder="Enter Password"
      //                           className="w-75"
      //                         />
      //                         <Form.Label>Title</Form.Label>
      //                         <Form.Control
      //                           type="text"
      //                           placeholder="Enter title"
      //                           className="w-75"
      //                         />
      //                         <Form.Label>Description</Form.Label>
      //                         <Form.Control
      //                           type="text"
      //                           placeholder="Enter Description"
      //                           className="w-75"
      //                         />
      //                         <Form.Label>URL</Form.Label>
      //                         <Form.Control
      //                           type="text"
      //                           placeholder="Enter Url"
      //                           className="w-75"
      //                         />
      //                         <Form.Label>Keywords</Form.Label>
      //                         <Form.Control
      //                           type="text"
      //                           placeholder="Enter Keywords"
      //                           className="w-75"
      //                         />
      //                         <Button
      //                           style={{ marginRight: "24%", marginTop: "4%" }}
      //                           id="buttonn"
      //                           variant="contained"
      //                           color="secondary "
      //                         >
      //                           Start
      //                         </Button>
      //                       </div>
      //                     </h1>
      //                   ) : null}
      //                 </div>
      //               </div>
      //             </Col>

      //           <Col sm={4}>
      //             <div className="cardsms">
      //               <div className="animate__animated animate__backInRight ">
      //                 <Card
      //                   style={{
      //                     marginLeft: "-10%",
      //                     marginTop: "-8%",
      //                     width: "25rem",
      //                     height: "20rem",
      //                   }}
      //                 >
      //                   <ReactPlayer
      //                     width="100%"
      //                     height="100%"
      //                     url="https://www.youtube.com/watch?v=H1uLU9h0k0k&t=68s"
      //                   />

      //                 </Card>
      //               </div>
      //             </div>
      //           </Col>
      //         </Row>
      //       </div>
      //     </Container>

      //     <div className="text-center">
      //       <Container>
      //         <Row>
      //           <Col></Col>
      //           <Col sm={8}>
      //             <div className="animate__animated animate__backInUp longcards">
      //               <Card
      //                 style={{
      //                   width: "72.5rem",
      //                   height: "10rem",
      //                   marginLeft: "-4%",
      //                 }}
      //               >
      //                 <Card.Img variant="top" src="" />
      //                 <Card.Body>
      //                   <Card.Title id="headingcards" className="text-info">
      //                     Get off-page optimization service free of cost{" "}
      //                   </Card.Title>
      //                   <Card.Text className="headingsss">
      //                     We at srcserviceltd providing the off page SEO service
      //                     without asking any extra amount, so don't miss the
      //                     chance to grab the services to boost the engagement of
      //                     your website. Just call us now, and get the best
      //                     services from our experts.
      //                   </Card.Text>
      //                   <Card.Text className="headingsss">
      //                     Some quick example text to build on the card title and
      //                     make up the bulk of the card's content.
      //                   </Card.Text>
      //                 </Card.Body>
      //               </Card>
      //             </div>
      //           </Col>
      //           <Col></Col>
      //         </Row>
      //       </Container>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default Maincontentpage2;
