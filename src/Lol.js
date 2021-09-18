import React from "react";
import Container from "react-bootstrap/Container";
import background from "./background.png";
import Nav from "./Nav";

function Lol() {
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
      <h1></h1>4{" "}
      <a
        class="btn btn-primary btn-lg active"
        target="_blank"
        href="https://drive.google.com/file/d/1gKWd7B-RtKQRn3Ktqw6gchOYznZa5Ick/view?usp=sharing"
      >
        Download here
      </a>
    </Container>
  );
}

export default Lol;
