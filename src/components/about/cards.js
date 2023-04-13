import React from "react";
import Card from "react-bootstrap/Card";
import { ImStarFull } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }} className="about-text">
          Hello! My name is Chrissy Martin.
            <br />
            I am an animal care professional with a background in public speaking and psychology currently pursuing an intensive full stack certificate from the University of Washington. I am honing my skills in HTML5, CCS, Bootstrap, JavaScript, jQuery, and a bit of Python and MySQL. I plan to create and maintain websites while also developing iOS and Android apps. I am able to collaborate and work with a team while solving problems in high-stress environments. I am looking to bring my attention to detail and technical skills to a company to grow and become a valuable asset. I’m excited to leverage my skills as part of a fast-paced, quality-driven team. 
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