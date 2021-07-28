import React from "react";
import { Form } from "react-bootstrap";
import { CircularProgress, List } from "@material-ui/core";

import CommitCard from "./CommitCard";
import styles from './repositoryDetail.module.css'

import { useDispatch, useSelector } from "react-redux";
import { setCommitFilter } from "../../redux";

const CommitCardList = () => {
    const dispatch = useDispatch();
    const commits = useSelector(state => state.commit.commits);
    const loading = useSelector(state => state.commit.loading);
    const error = useSelector(state => state.commit.error);
    const filter = useSelector(state => state.commit.filter);

    let filteredCommits = JSON.parse(JSON.stringify(commits)); //Make copy to make sure no bugs occur

    filteredCommits = filteredCommits.filter((comm) => {
        const commitFilterLowercase = filter.toLowerCase();
        const commAuthor = comm.commit.author.name.toLowerCase();
        const commMessage = comm.commit.message.toLowerCase();

        return (commAuthor.indexOf(commitFilterLowercase) !== -1
            || commMessage.indexOf(commitFilterLowercase) !== -1);
    });

    return loading ? (
        <div className={styles.progressLoader}>
            <CircularProgress />
        </div>
    ) : error ? (
        <h2> Error: {error} </h2>
    ) : commits ? (
        <React.Fragment>
            <Form onSubmit={(event) => { event.preventDefault() }}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        className={styles.form}
                        placeholder="Filter commits"
                        onChange={(event) => dispatch(setCommitFilter(event.target.value))} />
                </Form.Group>
            </Form>
            {filteredCommits.length > 0 ? (
                <List>
                    {(
                        filteredCommits.map(commit => (
                            <CommitCard key={commit.node_id} commit={commit} alignItems="flex-start" />
                        ))
                    )}
                </List >
            ) : (
                <h2>No commit author or description matches filter.</h2>
            )}
        </React.Fragment>
    ) : (
        <h2>No commits found for this repository.</h2>
    );
}

export default CommitCardList;