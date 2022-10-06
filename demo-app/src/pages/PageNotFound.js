import React from 'react';
//import pagenotfound image
import pagenotfoundImage from '../pagenotfound.jpg';
//react router dom
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from 'react-router-dom';

const PageNotFound = () => {
  return (
    <Router>
      <Switch>
        <div className="pageNotFound">
          <h1>Oops..! 404 página não encontrada</h1>
          <p>Parece que você chegou à página errada em nosso servidor</p>
          <img
            src={pagenotfoundImage}
            height="500"
            width="500"
            alt="not found"
          />
        </div>
      </Switch>
    </Router>
  );
};

export default PageNotFound;
