import React from "react";
import { Grid, Column } from "@carbon/react";
import Nav from "./Nav";

function WorkExperience() {
  return (
    <Grid>
      <Column lg={16} md={8} sm={4} style={{ marginTop: '80px' }}>
        <Nav />
      </Column>
      <Column lg={16} md={8} sm={4} style={{ marginTop: '80px' }}>
        <Grid>
          <Column md={8} lg={7} sm={4}>
            <h1 className="bx--type-expressive-heading-01">Software Engineer</h1>
            <h2 className="bx--type-expressive-heading-01">Openjaw Technologies, Galway</h2>
            <h3 className="bx--type-expressive-heading-01">August 2021 - Present</h3>
          </Column>
        </Grid>
      </Column>
      <Column lg={16} md={8} sm={4} style={{ marginTop: '20px' }}>
        <Grid>
          <Column md={8} lg={10} sm={4}>
            <p>
              · Developed and maintained backend services and RESTful APIs as part of a booking offer and order
              management system utilised by a global chain of hotels and resorts.</p>
            <p>
              · Actively participated in daily stand-up, weekly grooming, and regular regression meetings in order to
              plan ahead and analyse the work being completed.
            </p>
            <p>
              · Enforced stringent application security protocols and ensured PCI compliance to protect sensitive customer data and maintain regulatory standards.
            </p>
          </Column>
        </Grid >
        <Column lg={16} md={8} sm={4} style={{ marginTop: '80px' }}>
          <Grid>
            <Column md={8} lg={10} sm={4}>
              <h1 className="bx--type-expressive-heading-01">Intern Software Developer</h1>
              <h2 className="bx--type-expressive-heading-01">Openjaw Technologies, Galway</h2>
              <h3 className="bx--type-expressive-heading-01">January 2020 - March 2020</h3>
            </Column>
          </Grid>
        </Column>
        <Column lg={16} md={8} sm={4} style={{ marginTop: '20px', marginBottom: '20px' }}>
          <Grid>
            <Column md={8} lg={10} sm={4}>
              <p>
                · Developed front-end web pages using React, and back-end RESTful APIs for a customer service dashboard for use within the aviation industry.</p>
              <p>
                · Created unit tests for Java using the JUnit framework, automated front-end tests using Selenium Web
                Driver, and implemented rigorous regression testing procedures for both a front-end dashboard and an
                AI chat client that implements IBM Watson.

              </p>
              <p>
                · Participated in weekly planning meetings, and bi-weekly retrospective meetings to plan the future
                progression of the product, and solve problems as they appeared.
              </p>
            </Column>
          </Grid >
        </Column >
      </Column >
    </Grid >
  );
}

export default WorkExperience;
