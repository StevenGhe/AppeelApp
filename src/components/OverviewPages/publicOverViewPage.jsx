import React from "react";
import RepoCardList from "../common/RepoCardList";
import styles from "./overviewPages.module.css"

import { useSelector } from "react-redux";
import Header from "../common/Header";

const PublicOverviewPage = () => {
    const repos = useSelector(state => state.repository.publicRepos);
    const loading = useSelector(state => state.repository.publicLoading);
    const error = useSelector(state => state.repository.publicError);

    return (
        <div className={styles.body}>
            <Header text={"Public Repositories Overview"} />
            <RepoCardList repos={repos} loading={loading} error={error} />
        </div>
    )
}

export default PublicOverviewPage;