import React from "react";
import './home.css';
import { Container, Row, Col } from "react-bootstrap";

import myImg from "../../assets/chrissy-photo.jpg";
import Tilt from "react-parallax-tilt";

function Home() {
  return (
    <section>
          <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "50px" }}>
              CHRISSY MARTIN
            </h1>
            <h2 style={{ fontSize: "35px"}}>
              FULL STACK WEB DEVELOPER
            </h2>
            <p className="home-about-body">
             
             
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>

    </section>
  );
}

export default Home;