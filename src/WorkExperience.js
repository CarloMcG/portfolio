import React from "react";
import Container from "react-bootstrap/Container";
import background from "./background.png";
import Nav from "./Nav";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function WorkExperience() {
  return (
    <Container
      fluid
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Nav />
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          color: "white",
        }}
      ></h1>
      <div class="card text-white bg-dark mb-3">
        <div class="card-body">
          <h4 class="card-title">Software Developer Intern</h4>
          <h5 class="card-subtitle mb-2 text-muted">Openjaw Technologies</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            January 2020 - April 2020
          </h6>
          <p class="card-text">
            • Developed frontend and backend software solutions as part of an
            agile team working to create an AI chatbot for use within the
            aviation industry
          </p>
          <p class="card-text">
            • Developed unit tests for Java using the Junit framework, as well
            as implementing rigorous regression testing procedures
          </p>
          <p class="card-text">
            • Participated in weekly planning meetings, and bi-weekly
            retrospective meetings to plan the future progression of the
            product, and solve problems as they appeared
          </p>
        </div>
      </div>
    </Container>
  );
}

export default WorkExperience;
