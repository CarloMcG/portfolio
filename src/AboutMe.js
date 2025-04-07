import React from "react";
import { Grid, Column, Button } from "@carbon/react";
import { LogoLinkedin, LogoGithub, Download } from '@carbon/icons-react';
import Nav from "./Nav";

function AboutMe() {
  return (
    <Grid>
      <Column lg={16} md={8} sm={4} style={{ marginTop: '80px' }}>
        <Nav />
      </Column>
      <Column lg={16} md={8} sm={4} style={{ marginTop: '80px' }}>
        <Grid>
          <Column md={8} lg={7} sm={4}>
            <h1 className="bx--type-expressive-heading-01">Hi, I'm Carlo!</h1>
          </Column>
        </Grid>
      </Column>
      <Column lg={16} md={8} sm={4} style={{ marginTop: '20px' }}>
        <Grid>
          <Column md={6} lg={8} sm={4}>
            <p className="bx--type-body-long-01">
              I'm a software engineer with a strong background in backend development and a passion for cybersecurity, I focus on creating efficient, secure, and scalable solutions. Explore my previous projects and experience to see how I can bring value to your next project
            </p>
          </Column>
          <Column md={4} lg={{ span: 4, offset: 10 }} sm={4}>
            <h3>Connect with Me</h3>
            <Grid>
              <Column>
                <a
                  href="https://www.linkedin.com/in/carlo-mcginley"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LogoLinkedin size={32} style={{ fill: 'white' }}/>
                </a>
              </Column>
              <Column>
                <a
                  href="https://github.com/carlomcg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LogoGithub size={32}  style={{ fill: 'white' }}/>
                </a>
              </Column>
            </Grid>
          </Column >
          <Column md={8} lg={{ span: 1, offset: 2 }} sm={4} style={{ marginTop: '20px'}}>
            <a href="/CV-Carlo_McGinley.pdf" download rel="noopener noreferrer">
              <Button kind="tertiary" renderIcon={Download}>
                Download my CV
              </Button>
            </a>
          </Column>
        </Grid >
      </Column >
    </Grid >
  );
}
export default AboutMe;
