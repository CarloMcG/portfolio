import React from "react";
import Container from "react-bootstrap/Container";
import background from "./background.png";
import Nav from "./Nav";
import pdf from "./CV-CarloMcGinley.pdf";

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
      >
        <h1>Hi! I'm Carlo</h1>
        <p>I am a Final Year Computer Science Student at NUI Galway</p>
        <p>
          {" "}
          I am currently seeking job oppertunities, to allow me to expand my
          skillset after I graduate
        </p>
        <p>
          I have a strong passion for software engineering, with experience in
          working in software development on a professional, academic and
          hobbyist level
        </p>
        <p> Feel Free to take a look around</p>
      </div>
    </Container>
  );
}

export default AboutMe;
