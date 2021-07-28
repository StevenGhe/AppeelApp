import React from "react";
import GoBackButton from "../common/GoBackButton";
import CommitCardList from "./CommitCardList";
import styles from "./repositoryDetail.module.css"

import { useDispatch } from "react-redux";
import { fetchCommits } from "../../redux";

const RepositoryDetailPage = () => {
    const repoId = window.location.pathname;
    const dispatch = useDispatch();

    dispatch(fetchCommits(repoId));

    // const commits = useSelector(state => state.commit.commits);
    // const loading = useSelector(state => state.commit.loading);
    // const error = useSelector(state => state.commit.error);
    // const filter = useSelector(state => state.commit.filter);

    // filterCommits = (commitFilter) => {
    //     let filteredCommits = this.state.allCommits

    //     filteredCommits = filteredCommits.filter((comm) => {

    //         let commitFilterLowercase = commitFilter.toLowerCase();
    //         let commAuthor = comm.commit.author.name.toLowerCase();
    //         let commMessage = comm.commit.message.toLowerCase();

    //         return (commAuthor.indexOf(commitFilterLowercase) !== -1
    //             || commMessage.indexOf(commitFilterLowercase) !== -1);
    //     })

    //     this.setState({
    //         filteredCommits
    //     })
    // }

    return (
        <div className={styles.body}>
            <div>
                <GoBackButton />
                <h1>Repository Detail page: {window.location.pathname}</h1>
            </div>

            <CommitCardList />
        </div>
    )

}

export default RepositoryDetailPage;