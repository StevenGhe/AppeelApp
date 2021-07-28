import * as act from "./repositoryTypes"
import axios from "axios";


const fetchPublicReposRequest = () => {
    return {
        type: act.FETCH_PUB_REPOS_REQUEST
    }
}
const fetchPublicReposSuccess = repos => {
    return {
        type: act.FETCH_PUB_REPOS_SUCCESS,
        payload: repos
    }
}
const fetchPublicReposFail = error => {
    return {
        type: act.FETCH_PUB_REPOS_FAILURE,
        payload: error
    }
}


const fetchPersonalReposRequest = () => {
    return {
        type: act.FETCH_PERS_REPOS_REQUEST
    }
}
const fetchPersonalReposSuccess = repos => {
    return {
        type: act.FETCH_PERS_REPOS_SUCCESS,
        payload: repos
    }
}
const fetchPersonalReposFail = error => {
    return {
        type: act.FETCH_PERS_REPOS_FAILURE,
        payload: error
    }
}

//Thunk
export const fetchPublicRepos = () => {
    return function (dispatch) {
        dispatch(fetchPublicReposRequest());

        axios.get("https://api.github.com/repositories")
            .then(response => {
                dispatch(fetchPublicReposSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchPublicReposFail(error));
            });
    }
}

//Thunk
export const fetchPersonalRepos = () => {
    return function (dispatch) {
        dispatch(fetchPersonalReposRequest());

        axios.get("https://api.github.com/user/repos?access_token=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")
            .then(response => {
                dispatch(fetchPersonalReposSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchPersonalReposFail(error));
            });
    }
}