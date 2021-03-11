import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import tabImg1 from "../components/contact/tabimgs/tab-1.jpg";
import tabImg2 from "../components/contact/tabimgs/tab-2.jpg";
import tabImg3 from "../components/contact/tabimgs/tab-3.jpg";



function InfoTabs() {
    return (
        <Tabs defaultActiveKey="first" id="uncontrolled-tab-example" className="TabsWrap">
                        <Tab eventKey="first" title="First">
                                <Tab.Container id="left-tabs-example">
                                    <Row>
                                        <Col>
                                            <Tab.Content className="pt-4 mb-4">   
                                                <img
                                                    className="d-block w-200px img-responsive"
                                                    src={tabImg1}
                                                    alt="tab-img"
                                                />
                                            </Tab.Content>
                                        </Col>
                                        <Col>
                                            <Tab.Content className="pt-5 mb-5 text-dark"> 
                                                <p>Lorem Ipsum has withstood the test of time exceptionally well, 
                                                    and in addition to passing through five centuries has also withstood 
                                                    the leap to electronic typography without significant changes.
                                                    Lorem Ipsum was made widely known in the 1960s with the launch 
                                                    of Letraset sheets with paragraphs from Lorem Ipsum.
                                                </p>
                                                <p className="FormIcons">
                                                    <a href="https://share.com/">SHARE</a>
                                                    <a href="https://vimeo.com/"><i class="fa fa-vimeo"></i></a>
                                                    <a href="https://youtube.com/"><i class="fa fa-twitter"></i></a>
                                                </p>  
                                            </Tab.Content>
                                        </Col>
                                    </Row>
                                </Tab.Container>
                            </Tab>

                            <Tab eventKey="second" title="Second">
                                <Tab.Container id="left-tabs-example">
                                    <Row>
                                        <Col>
                                            <Tab.Content className="pt-5 mb-5">   
                                                <img
                                                    className="d-block w-200px img-responsive"
                                                    src={tabImg2}
                                                    alt="tab-img"
                                                />
                                            </Tab.Content>
                                        </Col>
                                        <Col >
                                            <Tab.Content className="pt-5 mb-5"> 
                                                <p>Lorem Ipsum has withstood the test of time exceptionally well, 
                                                    and in addition to passing through five centuries has also withstood 
                                                    the leap to electronic typography without significant changes.
                                                    Lorem Ipsum was made widely known in the 1960s with the launch 
                                                    of Letraset sheets with paragraphs from Lorem Ipsum.
                                                </p>
                                                <p>
                                                    <a href="https://share.com/">SHARE</a>
                                                    <a href="https://vimeo.com/"><i class="fa fa-vimeo"></i></a>
                                                    <a href="https://youtube.com/"><i class="fa fa-twitter"></i></a>
                                                </p>  
                                            </Tab.Content>
                                        </Col>
                                    </Row>
                                </Tab.Container>
                            </Tab>

                             <Tab eventKey="third" title="Third">
                                <Tab.Container id="left-tabs-example">
                                    <Row>
                                        <Col>
                                            <Tab.Content className="pt-5 mb-5">   
                                                <img
                                                    className="d-block w-200px img-responsive"
                                                    src={tabImg3}
                                                    alt="tab-img"
                                                />
                                            </Tab.Content>
                                        </Col>
                                        <Col>
                                            <Tab.Content className="pt-5 mb-3"> 
                                                <p>Lorem Ipsum has withstood the test of time exceptionally well, 
                                                    and in addition to passing through five centuries has also withstood 
                                                    the leap to electronic typography without significant changes.
                                                    Lorem Ipsum was made widely known in the 1960s with the launch 
                                                    of Letraset sheets with paragraphs from Lorem Ipsum.
                                                </p>
                                                <p>
                                                    <a href="https://share.com/">SHARE</a>
                                                    <a href="https://vimeo.com/"><i class="fa fa-vimeo"></i></a>
                                                    <a href="https://youtube.com/"><i class="fa fa-twitter"></i></a>
                                                </p>  
                                            </Tab.Content>
                                        </Col>
                                    </Row>
                                </Tab.Container>
                            </Tab>
                        </Tabs>
    )
}

export default InfoTabs
