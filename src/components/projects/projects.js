import React from "react";
import "./projects.css";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./cards";
import workout from "../../assets/homepage.jpg";
import brewery from "../../assets/vecteezyBeerDayBackgroundfv0621_generated.jpg";
import editor from "../../assets/b88f983b-06ae-4405-82f7-265ecc17e8d5.png";
import weather from "../../assets/weather.jpg";
import employee from "../../assets/tracking-employee-computer-activity-1600.jpg";
import team from "../../assets/team-company-profile-template.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Most Recent Projects
        </h1>
      
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={workout}
              isBlog={false}
              title="Workout Nation"
              description="In this workout tracking app, users will be prompted to sign up or log in to begin which will therefore be stored into the database; which can be recalled upon. Once signed in, users will be directed to user dashboard displaying account and user information."
              ghLink="https://github.com/chrissy-martin/Workout-Nation"
              demoLink="https://boiling-dusk-37737.herokuapp.com/ "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brewery}
              isBlog={false}
              title="US Brewery Finder"
              description="An app that lets a user find local breweries in a searched city. There is also an interactive map that shows the selected brewery's location."
              ghLink="https://github.com/chrissy-martin/US-Brewery-Finder"
              demoLink="https://chrissy-martin.github.io/US-Brewery-Finder/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={team}
              isBlog={false}
              title="Team Profile Generator"
              description="A Node.js command-line application that takesin information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person."
              ghLink="https://github.com/chrissy-martin/team-profile-generator"
              demoLink="https://drive.google.com/file/d/1VPH3yp-dKEOKVj2ZVnorHtNvozxn5g6z/view"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Dashboard"
              description="This is a 5-day weather dashboard. You can search for any city and the dashboard will pull up the current weather conditions, as well as weather conditions for the next 5 days."
              ghLink="https://github.com/chrissy-martin/weather-dashboard"
              demoLink="https://chrissy-martin.github.io/weather-dashboard/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Text Editor"
              description="A simple text editor app that can function both online and offline, with a variety of data persistence options in order to ensure that data is not lost in any scenario. The application first looks to use the data in the indexedDB to populate the editor, then if it cannot access that it will use local storage."
              ghLink="https://github.com/chrissy-martin/text-editor"
              demoLink="https://dashboard.heroku.com/apps/text-editor-chrissy-martin"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employee}
              isBlog={false}
              title="Employee Tracker"
              description="A command-line application for managing a company's employees using node, inquirer, and MySQL."
              ghLink="https://github.com/chrissy-martin/employee-tracker"
              demoLink="https://drive.google.com/file/d/1beMJX3YQoFkcD7ln3UU1QFK_KT_6D9qm/view"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;