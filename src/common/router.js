import React from 'react';
import { Router } from '@reach/router';
import { Login, Home, Repos, RepoDetail, NotFound, Homedetail, HomeByArea } from 'routes';
import { Navbar } from 'components';

function RouterConfig() {
  return (
    <>
      <Navbar />
      <Router style={{ marginLeft: '100px', marginRight: '100px' }}>
        <Login path="/login" />
        <Home path="/" />
        <Repos path="/repo" />
        <RepoDetail path="repo/:name" />
        <Homedetail path="home-detail" />
        <HomeByArea path="home-by-area" />
        <NotFound default />
      </Router>
    </>
  );
}

export default RouterConfig;
