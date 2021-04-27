import React, { useState } from "react";

const Nav = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        class="custom-toggler navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample09"
        aria-controls="navbarsExample09"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}>
        <a class="nav-link" href="/">
          Home <span class="sr-only">(current)</span>
        </a>

        <a class="nav-link" href="/Experience">
          Experience
        </a>

        <a class="nav-link" href="/Education">
          Education
        </a>
        <a class="nav-link" href="/Projects">
          Projects
        </a>

        <a class="nav-link" href="/ContactMe">
          Contact Me
        </a>
      </div>
    </nav>
  );
};

export default Nav;
