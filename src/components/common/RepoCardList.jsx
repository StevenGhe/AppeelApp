import React, { Component } from 'react';
import List from '@material-ui/core/List';
import RepoCard from './RepoCard';
import { CircularProgress } from '@material-ui/core';

class RepoCardList extends Component {

    render() {
        const { repos } = this.props

        return (
            <List>
                {repos ? (
                    repos.map(repo => (
                        <RepoCard key={repo.node_id} repo={repo} alignItems="flex-start"></RepoCard>
                    ))
                ) : (
                    <CircularProgress />
                )}
            </List >
        )
    };
}

export default RepoCardList;