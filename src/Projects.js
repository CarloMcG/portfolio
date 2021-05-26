import React from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import background from "./background.png";

import Nav from "./Nav";

function Projects() {
  return (
    <Container
      fluid
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "130vh",
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
      <Row>
        <Col>
          <div
            style={{
              color: "white",
              justifyContent: "center",
              textAlign: "center",
              verticalAlign: "middle",
            }}
            class=" row align-items-center"
          >
            <div class=" col">
              <div class="card text-white bg-dark mb-3">
                <div class="card-body">
                  <h5 class="card-title">Call Rating Engine</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    Final Year Project
                  </h6>
                  <p class="card-text">
                    A Call rating engine developed as my Final Yeat Project.
                    Hosted on AWS and built using React, this application
                    provides an interface for a VoIP company to rate calls and
                    bill customers in a similar manner to traditional
                    telecommunications companies. It also provides a dashboard
                    for customers to manage their call data and expenses
                  </p>
                  <p>
                    This application is hosted on AWS using the following
                    components of the AWS Ecosystem:
                    <li>AWS Amplify (Hosting)</li>
                    <li> Amazon Cognito (User Account Management)</li>
                    <li>DynamoDB (Storage)</li>
                    <li>
                      {" "}
                      AWS AppSync (GraphQL APIs handling CRUD operations between
                      Amplify and DynamoDB)
                    </li>
                  </p>
                  <p>
                    {" "}
                    The frontend was developed using React, and implements
                    Bootstrap. Stripe was also incorporated as a payment module
                    to allow customers to pay for calls.
                  </p>
                  <p>Note: This application is still in development</p>
                  <a href="#" class="card-link">
                    Github
                  </a>
                  <a href="https://www.callratingsys.com" class="card-link">
                    Official Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Col>

        <Col>
          <div
            style={{
              color: "white",
              justifyContent: "center",
              textAlign: "center",
              verticalAlign: "middle",
            }}
            class=" row align-items-center"
          >
            <div class=" col">
              <div class="card text-white bg-dark mb-3">
                <div class="card-body">
                  <h5 class="card-title">
                    Machine Learning: Classification Algorithms
                  </h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    Final Year Machine Learning Module
                  </h6>
                  <p class="card-text">
                    Implementations of K-Nearest-Neighbour and Support Vector
                    Machine Classification algorithms, developed using the
                    scikit-learn package for Python
                  </p>
                  <p class="card-text">
                    Both of these classification algorithms aim to determine
                    whether a specific sample of beer is a stout, ale or lager,
                    depending on it's attributes
                  </p>
                  <a
                    href="https://github.com/CarloMcG/MachineLearning"
                    class="card-link"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div
            style={{
              color: "white",
              justifyContent: "center",
              textAlign: "center",
              verticalAlign: "middle",
            }}
            class=" row align-items-center"
          >
            <div class=" col">
              <div class="card text-white bg-dark mb-3">
                <div class="card-body">
                  <h5 class="card-title">C Labs</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    First Year Programming Module
                  </h6>
                  <p class="card-text">
                    A number of programs written in C throughout the course of
                    my first year Programming I Module
                  </p>
                  <li class="card-text">
                    area_calc.c Calculates the area of a given shape
                  </li>
                  <li class="card-text">
                    sales_info.c Generates information on an example sale
                  </li>
                  <li class="card-text">
                    score_analysis.c Analysises a number of given scores
                  </li>
                  <li class="card-text">
                    string_manipulation.c Manipulates a given string
                  </li>
                  <a
                    href="https://github.com/CarloMcG/C-Assignments"
                    class="card-link"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div
            style={{
              color: "white",
              justifyContent: "center",
              textAlign: "center",
              verticalAlign: "middle",
            }}
            class=" row align-items-center"
          >
            <div class=" col">
              <div class="card text-white bg-dark mb-3">
                <div class="card-body">
                  <h5 class="card-title">BT Young Scientist / SciFest 2015</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    Scifest: First Place, Technology Category
                  </h6>
                  <p class="card-text">
                    A number of Python scripts developed over the course of the
                    project.
                  </p>
                  <p class="card-text">
                    The Goal of the project was to investigate the cybersecurity
                    awareness of 12-18 year olds, specifically in terms of the
                    types of passwords they used.
                  </p>
                  <p class="card-text">
                    The specific scripts linked below compare an input (e.g. a
                    sample password) against a list of the 10k most common
                    passwords and the Oxford English Dictionary. The third
                    program gives the password a rating based on the number of
                    uppercase letters, lowercase letters and numbers it contains
                  </p>
                  <a
                    href="https://github.com/CarloMcG/BTYSE-2015"
                    class="card-link"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
