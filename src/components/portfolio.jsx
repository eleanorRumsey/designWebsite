import React, { Component, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';  

class Portfolio extends Component { 
    render(){
        return (
            <div>
                <Container fluid className="portfolio-section">
                    <Row>
                        <Col className="portfolio-header">
                            <h1>IEEE uOttawa Branch</h1>
                            <h3>(2019 - 2020)</h3>
                        </Col>
                    <Col>
                        <img src="images/BigEngLittleEngMovieNight.png" className="portfolio-image"/>
                        <img src="images/Ciena_Fb_Banner.png" className="portfolio-image"/>
                    </Col>
                    <Col><img src="images/Ciena_Poster_.png" className="portfolio-image"/></Col>
                    <Col><img src="images/AgileWorkshop.png" className="portfolio-image"/></Col>
                    <Col><img src="images/OtisMovember.png" className="portfolio-image"/></Col>
                    </Row>
                </Container>
                <Container fluid className="portfolio-section">
                    <Row>
                        <Col className="portfolio-header">
                            <h1>Engineering Students' Society</h1>
                            <h3>(2015 - 2018)</h3>
                        </Col>
                        <Col>
                            <img src="images/EngballDodgeball.jpg" className="portfolio-image fb-header"/>
                            <img src="images/Oscars.png" className="portfolio-image fb-header"/>
                            <img src="images/UnderTheStars.png" className="portfolio-image fb-header"/>
                        </Col>
                        <Col><img src="images/UnderTheStarsPoster.png" className="portfolio-image"/></Col>
                        <Col><img src="images/MasqueradePoster.jpg" className="portfolio-image"/></Col>
                        <Col>
                            <img src="images/DustedMarch2017.png" className="portfolio-image"/>
                            <img src="images/DustedSummer.jpg" className="portfolio-image"/>
                            <img src="images/movemberdusted.png" className="portfolio-image"/>
                        </Col>
                        <Col><img src="images/handbook.png" className="portfolio-image"/></Col>
                        <Col><img src="images/otisboywhite.png" className="portfolio-image"/></Col>
                        <Col><img src="images/tremblant2.png" className="portfolio-image"/></Col>
                        <Col><img src="images/uOEC.jpg" className="portfolio-image"/></Col>
                    </Row>
                </Container>
                <Container fluid className="portfolio-section">
                    <Row>
                        <Col className="portfolio-header">
                            <h1>Barbara Pritchard, Pianist</h1>
                            <h3>(2014 - 2020)</h3>
                        </Col>
                        <Col><img src="images/Uncaged.jpg" className="portfolio-image"/></Col>
                        <Col><img src="images/Ballad_script.png" className="portfolio-image"/></Col>
                        <Col><img src="images/PlayingWithFire.png" className="portfolio-image"/></Col>
                        <Col><img src="images/Fantastic.jpg" className="portfolio-image"/></Col>
                    </Row>
                </Container>  
            </div>
        );
    }
}

export default Portfolio;