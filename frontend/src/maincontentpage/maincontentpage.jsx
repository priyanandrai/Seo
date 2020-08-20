import React from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import "../maincontentpage/main.css";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

class Maincontentpage extends React.Component {
  render() {
    return (
      <div className="mainpage-alignment">
        <Grid container className="submenu-alignment">
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
              <Card>
                <CardActionArea>
                  <CardContent>
                    <h3 className="main-title-heading">Video online</h3>
                    <div className="main-title-text">
                      <p>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content. Some quick
                        example text to build on the card title and make up the
                        bulk of the card's content.
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
        <div>
          <Grid container className="submenu-alignment">
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
          </Grid><br/><br/>
          {/* <Container>
            <Row>
              <Col></Col>
              <Col sm={8}>
                <div className="animate__animated animate__backInUp longcards">
                  <Card
                    style={{
                      width: "72.5rem",
                      height: "auto",
                      marginLeft: "-4%",
                    }}
                  >
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                      <Card.Title id="headingcards" className="texth">
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
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col></Col>
            </Row>
          </Container> */}
        </div>
      </div>
    );
  }
}
export default Maincontentpage;
