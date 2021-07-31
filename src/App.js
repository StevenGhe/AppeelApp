import React, { Fragment } from "react";
import NavigationBar from "./components/navigationBar/NavigationBar";
import { Switch, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchPersonalRepos, fetchPublicRepos } from "./redux";

import RepositoryDetailPage from "./components/repositoryDetail/RepositoryDetailPage";
import PublicOverviewPage from "./components/OverviewPages/PublicOverViewPage";
import PersonalOverviewPage from "./components/OverviewPages/PersonalOverviewPage";
import HomePage from "./components/OverviewPages/HomePage";
import NotFoundPage from "./components/OverviewPages/NotFoundPage";

const App = () => {
  const dispatch = useDispatch();

  dispatch(fetchPublicRepos());
  dispatch(fetchPersonalRepos());

  return (
    <Fragment>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/public" component={PublicOverviewPage} />
        <Route exact path="/personal" component={PersonalOverviewPage} />
        <Route path="/repos/:repoId" component={RepositoryDetailPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Fragment>
  );
}

export default App;