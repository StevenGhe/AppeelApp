import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from "@material-ui/core";
import React from "react";

const CommitCard = (props) => {
    const commitName = props.commit.commit.name;
    const commitMessage = props.commit.commit.message;
    const commitAuthor = props.commit.commit.author.name;
    const ownerProfilePicture = props.commit.author ? props.commit.author.avatar_url : null;

    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt={"Profile picture" + commitAuthor} src={ownerProfilePicture} />
            </ListItemAvatar>
            <ListItemText
                primary={commitAuthor}
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                        >
                            {commitName}{' '}
                        </Typography>
                        {commitMessage}
                    </React.Fragment>
                }/>
        </ListItem>
    );
}

export default CommitCard;