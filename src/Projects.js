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

        width: "100vw",
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
          <h5 class="card-title">Call Rating Engine</h5>
          <h6 class="card-subtitle mb-2 text-muted">Final Year Project</h6>
          <p class="card-text">
            A Call rating engine developed as my Final Yeat Project. Hosted on
            AWS and built using React, this application provides an interface
            for a VoIP company to rate calls and bill customers in a similar
            manner to traditional telecommunications companies. It also provides
            a dashboard for customers to manage their call data and expenses
          </p>
          <a href="#" class="card-link">
            Github (Comming Soon)
          </a>
          <a href="https://www.callratingsys.com" class="card-link">
            Official Site
          </a>
        </div>
      </div>
      <div class="card text-white bg-dark mb-3">
        <div class="card-body">
          <h5 class="card-title">C Labs</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            First Year Programming Module
          </h6>
          <p class="card-text">
            A number of simple programs written in C throughout the course of my
            firstyear Programming I Module
          </p>
          <p class="card-text">
            - area_calc.c Calculates the area of a given shape
          </p>
          <p class="card-text">
            - sales_info.c Generates information on an example sale
          </p>
          <p class="card-text">
            - score_analysis.c Analysises a number of given scores
          </p>
          <p class="card-text">
            - string_manipulation.c Manipulates a given string
          </p>
          <a href="https://github.com/CarloMcG/C-Assignments" class="card-link">
            Github
          </a>
        </div>
      </div>
      <div class="card text-white bg-dark mb-3">
        <div class="card-body">
          <h5 class="card-title">BT Young Scientist / SciFest 2015</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            Scifest: First Place, Technology Category
          </h6>
          <p class="card-text">
            A few Python scripts developed over the course of the project.
          </p>
          <p class="card-text">
            The Goal of the project was to investigate the cybersecurity
            awareness of 12-18 year olds, specifically in terms of the types of
            passwords they used.
          </p>
          <p class="card-text">
            The specific scripts linked below compare an input (e.g. a sample
            password) against a list of the 10k most common passwords and the
            Oxford English Dictionary. The third program gives the password a
            rating based on the number of uppercase letters, lowercase letters
            and numbers it contains
          </p>
          <a href="https://github.com/CarloMcG/BTYSE-2015" class="card-link">
            Github
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Projects;
