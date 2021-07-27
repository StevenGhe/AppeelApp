import React from 'react';

import { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';


class RepoCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      repoId: props.repo.full_name,
      repoName: props.repo.name,
      repoDescription: props.repo.description,
      ownerName: props.repo.owner.login,
      ownerProfilePicture: props.repo.owner.avatar_url
    }
  }

  render() {
    const { repoId, repoName, repoDescription, ownerName, ownerProfilePicture } = this.state;

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
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  {ownerName}
                </Typography>
                {repoDescription}
              </React.Fragment>
            }
          />
        </ListItem>
      </LinkContainer>
    )
  };
}

export default RepoCard