import React from "react";
import RepoCardList from "../common/RepoCardList";
import styles from "./overviewPages.module.css"

import { useSelector } from "react-redux";

const PublicOverviewPage = () => {
    const repos = useSelector(state => state.repository.publicRepos);
    const loading = useSelector(state => state.repository.publicLoading);
    const error = useSelector(state => state.repository.publicError);

    return (
        <div className={styles.body}>
            <h1>Public Repositories Overview</h1>
            <RepoCardList repos={repos} loading={loading} error={error} />
        </div>
    )
}

export default PublicOverviewPage;