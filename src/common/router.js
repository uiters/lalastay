import React from 'react';
import { Router } from '@reach/router';
import { Login, Home, Repos, RepoDetail, NotFound, Homedetail, HomeByArea } from 'routes';
import { Navbar } from 'components';
import { Container } from '@material-ui/core';

function RouterConfig() {
  return (
    <>
      <Navbar />
      <Container>
        <Router>
          <Login path="/login" />
          <Home path="/" />
          <Repos path="/repo" />
          <RepoDetail path="repo/:name" />
          <Homedetail path="home-detail" />
          <HomeByArea path="home-by-area" />
          <NotFound default />
        </Router>
      </Container>
    </>
  );
}

export default RouterConfig;
