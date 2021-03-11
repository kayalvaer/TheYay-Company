import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import tabImg1 from "./contact/tabimgs/tab-1.jpg";
import tabImg2 from "./contact/tabimgs/tab-2.jpg";
import tabImg3 from "./contact/tabimgs/tab-3.jpg";



function ContentAccordion() {
    return (
        <Accordion defaultActiveKey="0" className="d-md-none bg-gray py-4 text-dark">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    First
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                <Row className="mb-lg-5">
                                    <Col md={8}>
                                        <Tab.Content> 
                                            <p>Lorem Ipsum has withstood the test of time exceptionally well, 
                                                and in addition to passing through five centuries has also withstood 
                                                the leap to electronic typography without significant changes.
                                                Lorem Ipsum was made widely known in the 1960s with the launch 
                                                of Letraset sheets with paragraphs from Lorem Ipsum.
                                            </p>  
                                        </Tab.Content>
                                    </Col>
                                    <Col md={4} className="mb-md-5">
                                        <Tab.Content>   
                                            <img
                                                className="d-block w-30 img-fluid"
                                                src={tabImg1}
                                                alt="tab-img"
                                            />
                                           
                                        </Tab.Content>
                                    </Col>
                                    <Col className="d-flex mx-auto justify-content-center mx-auto pt-4 accordion-icons">
                                            <a href="https://share.com/">SHARE</a>
                                            <a href="https://vimeo.com/"><i class="fa fa-vimeo"></i></a>
                                            <a href="https://youtube.com/"><i class="fa fa-twitter"></i></a>
                                    </Col>
                            </Row>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    Second
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                <Row className="mb-lg-5">
                                    <Col md={8}>
                                        <Tab.Content> 
                                            <p>Lorem Ipsum has withstood the test of time exceptionally well, 
                                                and in addition to passing through five centuries has also withstood 
                                                the leap to electronic typography without significant changes.
                                                Lorem Ipsum was made widely known in the 1960s with the launch 
                                                of Letraset sheets with paragraphs from Lorem Ipsum.
                                            </p>  
                                        </Tab.Content>
                                    </Col>
                                    <Col md={4} className="mb-md-5">
                                        <Tab.Content>   
                                            <img
                                                className="d-block w-30 img-fluid"
                                                src={tabImg2}
                                                alt="tab-img"
                                            />
                                           
                                        </Tab.Content>
                                    </Col>
                                    <Col className="d-flex mx-auto justify-content-center mx-auto pt-4 accordion-icons">
                                            <a href="https://share.com/">SHARE</a>
                                            <a href="https://vimeo.com/"><i class="fa fa-vimeo"></i></a>
                                            <a href="https://youtube.com/"><i class="fa fa-twitter"></i></a>
                                    </Col>
                            </Row>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                    Third
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                <Row className="mb-lg-5">
                                    <Col md={8}>
                                        <Tab.Content> 
                                            <p>Lorem Ipsum has withstood the test of time exceptionally well, 
                                                and in addition to passing through five centuries has also withstood 
                                                the leap to electronic typography without significant changes.
                                                Lorem Ipsum was made widely known in the 1960s with the launch 
                                                of Letraset sheets with paragraphs from Lorem Ipsum.
                                            </p>  
                                        </Tab.Content>
                                    </Col>
                                    <Col md={4} className="mb-md-5">
                                        <Tab.Content>   
                                            <img
                                                className="d-block w-30 img-fluid"
                                                src={tabImg3}
                                                alt="tab-img"
                                            />
                                           
                                        </Tab.Content>
                                    </Col>
                                    <Col className="d-flex mx-auto justify-content-center mx-auto pt-3 accordion-icons">
                                            <a href="https://share.com/">SHARE</a>
                                            <a href="https://vimeo.com/"><i class="fa fa-vimeo"></i></a>
                                            <a href="https://youtube.com/"><i class="fa fa-twitter"></i></a>
                                    </Col>
                            </Row>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    
                    </Accordion>
    )
}

export default ContentAccordion
