import React from "react";
import Container from "react-bootstrap/Container";

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
        height: "280vh",
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
        <div class=" col-lg-8">
          <div class="card text-white bg-dark mb-3">
            <div class="card-body">
              <h5 class="card-title">Call Rating Engine</h5>
              <h6 class="card-subtitle mb-2 text-muted">Final Year Project</h6>
              <p
                class="card-text"
                style={{
                  color: "white",
                  justifyContent: "left",
                  textAlign: "left",
                  verticalAlign: "middle",
                }}
              >
                A Call rating engine developed as my Final Year Project. Hosted
                on AWS and built using React, this application provides an
                interface for a VoIP company to rate calls and bill customers in
                a similar manner to traditional telecommunications companies. It
                also provides a dashboard for customers to manage their call
                data and expenses
              </p>
              <p
                style={{
                  color: "white",
                  justifyContent: "left",
                  textAlign: "left",
                  verticalAlign: "middle",
                }}
              >
                This application is hosted on AWS using the following components
                of the AWS Ecosystem:
                <li>AWS Amplify (Hosting)</li>
                <li> Amazon Cognito (User Account Management)</li>
                <li>DynamoDB (Storage)</li>
                <li>
                  {" "}
                  AWS AppSync (GraphQL APIs handling CRUD operations between
                  Amplify and DynamoDB)
                </li>
              </p>
              <p
                style={{
                  color: "white",
                  justifyContent: "left",
                  textAlign: "left",
                  verticalAlign: "middle",
                }}
              >
                {" "}
                The frontend was developed using React, and implements
                Bootstrap. Stripe was also incorporated as a payment module to
                allow customers to pay for calls.
              </p>
              <p>Note: This application is still in development</p>
              <a
                href="https://github.com/CarloMcG/fyp-frontend"
                class="btn btn-primary btn-lg active"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://www.callratingsys.com"
                class="btn btn-primary btn-lg active"
                target="_blank"
              >
                Official Site
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          color: "white",
          justifyContent: "center",
          textAlign: "center",
          verticalAlign: "middle",
        }}
        class=" row align-items-center"
      >
        <div class=" col-lg-8">
          <div class="card text-white bg-dark mb-3">
            <div class="card-body">
              <h5 class="card-title">
                Machine Learning: Classification Algorithms
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Final Year Machine Learning Module
              </h6>
              <p>
                Implementations of K-Nearest-Neighbour and Support Vector
                Machine Classification algorithms, developed using the
                scikit-learn package for Python
              </p>
              <p class="card-text">
                Both of these classification algorithms aim to determine whether
                a specific sample of beer is a stout, ale or lager, depending on
                it's attributes
              </p>
              <a
                href="https://github.com/CarloMcG/MachineLearning"
                class="btn btn-primary btn-lg active"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          color: "white",
          justifyContent: "center",
          textAlign: "center",
          verticalAlign: "middle",
        }}
        class=" row align-items-center"
      >
        <div class=" col-lg-8">
          <div class="card text-white bg-dark mb-3">
            <div class="card-body">
              <h5 class="card-title">Multi-threaded MapReduce Function</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Final Year Distributed Systems Module
              </h6>
              <p class="card-text">
                An implementation of a MapReduce function, that selects
                individual words within a set of documents.{" "}
              </p>
              <p>
                This multithreaded function allows the user to specify the
                number of lines of text read per Map thread, and the number of
                mapped groups to be reduced per Reduce thread
              </p>

              <a
                href="https://github.com/CarloMcG/MultiThreadMapReduce"
                class="btn btn-primary btn-lg active"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          color: "white",
          justifyContent: "center",
          textAlign: "center",
          verticalAlign: "middle",
        }}
        class=" row align-items-center"
      >
        <div class=" col-lg-8">
          <div class="card text-white bg-dark mb-3">
            <div class="card-body">
              <h5 class="card-title">C Labs</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                First Year Programming Module
              </h6>
              <p
                class="card-text"
                style={{
                  color: "white",
                  justifyContent: "left",
                  textAlign: "left",
                  verticalAlign: "middle",
                }}
              >
                A number of programs written in C throughout the course of my
                first year Programming I Module
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
                </li>{" "}
              </p>
              <a
                href="https://github.com/CarloMcG/C-Assignments"
                class="btn btn-primary btn-lg active"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          color: "white",
          justifyContent: "center",
          textAlign: "center",
          verticalAlign: "middle",
        }}
        class=" row align-items-center"
      >
        <div class=" col-lg-8">
          <div class="card text-white bg-dark mb-16">
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
                awareness of 12-18 year olds, specifically in terms of the types
                of passwords they used.
              </p>
              <p class="card-text">
                The specific scripts linked below compare an input (e.g. a
                sample password) against a list of the 10k most common passwords
                and the Oxford English Dictionary. The third program gives the
                password a rating based on the number of uppercase letters,
                lowercase letters and numbers it contains
              </p>
              <a
                href="https://github.com/CarloMcG/BTYSE-2015"
                class="btn btn-primary btn-lg active"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Projects;
