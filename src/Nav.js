import React from "react";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Experience">
              Experience
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Education">
              Education
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/ContactMe">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
