import React from "react";
import Container from "react-bootstrap/Container";
import background from "./background.png";
import Nav from "./Nav";
function Education() {
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
      >
        Education
      </h1>
    </Container>
  );
}

export default Education;
