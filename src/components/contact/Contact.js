import React from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Footerinfo from "../Footerinfo";


function Contact() {
    return (
        <>
        <wrapper>
        <Container fluid className="py-5 FormMain">
        <Container >
            <h3 className="formTitle text-primary">
                Submit your details
            </h3>
            
            <Row>
                <Col md={6} className="formArea">
                <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Website</Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text>https//</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="inlineFormInputGroup" placeholder="Username" />
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <Form.Control as="textarea" rows={6} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1" type="chectkbox" className="bg-primary mr-2 mb-4 p-3"
                    required feedbackTooltip>
                    </InputGroup.Text>
                    Allow us to sell your personal details to whoever we want
                </InputGroup.Prepend>
                </Form.Group> 

                <Button variant="dont-buy" type="submit" size="lg" block>
                    Submit
                </Button>
                </Form>
                </Col>
                
                <Col md={6} className="formRight d-flex justify-content-md-center pt-4 mb-md-5 text-dark" >
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/contact">
                            <i class="fa fa-envelope"></i>
                            <span className="ml-4 text-dark">hello@yay.com</span>
                        </Nav.Link>
                        <Nav.Link href="/contact">
                            <i class="fa fa-phone"></i>
                            <span className="ml-4 text-dark">123 456 7890</span>
                        </Nav.Link>
                        <Nav.Link href="/contact">
                            <i class="fa fa-map-marker"></i>
                            <span className="ml-4 text-dark">123 Some Street
                            Somewhere
                            Some city
                            1000
                            </span>
                        </Nav.Link>
                    </Nav>
                </Col>
            </Row>
        </Container>
        </Container>
        </wrapper>
       
        <footer className=" footer bg-white text-secondary d-flex">
        <Container>
            <Footerinfo />
        </Container>
        </footer>
        </>
    )
}

export default Contact
