import React, { Component } from "react";
import RepoCardList from "../common/RepoCardList";


class PersonalOverviewPage extends Component {
    render() {
        const { repos } = this.props;

        return (
            <React.Fragment>
                <h1>Personal Repositories Overview</h1>
                <p>Note: During my school carreer I used more often student colleagues' github.</p>
                <p>These are the public shared repositories with my contributions.</p>
                <RepoCardList repos={repos} />
            </React.Fragment>
        )
    }
}

export default PersonalOverviewPage;