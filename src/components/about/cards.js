import React from "react";
import Card from "react-bootstrap/Card";
import { ImStarFull } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hello! My name is Chrissy Martin.
            <br />
            I am an animal care professional currently enrolled in the UW Full Stack Bootcamp, in the hopes of switching careers. In my spare time, you can find me at studying at a local coffee shop or out looking for seals in the Pudget sound!
            <br />
            <br />
            Fun Facts About Chrissy!
          </p>
          <ul>
            <li className="about-activity">
              <ImStarFull /> Chrissy's favorite animal is the rhinoceros!
            </li>
            <li className="about-activity">
              <ImStarFull /> Chrissy has been bitten by a lemur named Deeglan!
            </li>
            <li className="about-activity">
              <ImStarFull /> Chrissy has a freckle on her left eyeball!
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;