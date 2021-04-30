import React from "react";
import Container from "react-bootstrap/Container";
import background from "./background.png";
import Nav from "./Nav";
import { useHistory } from "react-router-dom";

const AboutMe = () => {
  let history = useHistory();

  async function downloadCV() {
    history.push(
      "https://drive.google.com/file/d/1HGC1ZGmNmTFy0dWGtNQ7knZNU78uEqHX/view?usp=sharings"
    );
  }
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
              <h4 class="card-title">Hi, I'm Carlo</h4>
              <p class="card-text">
                I'm a Final Year Computer Science Student at NUI Galway
              </p>
              <p class="card-text">
                I am currently seeking job oppertunities, to allow me to expand
                my skillset after I graduate
              </p>
              <p class="card-text">
                I have a strong passion for software engineering, with
                experience in working in software development on a professional,
                academic and hobbyist level
              </p>
              <p class="card-text">Feel Free to take a look around</p>
              <a
                class="btn btn-primary"
                target="_blank"
                href="https://drive.google.com/file/d/1HGC1ZGmNmTFy0dWGtNQ7knZNU78uEqHX/view?usp=sharing"
              >
                Download my CV here
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
