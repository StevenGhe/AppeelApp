import React from "react";
import GoBackButton from "../common/GoBackButton";
import CommitCardList from "./CommitCardList";
import styles from "./repositoryDetail.module.css"

import { useDispatch } from "react-redux";
import { fetchCommits } from "../../redux";

const RepositoryDetailPage = () => {
    const dispatch = useDispatch();
    dispatch(fetchCommits(window.location.pathname));

    return (
        <div className={styles.body}>
            <div>
                <GoBackButton />
                <h1>Repository Detail page: {window.location.pathname}</h1>
            </div>
            <CommitCardList />
        </div>
    );
}

export default RepositoryDetailPage;