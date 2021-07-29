import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

import { connect } from 'react-redux';
import { setFavoriteRepo, delFavoriteRepo } from '../../redux';

import styles from "./common.module.css"

class RepoCard extends Component {

  handleStarClick = (e) => {
    e.stopPropagation();

    if (this.props.repo.favorited) {
      this.props.delFavoriteRepo(this.props.repo.full_name);
    } else {
      this.props.setFavoriteRepo(this.props.repo.full_name);
    }
  }

  render() {
    const repoId = this.props.repo.full_name;
    const repoName = this.props.repo.name;
    const repoDescription = this.props.repo.description;
    const ownerName = this.props.repo.owner.login;
    const ownerProfilePicture = this.props.repo.owner.avatar_url;
    const favorited = this.props.repo.favorited;

    return (
      <LinkContainer to={"/repos/" + repoId}>
        <ListItem className={styles.repoCard} alignItems="flex-start">

          <StarIcon className={favorited ? styles.favoriteStar : styles.star} onClick={e => { this.handleStarClick(e) }} />

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
      </LinkContainer >

    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFavoriteRepo: (repoId) => dispatch(setFavoriteRepo(repoId)),
    delFavoriteRepo: (repoId) => dispatch(delFavoriteRepo(repoId))
  }
};

export default connect(null, mapDispatchToProps)(RepoCard)