import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/logo.jpg";
import Particle from "../particle";
import Intro from "./home-intro";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
      <Particle />
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
                <Type />
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
      <Intro />
    </section>
  );
}

export default Home;