import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import React from "react";

const CommitCard = (props) => {
    // const commitName = props.commit.commit.name;
    const commitMessage = props.commit.commit.message;
    const commitAuthor = props.commit.commit.author.name;
    const ownerProfilePicture = props.commit.author.avatar_url;

    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt={"Profile picture" + commitAuthor} src={ownerProfilePicture} />
            </ListItemAvatar>
            <ListItemText
                primary={commitAuthor}
                secondary={
                    <React.Fragment>
                        {commitMessage}
                    </React.Fragment>
                }/>
        </ListItem>
    );
}

export default CommitCard;