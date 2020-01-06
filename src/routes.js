import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import ArticleList from "./containers/ArticleListView";
import ArticleDetail from "./containers/ArticleDetailView";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import GA from "./utils/GoogleAnalytics";

const BaseRouter = () => (
  <BrowserRouter>
    {GA.init() && <GA.RouteTracker />}
    <Switch>
      <Route exact path="/" component={ArticleList} />
      <Route exact path="/articles/:articleID" component={ArticleDetail} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </Switch>
  </BrowserRouter>
);

export default BaseRouter;
