import React from 'react';
import './style.css';

import wingsuitLogo from '../../../design/homepage/wingsuit-logo.svg';

const Heading = () => (
  <div id="heading">
    <div>
      <img className="sb-title" src={wingsuitLogo} alt="Storybook Logo" />
      <h1 className="mt-4 sb-tagline">
        Build Drupal components like a REACT guy.
        <br />
        You will ♥️ your development speed!
      </h1>
    </div>
  </div>
);

export default Heading;
