import React, { Component } from "react";
import GoBackButton from "../common/GoBackButton";
import CommitCardList from "./CommitCardList";
import styles from "./repositoryDetail.module.css"


class RepositoryDetailPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allCommits: null,
            filteredCommits: null
        }

        this.filterCommits = this.filterCommits.bind(this);
    }


    componentDidMount() {
        const repoId = window.location.pathname;

        fetch('https://api.github.com' + repoId + '/commits?per_page=20')
            .then(res => res.json())
            .then(commits => {
                this.setState({ allCommits: commits })
                this.setState({ filteredCommits: commits }) //No filter by default
            })
    }

    filterCommits = (commitFilter) => {
        let filteredCommits = this.state.allCommits

        filteredCommits = filteredCommits.filter((comm) => {

            let commitFilterLowercase = commitFilter.toLowerCase();
            let commAuthor = comm.commit.author.name.toLowerCase();
            let commMessage = comm.commit.message.toLowerCase();

            return (commAuthor.indexOf(commitFilterLowercase) !== -1
                || commMessage.indexOf(commitFilterLowercase) !== -1);
        })

        this.setState({
            filteredCommits
        })
    }

    render() {
        const { filteredCommits } = this.state


        return (
            <React.Fragment>
                <div>
                    <GoBackButton />
                    <h1 className={styles.h1}>Repository Detail page: {window.location.pathname}</h1>
                </div>

                <CommitCardList commits={filteredCommits} onChange={this.filterCommits} />
            </React.Fragment>
        )
    }
}

export default RepositoryDetailPage;