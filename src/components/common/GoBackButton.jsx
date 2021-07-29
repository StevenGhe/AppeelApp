import { IconButton } from "@material-ui/core";
import { withRouter } from 'react-router-dom';
import styles from './common.module.css';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const GoBackButton = props => {
    return (
        <IconButton aria-label="delete" className={styles.button} size="medium" onClick={() => props.history.goBack()}>
            <KeyboardBackspaceIcon fontSize="inherit" />
        </IconButton>
    )
}

//withRouter needed for props.history.goBack()
export default withRouter(GoBackButton);