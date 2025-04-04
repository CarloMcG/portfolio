import React from "react";
import { Grid, Row, Column, Heading } from "@carbon/react";
import Nav from "./Nav";
import ContactForm from "./ContactForm";

function ContactMe() {
  return (
    <div>
      <Nav />
      <ContactForm />
    </div>
  );
}

export default ContactMe;
