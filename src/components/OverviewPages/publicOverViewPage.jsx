import React, { Component } from "react";
import RepoCardList from "../common/RepoCardList";


class PublicOverviewPage extends Component {
    render() {
        const { repos } = this.props;

        return (
            <React.Fragment>
                <h1>Public Repositories Overview</h1>
                <RepoCardList repos={repos} />
            </React.Fragment>
        )
    }
}

export default PublicOverviewPage;