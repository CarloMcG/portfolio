import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AboutMe from "./AboutMe";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

function App() {
  return (
    <Router>
      <Route exact path="/" component={AboutMe} />
      <Route exact path="/Education" component={Education} />
      <Route exact path="/Experience" component={WorkExperience} />
      <Route exact path="/Projects" component={Projects} />
      <Route exact path="/ContactMe" component={ContactMe} />
    </Router>
  );
}

export default App;
