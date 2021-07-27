import { CircularProgress, List } from "@material-ui/core";
import React, { Component } from "react";
import { Form } from "react-bootstrap";
import CommitCard from "./CommitCard";

import styles from './repositoryDetail.module.css'

class CommitCardList extends Component {
    constructor(props) {
        super(props);
        this.state = { filterValue: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({ filterValue: event.target.value });
        this.props.onChange(event.target.value);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        const { commits } = this.props

        return (
            <React.Fragment>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="text"
                            className={styles.form}
                            placeholder="Filter commits"
                            onChange={this.handleChange} />
                    </Form.Group>

                </Form>

                <List>
                    {commits ? (
                        commits.map(commit => (
                            <CommitCard key={commit.node_id} commit={commit} alignItems="flex-start" />
                        ))
                    ) : (
                        <CircularProgress />
                    )}
                </List >
            </React.Fragment>
        );
    }
}

export default CommitCardList;