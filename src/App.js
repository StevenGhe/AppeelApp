import React from "react";
import NavigationBar from "./components/navigationBar/NavigationBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchPersonalRepos, fetchPublicRepos } from "./redux";

import RepositoryDetailPage from "./components/repositoryDetail/RepositoryDetailPage";
import PublicOverviewPage from "./components/OverviewPages/publicOverViewPage";
import PersonalOverviewPage from "./components/OverviewPages/personalOverviewPage";
import HomePage from "./components/OverviewPages/HomePage";

const App = () => {
  const dispatch = useDispatch();

  dispatch(fetchPublicRepos());
  dispatch(fetchPersonalRepos());

  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/public">
          <PublicOverviewPage />
        </Route>
        <Route path="/personal" >
          <PersonalOverviewPage />
        </Route>
        <Route path="/repos" component={RepositoryDetailPage} />
      </Switch>
    </Router>
  );
}

export default App;