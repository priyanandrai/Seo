import React, { Component } from "react";
import "../maincontentpage/main.css";
import { Button, Container, Row, Col, Card, Form } from "react-bootstrap";
import Checkbox from "@material-ui/core/Checkbox";
// import "node_modules/video-react/dist/video-react.css"; // import css
import { Player } from "video-react";
import ReactPlayer from "react-player";

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
      url: "",
    };
  }

  handlesubmit = (e) => {
    const { name, email, url } = this.state;
    e.preventDefault();
    window.localStorage.setItem("name", name);
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("url", url);
    // alert("Locally stored data");

    if (this.state.name.trim().length < 5) {
      alert("please enter the name minimum 5 characture");
      return;
    }
    const regexex = "[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}";
    if (!this.state.email.match(regexex)) {
      alert("please enter the  email");
      return;
     }
    // else(regexex=="email"){
    //   alert("enter the valid")
    //   } 
   
    if (this.state.url.trim()=="") {
      alert("please enter the url");
      return;
    }
  };

  handlesubmission =(e) =>{
   const {url ,title ,description, keywords, } = this.state
 
  if(this.state.url==""){
    alert("please enter the url")
    return; 
  }
  if(this.state.title==""){
      alert("please enter the title")
  return;
    }
  if(this.state.description ==""){
  alert("please enter the descruption")
  return;
  }
  if(this.state.keywords==""){
    alert("please enter the keywords")
   return;
  }
  }

  render() {
    return (
      <div>
        <div style={{marginTop: "8%"}}>
          <Container className="animate__animated animate__backInLeft">
            <h1 className="hidingfirst">Choose services</h1>
            <Row>
              <Col sm={8}>
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
                    <div style={{ marginLeft: "10%" }} className="input-width">
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
                        onChange={(e) => this.setState({ url: e.target.value })}
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
                  {/* <input
                  id="inputss"
                onChange={()=> this.setState({showme : !this.state.showme})}
                  class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  /> */}
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
                        <Form.Label>URL</Form.Label>
                        <Form.Control
                          type="url"
                          placeholder="Enter url"
                          className="w-75"
                           value={this.state.url}
                           onChange={(e) => this.setState({url: e.target.value})}
                        />
                        <Form.Label>title</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter title"
                          className="w-75"
                          value={this.state.title}
                          onChange={(e) => this.setState({title: e.target.value})}
                        />
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Description"
                          className="w-75"
                          value={this.state.description}
                          onChange={(e) => this.setState({description: e.target.value
                          })}
                        />
                        <Form.Label>Keywords</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Keywords"
                          className="w-75"
                          value={this.state.keywords}
                          onChange={(e) => this.setState({keywords: e.target.value})}
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
              </Col>
              <Col sm={4}>
                <div className="cardsms">
                  <div className="animate__animated animate__backInRight ">
                    <Card
                      style={{
                        marginLeft: "-10%",
                        marginTop: "P",
                        width: "25rem",
                        height: "20rem",
                      }}
                    >
                      <ReactPlayer
                        width="100%"
                        height="100%"
                        url="https://www.youtube.com/watch?v=-b4WeJ7ujwU"
                      />

                      {/* <Card.Img variant="top" src="" />
                      <Card.Body>
                        <Card.Title className="text-info">
                          Video online
                        </Card.Title>

                        <Card.Text className="headingsss">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content. Some quick
                          example text to build on the card title and make up
                          the bulk of the card's content.
                        </Card.Text>
                        <Card.Text className="headingsss">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                      </Card.Body> */}
                    </Card>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <div className="text-center">
            <Container>
              <Row>
                <Col></Col>
                <Col sm={8}>
                  <div className="animate__animated animate__backInUp longcards">
                    <Card
                      style={{
                        width: "72.5rem",
                        height: "10rem",
                        marginLeft: "-4%",
                      }}
                    >
                      <Card.Img variant="top" src="" />
                      <Card.Body>
                        <Card.Title id="headingcards" className="text-info">
                          Get off-page optimization service free of cost{" "}
                        </Card.Title>
                        <Card.Text className="headingsss">
                          We at srcserviceltd providing the off page SEO service
                          without asking any extra amount, so don't miss the
                          chance to grab the services to boost the engagement of
                          your website. Just call us now, and get the best
                          services from our experts.
                        </Card.Text>
                        <Card.Text className="headingsss">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
                <Col></Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default Maincontentpage2;
