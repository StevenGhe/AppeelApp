import React from "react";
import RepoCardList from "../common/RepoCardList";
import styles from "./overviewPages.module.css"

import { useSelector } from "react-redux";

const PersonalOverviewPage = () => {
    const repos = useSelector(state => state.repository.personalRepos);
    const loading = useSelector(state => state.repository.personalLoading);
    const error = useSelector(state => state.repository.personalError);

    return (
        <div className={styles.body}>
            <h1>Personal Repositories Overview</h1>
            <p>Note: During my school carreer I used more often student colleagues' github.</p>
            <p>These are the public shared repositories with my contributions.</p>
            <RepoCardList repos={repos} loading={loading} error={error} />
        </div>
    )
}

export default PersonalOverviewPage;