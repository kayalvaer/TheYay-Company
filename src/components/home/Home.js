import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import InfoTabs from "../InfoTabs";
import ContentAccordion from "../ContentAccordion";
import Footerinfo from "../Footerinfo";
import JumbotronInfo from "../JumbotronInfo";
import CarouselInfo from "../CarouselInfo";



function Home() {
    return (
        <>
            <Container fluid className="heroImgs">
                <CarouselInfo />
            </Container>

            <Container fluid className="hero" > 
                <Container>
                   <JumbotronInfo />
            </Container>
            <Container fluid>
                <Container>
                    <Col md={12} className="tab_Acc">
                            <ContentAccordion />
                    
                        <div className="d-none d-md-block d-lg-block">
                            <InfoTabs />   
                        </div>
                    </Col>
                </Container>
            </Container>
           </Container>

           <footer className="footer bg-white text-secondary d-flex">
                <Container>
                    <Footerinfo />
                </Container>
            </footer>

        </>
    )
}

export default Home
