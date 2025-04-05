import React from "react";
import { Grid, Column, Tag, Button } from "@carbon/react";
import { LogoGithub, Http } from '@carbon/icons-react';
import Nav from "./Nav";

function Projects() {
  return (
    <Grid>
      <Column lg={16} md={8} sm={4} style={{ marginTop: '80px' }}>
        <Nav />
      </Column>

      <Column lg={16} md={8} sm={4} style={{ marginTop: '80px' }}>
        <Grid>
          <Column md={8} lg={8} sm={4}>
            <h1 className="bx--type-expressive-heading-01">Utilising a Fine-Tuned GPT-3 model as a novel approach to detect phishing emails</h1>
            <Tag className="some-class" type="white">
              {'Python'}
            </Tag>
          </Column>
        </Grid>
      </Column>
      <Column lg={16} md={8} sm={4} style={{ marginTop: '20px' }}>
        <Grid>
          <Column md={8} lg={10} sm={4}>
            <p className="bx--type-body-long-01">
              Team-based research project undertaken as part of my postgraduate degree. This project involved
              training a GPT-3 algorithm using a sample set of spam and non-spam emails in order to allow it to
              accurately identify phishing emails. My personal contribution consisted of researching traditional email
              classification solutions, and the limitations that they pose.
            </p>
          </Column>
        </Grid >
      </Column >
      <Column lg={16} md={8} sm={4} style={{ marginTop: '80px' }}>
        <Grid>
          <Column md={8} lg={8} sm={4}>
            <h1 className="bx--type-expressive-heading-01">Call Rating Engine</h1>
            <Tag className="some-class" type="white">
              {'React'}
            </Tag>
            <Tag className="some-class" type="white">
              {'AWS'}
            </Tag>

            <Tag className="some-class" type="white">
              {'JavaScript'}
            </Tag>
          </Column>
          <Column md={8} lg={8} sm={4}>
            < Button kind="tertiary" renderIcon={LogoGithub} href="https://github.com/CarloMcG/fyp-frontend" target="_blank" rel="noopener noreferrer">Github</Button>
            < Button kind="tertiary" renderIcon={Http} href="https://www.callratingsys.com/" target="_blank" rel="noopener noreferrer">Website</Button>
          </Column>
        </Grid>
      </Column>
      <Column lg={16} md={8} sm={4} style={{ marginTop: '20px' }}>
        <Grid>
          <Column md={8} lg={10} sm={4}>
            <p className="bx--type-body-long-01">
              A Call rating engine developed as my Final Year Project while pursuing my undergraduate degree.
              Hosted using AWS and built using React, this application provides an interface for a VoIP company to
              rate calls and bill customers in a similar manner to traditional telecommunications companies. It also
              provides a dashboard for customers to manage their call data and expenses, and implements Paypal as
              a payment module.
            </p>
          </Column>
        </Grid >
      </Column >

      {/* Content Below */}
      <Column lg={16} md={8} sm={4} style={{ marginTop: '80px' }}>
        <Grid>
          {/* Main Title and Image side by side */}
          <Column md={8} lg={8} sm={4}>
            <h1 className="bx--type-expressive-heading-01">Machine Learning: Classification Algorithms</h1>
            <Tag className="some-class" type="white">
              {'Python'}
            </Tag>
          </Column>
          <Column md={8} lg={8} sm={4}>
            < Button kind="tertiary" renderIcon={LogoGithub} href="https://github.com/CarloMcG/MachineLearning" target="_blank" rel="noopener noreferrer">Github</Button>
          </Column>
        </Grid>
      </Column>
      <Column lg={16} md={8} sm={4} style={{ marginTop: '20px' }}>
        <Grid>
          <Column md={8} lg={10} sm={4}>
            <p className="bx--type-body-long-01">
              Implementations of K-Nearest-Neighbour and Support Vector Machine Classification algorithms, developed using the scikit-learn package for Python

              Both of these classification algorithms aim to determine whether a specific sample of beer is a stout, ale or lager, depending on it's attributes.
            </p>
          </Column>
        </Grid >
      </Column >

      <Column lg={16} md={8} sm={4} style={{ marginTop: '80px' }}>
        <Grid>
          <Column md={8} lg={8} sm={4}>
            <h1 className="bx--type-expressive-heading-01">Multi-threaded MapReduce Function</h1>
            <Tag className="some-class" type="white">
              {'Java'}
            </Tag>
          </Column>
          <Column md={8} lg={8} sm={4}>
            < Button kind="tertiary" renderIcon={LogoGithub} href="https://github.com/CarloMcG/MultiThreadMapReduce" target="_blank" rel="noopener noreferrer">Github</Button>
          </Column>
        </Grid>
      </Column>

      <Column lg={16} md={8} sm={4} style={{ marginTop: '20px' }}>
        <Grid>
          <Column md={8} lg={10} sm={4}>
            <p className="bx--type-body-long-01">
              An implementation of a MapReduce function, that selects individual words within a set of documents.

              This multithreaded function allows the user to specify the number of lines of text read per Map thread, and the number of mapped groups to be reduced per Reduce thread. </p>
          </Column>
        </Grid >
      </Column >

      <Column lg={16} md={8} sm={4} style={{ marginTop: '80px' }}>
        <Grid>
          <Column md={8} lg={8} sm={4}>
            <h1 className="bx--type-expressive-heading-01">C Labs</h1>
            <Tag className="some-class" type="white">
              {'C'}
            </Tag>
          </Column>
          <Column md={8} lg={8} sm={4}>
            < Button kind="tertiary" renderIcon={LogoGithub} href="https://github.com/CarloMcG/C-Assignments" target="_blank" rel="noopener noreferrer">Github</Button>
          </Column>
        </Grid>
      </Column>
      <Column lg={16} md={8} sm={4} style={{ marginTop: '20px' }}>
        <Grid>
          <Column md={8} lg={10} sm={4}>
            <p className="bx--type-body-long-01">
              A number of programs written in C throughout the course of my first year Programming I Module</p>
            <p> - area_calc.c Calculates the area of a given shape</p>
            <p> - sales_info.c Generates information on an example sale</p>
            <p> - score_analysis.c Analysises a number of given scores</p>
            <p> - string_manipulation.c Manipulates a given string</p>
          </Column>
        </Grid >
      </Column >

      <Column lg={16} md={8} sm={4} style={{ marginTop: '80px' }}>
        <Grid>
          <Column md={8} lg={8} sm={4}>
            <h1 className="bx--type-expressive-heading-01">BT Young Scientist / SciFest 2015</h1>
            <Tag className="some-class" type="white">
              {'Python'}
            </Tag>
          </Column>
          <Column md={8} lg={8} sm={4}>
            < Button kind="tertiary" renderIcon={LogoGithub} href="https://github.com/CarloMcG/BTYSE-2015" target="_blank" rel="noopener noreferrer">Github</Button>
          </Column>
        </Grid>
      </Column>
      <Column lg={16} md={8} sm={4} style={{ marginTop: '20px', marginBottom: '20px' }}>
        <Grid>
          <Column md={8} lg={10} sm={4}>
            <p className="bx--type-body-long-01">
              A number of Python scripts developed over the course of the project.</p>
            <p> The Goal of the project was to investigate the cybersecurity awareness of 12-18 year olds, specifically in terms of the types of passwords they used.</p>
            <p> The scripts linked below compare an input (e.g. a sample password) against a list of the 10k most common passwords and the Oxford English Dictionary. The third program gives the password a rating based on the number of uppercase letters, lowercase letters and numbers it contains</p>
          </Column>
        </Grid >
      </Column >
    </Grid >
  );
}

export default Projects;
