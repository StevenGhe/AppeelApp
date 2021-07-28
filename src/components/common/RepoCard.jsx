import React from 'react';

import { LinkContainer } from 'react-router-bootstrap';
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';


const RepoCard = props => {
  const repoId = props.repo.full_name;
  const repoName = props.repo.name;
  const repoDescription = props.repo.description;
  const ownerName = props.repo.owner.login;
  const ownerProfilePicture = props.repo.owner.avatar_url;

  return (
    <LinkContainer to={"/repos/" + repoId}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={"Profile picture" + ownerName} src={ownerProfilePicture} />
        </ListItemAvatar>
        <ListItemText
          primary={repoName}
          secondary={
            <React.Fragment>
              <Typography component="span" variant="body2" color="textPrimary">
                {ownerName}{' '}
              </Typography>
              {repoDescription}
            </React.Fragment>
          }
        />
      </ListItem>
    </LinkContainer>
  )
}


export default RepoCard