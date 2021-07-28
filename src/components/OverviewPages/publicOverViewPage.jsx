import React from "react";
import RepoCardList from "../common/RepoCardList";
import styles from "./overviewPages.module.css"

import { useSelector } from "react-redux";

const PublicOverviewPage = () => {
    const repoRedux = useSelector(state => state.repository.publicRepos);

    return (
        <div className={styles.body}>
            <h1>Public Repositories Overview</h1>
            <RepoCardList repos={repoRedux} />
        </div>
    )
}

export default PublicOverviewPage;