import React from "react";
import './home.css';
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/logo.jpg";
import myImg from "../../assets/chrissy-photo.jpg";
import Tilt from "react-parallax-tilt";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                HELLO!
              </h1>

              <h1 className="heading-name">
                I'M CHRISSY MARTIN
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              FULL STACK WEB DEVELOPER
            </h1>
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