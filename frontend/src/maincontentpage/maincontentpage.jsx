import React from "react";
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import '../maincontentpage/main.css';
class Maincontentpage extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Container>
                        <Row>
                            <Col sm={9}></Col>
                            <Col>
                            <div>   
                                <Button id="buttont" style={{ float: 'right',  backgroundColor: '#065893',  marginTop: '6%' }} variant="primary">SignUp</Button>
                                <Button style={{ backgroundColor: '#065893', marginTop: '6%' }} variant="primary">Register</Button></div>
                            </Col>
                        </Row>
                    </Container>
                    {/* <Button style={{float: 'right', backgroundColor:'#065893', marginLeft: }} variant="primary">Sign</Button>
           <Button style={{float: 'right', backgroundColor:'#065893'}}  variant="primary">Register</Button> */}
                </div>

                <Container>
                    <Row>
                        <Col sm={6}>
                            <div className="cardfss">
                                <Card style={{ marginTop: '75%', width: '25rem', height: '20rem', marginLeft: '-100%'}}>
                                    <Card.Img variant="top" src="" />
                                    <Card.Body>
                                        <Card.Title> What does mean by Off-Page Optimization  </Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                     </Card.Text>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                         </Card.Text>
                                        {/* <Button variant="primary">Go somewhere</Button> */}
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="cardsm">
                          <div className="cardmfrt">
                               
                               <div className="cardsright">      
                                   <Card style={{ marginTop: '10%', width: '25rem', height: '20rem'}}>
                                    <Card.Img variant="top" src="" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                     </Card.Text>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                         </Card.Text>
                                        {/* <Button variant="primary">Go somewhere</Button> */}
                                    </Card.Body>
                                </Card>
                                </div>

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
    <Col sm={6}>
        <div className="">
        <Card style={{  width: '53rem', height: '10rem', marginTop: "50%"   }}>
                                    <Card.Img variant="top" src="" />
                                    <Card.Body>
                                        <Card.Title>3 Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                     </Card.Text>
                                        <Card.Text>
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
