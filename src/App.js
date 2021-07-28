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

  dispatch(fetchPublicRepos())
  dispatch(fetchPersonalRepos())

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


// class App extends Component {
//   state = {
//     publicRepos: null,
//     personalRepos: null,
//   }

//   componentDidMount() {
//     fetch('https://api.github.com/repositories')
//       .then(res => res.json())
//       .then(publicRepos => {
//         this.setState({ publicRepos })
//       })

//     fetch('https://api.github.com/user/repos?access_token=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')
//       .then(res => res.json())
//       .then(personalRepos => {
//         this.setState({ personalRepos })
//       })
//   }


//   render() {
//     const { publicRepos, personalRepos } = this.state;

//     return (
//       <Provider store={store}>
//         <Router>
//           <NavigationBar />
//           <Switch>
//             <Route exact path="/">
//               <HomePage />
//             </Route>
//             <Route path="/public">
//               <PublicOverviewPage repos={publicRepos} />
//             </Route>
//             <Route path="/personal" >
//               <PersonalOverviewPage repos={personalRepos} />
//             </Route>
//             <Route path="/repos" component={RepositoryDetailPage} />
//           </Switch>
//         </Router>
//         </Provider>
//     );
//   }
// }

export default App;