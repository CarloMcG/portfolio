import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import '@carbon/styles/css/styles.min.css';
import "./theme.scss";

import AboutMe from "./AboutMe";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

import ReactGA from "react-ga4";

const TrackPageViews = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return null;
};

const App = () => {
  useEffect(() => {
    document.title = "Carlo McGinley";
    ReactGA.initialize("G-44QNPY015X"); // Your GA4 Measurement ID
  }, []);

  return (
    <Router>
      <TrackPageViews />
      <Route exact path="/" component={AboutMe} />
      <Route exact path="/Education" component={Education} />
      <Route exact path="/Experience" component={WorkExperience} />
      <Route exact path="/Projects" component={Projects} />
      <Route exact path="/ContactMe" component={ContactMe} />
    </Router>
  );
};

export default App;
