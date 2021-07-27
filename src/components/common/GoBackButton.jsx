import { IconButton } from "@material-ui/core";
import { Component } from "react";
import { withRouter } from 'react-router-dom';
import styles from './common.module.css';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

class GoBackButton extends Component {
    render() {
        return (
            <IconButton aria-label="delete" className={styles.button} size="medium" onClick={() => this.props.history.goBack()}>
                <KeyboardBackspaceIcon fontSize="inherit" />
            </IconButton>
        )
    }
}

export default withRouter(GoBackButton);