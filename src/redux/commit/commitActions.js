import * as act from "./commitTypes"
import axios from "axios";

const fetchCommitsRequest = () => {
    return {
        type: act.FETCH_COMMITS_REQUEST
    }
}

const fetchCommitsSuccess = commits => {
    return {
        type: act.FETCH_COMMITS_SUCCESS,
        payload: commits
    }
}
const fetchCommitsFailure = error => {
    return {
        type: act.FETCH_COMMITS_FAILURE,
        payload: error
    }
}

export const setCommitFilter = filter => {
    return {
        type: act.SET_COMMITS_FILTER,
        payload: filter
    }
}

//Thunk
export const fetchCommits = repoId => {
    return function(dispatch) {
        dispatch(fetchCommitsRequest());

        axios.get("https://api.github.com" + repoId + "/commits?per_page=20")
            .then(response =>{
                dispatch(fetchCommitsSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchCommitsFailure(error));
            });
    }
}