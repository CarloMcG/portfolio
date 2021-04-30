import React from "react";
import Container from "react-bootstrap/Container";
import background from "./background.png";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
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
      }}
    >
      <Nav />
      <div
        style={{
          color: "white",
          justifyContent: "center",
          textAlign: "center",
          verticalAlign: "middle",
        }}
      >
        <Row>
          <Col>
            <h1></h1>
            <div class="card text-white bg-dark mb-3">
              <div class="card-body">
                <h4 class="card-title"> First Year: 47.17%</h4>
                <table class="table table-dark">
                  <thead>
                    <tr>
                      <th scope="col">Module</th>
                      <th scope="col">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Professional Skills I</td>
                      <td>61%</td>
                    </tr>
                    <tr>
                      <td>Computing Systems</td>
                      <td>42%</td>
                    </tr>
                    <tr>
                      <td>Algorithms & Information Systems</td>
                      <td>47%</td>
                    </tr>
                    <tr>
                      <td>
                        Fundamentals of Electrical & Electronic Engineering
                      </td>
                      <td>53%</td>
                    </tr>
                    <tr>
                      <td>Programming I</td>
                      <td>49%</td>
                    </tr>
                    <tr>
                      <td>Next Generation Technologies I</td>
                      <td>48%</td>
                    </tr>
                    <tr>
                      <td>Mathematics</td>
                      <td>42%</td>
                    </tr>
                    <tr>
                      <td>Introduction to Physics</td>
                      <td>44%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Col>

          <Col>
            {" "}
            <h1></h1>
            <div class="card text-white bg-dark mb-3">
              <div class="card-body">
                <h4 class="card-title"> Second Year: 41.00%</h4>

                <table class="table table-dark">
                  <thead>
                    <tr>
                      <th scope="col">Module</th>
                      <th scope="col">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Discrete Mathematics</td>
                      <td>35%</td>
                    </tr>
                    <tr>
                      <td>Software Engineering I</td>
                      <td>53%</td>
                    </tr>
                    <tr>
                      <td>Object-Oriented Programming</td>
                      <td>40%</td>
                    </tr>
                    <tr>
                      <td>Intro to Statistical Data & Probability</td>
                      <td>40%</td>
                    </tr>
                    <tr>
                      <td>Database Systems I</td>
                      <td>40%</td>
                    </tr>
                    <tr>
                      <td>Computer Systems & Organisation</td>
                      <td>35%</td>
                    </tr>
                    <tr>
                      <td>Networks & Data Communications I</td>
                      <td>36%</td>
                    </tr>
                    <tr>
                      <td>
                        Object-Oriented Programming: Data Structures &
                        Algorithms
                      </td>
                      <td>40%</td>
                    </tr>
                    <tr>
                      <td>Linear Algebra</td>
                      <td>40%</td>
                    </tr>
                    <tr>
                      <td>Introduction to Modelling</td>
                      <td>40%</td>
                    </tr>
                    <tr>
                      <td>Next Generation Technologies II</td>
                      <td>40%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <h1></h1>
            <div class="card text-white bg-dark mb-3">
              <div class="card-body">
                <h4 class="card-title"> Third Year: 54.50%</h4>
                <table class="table table-dark">
                  <thead>
                    <tr>
                      <th scope="col">Module</th>
                      <th scope="col">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Professional Skills</td>
                      <td>77%</td>
                    </tr>
                    <tr>
                      <td>Programming III</td>
                      <td>40%</td>
                    </tr>
                    <tr>
                      <td>Networks & Data Communications II</td>
                      <td>41%</td>
                    </tr>
                    <tr>
                      <td>Database Systems II</td>
                      <td>55%</td>
                    </tr>
                    <tr>
                      <td>Organisational Innovation</td>
                      <td>68%</td>
                    </tr>
                    <tr>
                      <td>Software Engineering II</td>
                      <td>82%</td>
                    </tr>
                    <tr>
                      <td>Human Computer Interaction</td>
                      <td>40%</td>
                    </tr>
                    <tr>
                      <td>Programming Paradigms</td>
                      <td>62%</td>
                    </tr>
                    <tr>
                      <td>Games Programming</td>
                      <td>40%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Col>

          <Col>
            <h1></h1>
            <div class="card text-white bg-dark mb-3">
              <div class="card-body">
                <h4 class="card-title"> Fourth Year: Predicted 2:1</h4>

                <table class="table table-dark">
                  <thead>
                    <tr>
                      <th scope="col">Module</th>
                      <th scope="col">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Advanced Professional Skills</td>
                      <td>TBC</td>
                    </tr>
                    <tr>
                      <td>Software Engineering III</td>
                      <td>TBC</td>
                    </tr>
                    <tr>
                      <td>Information Retrieval</td>
                      <td>TBC</td>
                    </tr>
                    <tr>
                      <td>Systems Modelling & Simulation</td>
                      <td>TBC</td>
                    </tr>
                    <tr>
                      <td>Machine Learning</td>
                      <td>TBC</td>
                    </tr>
                    <tr>
                      <td>Artifical Intelligence</td>
                      <td>TBC</td>
                    </tr>
                    <tr>
                      <td>Real Time Systems</td>
                      <td>TBC</td>
                    </tr>
                    <tr>
                      <td>Distributed Systems & Co-Operative Computing</td>
                      <td>TBC</td>
                    </tr>
                    <tr>
                      <td>Cryptography</td>
                      <td>TBC</td>
                    </tr>
                    <tr>
                      <td>Computer Security and Forensic Computing</td>
                      <td>TBC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Education;
