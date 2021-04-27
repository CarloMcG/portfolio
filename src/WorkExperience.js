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
      <div
        style={{
          color: "white",

          verticalAlign: "middle",
        }}
      >
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            color: "white",
          }}
        >
          Software Developer Intern
        </h1>
        <Row>
          <Col
            style={{
              color: "white",
              justifyContent: "Left",
              textAlign: "Left",
              verticalAlign: "middle",
            }}
          >
            <h5>Openjaw Technologies</h5>
          </Col>
          <Col
            style={{
              color: "white",
              justifyContent: "right",
              textAlign: "right",
              verticalAlign: "middle",
            }}
          >
            <h5>Janurary 2020</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Ballybrit, Co. Galway</h5>
          </Col>
          <Col
            style={{
              color: "white",
              justifyContent: "right",
              textAlign: "right",
              verticalAlign: "middle",
            }}
          >
            {" "}
            <h5>April 2020</h5>
          </Col>
        </Row>
        <div
          style={{
            justifyContent: "center",
            color: "white",
          }}
        >
          <p>
            {" "}
            • Developed frontend and backend software solutions as part of an
            agile team working to create an AI chatbot for use within the
            aviation industry
          </p>
          <p>
            • Developed unit tests for Java using the Junit framework, as well
            as implementing rigorous regression testing procedures
          </p>{" "}
          <p>
            • Participated in weekly planning meetings, and bi-weekly
            retrospective meetings to plan the future progression of the
            product, and solve problems as they appeared.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default WorkExperience;
