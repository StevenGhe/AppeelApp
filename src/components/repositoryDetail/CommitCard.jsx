import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import React from "react";

const CommitCard = (props) => {
    const commitMessage = props.commit && props.commit.commit ? props.commit.commit.message : "No commit found";
    const commitAuthor = props.commit && props.commit.commit ? props.commit.commit.author.name : "No commit found";
    const ownerProfilePicture = props.commit && props.commit.author ? props.commit.author.avatar_url : "No commit found";

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
                } />
        </ListItem>
    );
}

export default CommitCard;