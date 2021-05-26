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
      <div
        style={{
          color: "white",
          justifyContent: "center",
          textAlign: "center",
          verticalAlign: "middle",
        }}
        class=" row align-items-center"
      >
        <div class=" col-lg-6">
          <div class="card text-white bg-dark mb-3">
            <div class="card-body">
              <h4 class="card-title">Software Developer Intern</h4>
              <h5 class="card-subtitle mb-2 text">Openjaw Technologies</h5>
              <h6 class="card-subtitle mb-2 text">January 2020 - April 2020</h6>
              <p class="card-text float-left">
                • Developed frontend web pages using React, and backend RESTful
                APIs for a customer service dashboard for use within the
                aviation industry
              </p>
              <p class="card-text">
                • Developed unit tests for Java using the Junit framework,
                automated frontend tests using Selenium Web Driver,and
                implemented rigorous regression testing procedures for both a
                frontend dahsboard and a AI chat client that implements IBM
                Watson
              </p>
              <p class="card-text">
                • Participated in weekly planning meetings, and bi-weekly
                retrospective meetings to plan the future progression of the
                product, and solve problems as they appeared
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default WorkExperience;
