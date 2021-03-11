import React from 'react'
import Col from 'react-bootstrap/Col';
import { Container, CardDeck } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import newsimg1 from "../news/newsimgs/news-1.jpg";
import newsimg2 from "../news/newsimgs/news-2.jpg";
import newsimg3 from "../news/newsimgs/news-3.jpg";
import newsimg4 from "../news/newsimgs/news-4.jpg";
import newsimg5 from "../news/newsimgs/news-5.jpg";
import newsimg6 from "../news/newsimgs/news-6.jpg";
import newsimg7 from "../news/newsimgs/news-7.jpg";
import newsimg8 from "../news/newsimgs/news-8.jpg";
import Footerinfo from "../Footerinfo";


function News() {
    return (
        <>
        <div className="newscards bg-info pb-5">
        <Container>
            <h3 className="pl-3 pt-4 pb-4 text-primary">
                News
            </h3>
            <Pagination className="pl-3 pb-4">
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
            </Pagination>    
        </Container>
        
        <Container> 
        <CardDeck className="d-flex flex-wrap justify-content-around mb-2 px-0">
            <Col xs={12} md={6} lg={3}> 
                <Card className="border-light shadow mb-5">
                    <Card.Img variant="top" src={newsimg1}  />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                                <Button variant="primary" className="btn_news" size="md" block>more</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={6} lg={3}> 
                <Card className="border-light shadow mb-5 rounded-lg">
                    <Card.Img variant="top" src={newsimg2} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional
                                        content.{' '}
                                </Card.Text>
                                <Button variant="primary" className="btn_news" size="md" block>more</Button>
                        </Card.Body>
                </Card>
           </Col>
           <Col xs={12} md={6} lg={3}> 
           <Card className="border-light shadow mb-5 rounded-lg">
                <Card.Img variant="top" src={newsimg3} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    <Button variant="primary" className="btn_news" size="md" block>more</Button>
                    </Card.Body>
            </Card>
           </Col>
           <Col xs={12} md={6} lg={3}> 
           <Card className="border-light shadow mb-5 rounded-lg">
                <Card.Img variant="top" src={newsimg4} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    <Button variant="primary" className="btn_news" size="md" block>more</Button>
                    </Card.Body>
            </Card>
           </Col>
           <Col xs={12} md={6} lg={3}> 
           <Card className="border-light shadow mb-5 rounded-lg">
                <Card.Img variant="top" src={newsimg5} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    <Button variant="primary" className="btn_news" size="md" block>more</Button>
                    </Card.Body>
            </Card>
           </Col>
           <Col xs={12} md={6} lg={3}> 
           <Card className="border-light shadow mb-5 rounded-lg">
                <Card.Img variant="top" src={newsimg6} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    <Button variant="primary" className="btn_news" size="md" block>more</Button>
                    </Card.Body>
            </Card>
           </Col>
           <Col xs={12} md={6} lg={3}> 
           <Card className="border-light shadow mb-5 rounded-lg">
                <Card.Img variant="top" src={newsimg7} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    <Button variant="primary" className="btn_news" size="md" block>more</Button>
                    </Card.Body>
            </Card>
           </Col>
           <Col xs={12} md={6} lg={3}>
           <Card className="border-light shadow mb-5 rounded-lg">
                <Card.Img variant="top" src={newsimg8} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                            <Button variant="more-btn" className="btn_news" size="md" block>more</Button>
                    </Card.Body>
            </Card>
           </Col>
        </CardDeck>
        </Container> 
        <Container>
            <Pagination className="pl-3">
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
            </Pagination>
        </Container>
        </div>

        <footer className="footer bg-white text-secondary d-flex">
            <Container>
                <Footerinfo />
            </Container>
        </footer>
        </>
    )
}

export default News
      
             
