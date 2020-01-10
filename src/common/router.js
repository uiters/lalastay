import React from 'react';
import { Router } from '@reach/router';
import {
  Login,
  Home,
  Repos,
  RepoDetail,
  NotFound,
  Homedetail,
  HomeByArea,
  CompareHomestaty,
  Payment,
  Invoice,
  HomeByAreaSearch,
} from 'routes';

function RouterConfig() {
  return (
    <Router>
      <Login path="/login" />
      <Home path="/" />
      <Repos path="/repo" />
      <RepoDetail path="repo/:name" />
      <Homedetail path="home-detail" />
      <HomeByArea path="home-by-area" />
      <HomeByAreaSearch path="home-by-area-search" />
      <CompareHomestaty path="compare-homestay" />
      <Payment path="payment" />
      <Invoice path="invoice" />
      <NotFound default />
    </Router>
  );
}

export default RouterConfig;
