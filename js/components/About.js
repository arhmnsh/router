import React from 'react';
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

let About = React.createClass({ 

  render() {
    return(
      <div>
        <h2>About</h2>
        <Link to="company">Company</Link>
      </div>
      );
  }
});

export default About; 