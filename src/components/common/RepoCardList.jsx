import React from 'react';
import List from '@material-ui/core/List';
import RepoCard from './RepoCard.jsx';
import { CircularProgress } from '@material-ui/core';

const RepoCardList = props => {
    const repos = props.repos ? props.repos : [];
    const error = props.error;
    const loading = props.loading;

    return loading ? (
        <CircularProgress />
    ) : error ? (
        <h2>{error}</h2>
    ) : (repos && repos.length > 0) ? (
        <List>
            {(
                repos.filter(repo => repo.favorited)
                    .map(repo => (
                        <RepoCard key={repo.node_id} repo={repo}></RepoCard>
                    ))
            )}{(
                repos.filter(repo => !repo.favorited)
                    .map(repo => (
                        <RepoCard key={repo.node_id} repo={repo}></RepoCard>
                    ))
            )}
        </List >
    ) : (
        <h2>No repositories found.</h2>
    )
}


export default RepoCardList;