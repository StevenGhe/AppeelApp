import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from "@material-ui/core";
import React, { Component } from "react";

class CommitCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            commitName: props.commit.commit.name,
            commitMessage: props.commit.commit.message,
            commitAuthor: props.commit.commit.author.name,
            ownerProfilePicture: props.commit.author ? props.commit.author.avatar_url : null
        }
    }

    render() {
        const { commitName, commitMessage, commitAuthor, ownerProfilePicture } = this.state;

        return (
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={"Profile picture" + commitAuthor} src={ownerProfilePicture} />
                </ListItemAvatar>
                <ListItemText
                    primary={commitName}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                {commitAuthor}
                            </Typography>
                            {commitMessage}
                        </React.Fragment>
                    }
                />
            </ListItem>);
    }
}

export default CommitCard;