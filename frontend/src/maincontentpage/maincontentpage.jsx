import React from "react";
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import '../maincontentpage/main.css';
class Maincontentpage extends React.Component {
    render() {
        return (
            <div style={{marginTop:'5%'}}>
                <div >
                       <Row>
                            <Col sm={9}></Col>
                            <Col sm={3}>
                            <div className="mt">   
                                {/* <Button style={{ marginLeft:'70%',  backgroundColor: '#065893', marginTop: '6%' }} variant="primary">LogIn</Button>
                                <Button id="buttont" style={{ float:'right',  backgroundColor: '#065893',  marginTop: '6%' }} variant="primary">Register</Button> */}

                             </div>
                            </Col>
                        </Row>
                
                    {/* <Button style={{float: 'right', backgroundColor:'#065893', marginLeft: }} variant="primary">Sign</Button>
           <Button style={{float: 'right', backgroundColor:'#065893'}}  variant="primary">Register</Button> */}
                </div>

                <Container className="mt-1" >
                    <Row>
                        <Col sm={6}>
                            <div className="animate__animated animate__backInLeft animate__delay-10s">
                                <div className="flote-right" style={{  width: '35rem', height: '30rem', marginTop: '-3%' , marginLeft: '-10%'}}>
                                    <Card.Img variant="top" src="" />
                                    <Card.Body>
                                        <Card.Title  id="headinfg"> What does mean by Off-Page Optimization ?  </Card.Title>
                                        <Card.Text className="headingsss">
                                        Off-page SEO refers to activities you can perform to increase the ranking of your website in search engines, outside of the 
                                        actual code or design of your BUSINESS pages. However, Link building is a vital part of off page SEO but, it is not only enough.
                                         Activities of Off page focus on boosting the authority of your website. A few of the most essential off page SEO factors that affect 
                                         the authority and ranking of a website are as follow:
                                     </Card.Text>
                                        <Card.Text className="headingsss" >
                                        @ The Number of backlinks to your website.
                                         </Card.Text>
                                         <Card.Text className="headingsss">
                                         @ Quality of links pointing to your website.

                                         </Card.Text>
                                         <Card.Text className="headingsss">
                                         @ Anchor text of inbound links

                                         </Card.Text>
                                         <Card.Text className="headingsss">
                                         @ Relevancy of backlinks

                                         </Card.Text>
                                         <Card.Text className="headingsss">
                                         @ Link location on Web page

                                         </Card.Text>
                                        
                                        
                                        {/* <Button variant="primary">Go somewhere</Button> */}
                                    </Card.Body>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6}>
                        
                          <div className="cardsms">
                               
                               <div className="animate__animated animate__backInRight ">      
                                   <Card style={{ marginLeft:'5%', marginTop:'5%', width: '25rem', height: '20rem'}}>
                                    <Card.Img variant="top" src="" />
                                    <Card.Body>
                                        <Card.Title className="text-info">Video online</Card.Title>
                                        <Card.Text className="headingsss">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                     </Card.Text>
                                        <Card.Text className="headingsss">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                         </Card.Text>
                                        {/* <Button variant="primary">Go somewhere</Button> */}
                                    </Card.Body>
                                </Card>
                                </div>

                                
                            </div>
                        </Col>
                    </Row>
                </Container>

                <div className="text-center">
                <Container>
  <Row>
  <Col>
   </Col>
    <Col sm={8}>
        <div className="animate__animated animate__backInUp longcards">
        <Card style={{  width: '72.5rem', height: '10rem', marginLeft:'-4%'}}>
                                    <Card.Img variant="top" src="" />
                                    <Card.Body>
                                        <Card.Title id="headingcards" className="text-info">Get off-page optimization service free of cost  </Card.Title>
                                        <Card.Text className="headingsss">
                                        We at srcserviceltd providing the off page SEO service without asking any extra amount, so don't miss the chance to grab the services to boost the engagement of your website. Just call us now, and get the best services from our experts. 
                                     </Card.Text>
                                        <Card.Text className="headingsss">
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                         </Card.Text>
                                        {/* <Button variant="primary">Go somewhere</Button> */}
                                    </Card.Body>
                                </Card>
        </div>
    </Col>
    <Col>
        </Col>
  </Row>
  </Container>
    

           
                </div>



            </div>

        )
    }
}
export default Maincontentpage;
