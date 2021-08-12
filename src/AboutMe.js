import React from "react";
import Container from "react-bootstrap/Container";
import background from "./background.png";
import Nav from "./Nav";

function AboutMe() {
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
                I have a strong passion for software engineering, and a keen
                interest in cyber security, with experience in working in
                software development on a professional, academic and hobbyist
                level
              </p>
              <p class="card-text">Feel Free to take a look around</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AboutMe;
