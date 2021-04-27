import React from "react";
import Container from "react-bootstrap/Container";
import background from "./background.png";
import Nav from "./Nav";
import ContactForm from "./ContactForm";
import { Twitter } from "react-feather";
import { Linkedin } from "react-feather";
import { GitHub } from "react-feather";
import { Download } from "react-feather";

function ContactMe() {
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
        <ContactForm />
      </div>
      <div
        style={{
          color: "white",
          justifyContent: "center",
          textAlign: "center",
          verticalAlign: "middle",
        }}
      >
        <div class="card text-white bg-dark mb-3">
          <div class="card-body">
            <h5 class="card-title">Social Media</h5>

            <a href="https://github.com/CarloMcG" class="card-link">
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/carlo-mcginley/"
              class="card-link"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ContactMe;
