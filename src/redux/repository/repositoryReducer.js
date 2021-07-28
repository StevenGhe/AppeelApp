import * as act from "./repositoryTypes"

const initialRepositoryState = {
    publicLoading: false,
    personalLoading: false,
    publicRepos: [],
    personalRepos: [],
    publicError: "",
    personalError: "",
}

const repositoryReducer = (state = initialRepositoryState, action) => {
    switch (action.type) {

        // PUBLIC REPOSITORIES
        case act.FETCH_PUB_REPOS_REQUEST:
            return {
                ...state,
                publicLoading: true,
                publicRepos: [],
                publicError: ""
            }
        case act.FETCH_PUB_REPOS_SUCCESS:
            return {
                ...state,
                publicLoading: false,
                publicRepos: action.payload,
                publicError: ""
            }
        case act.FETCH_PUB_REPOS_FAILURE:
            return {
                ...state,
                publicLoading: false,
                publicRepos: [],
                publicError: action.payload
            }

        // PERSONAL REPOSITORIES
        case act.FETCH_PERS_REPOS_REQUEST:
            return {
                ...state,
                personalLoading: true,
                personalRepos: [],
                personalError: ""
            }
        case act.FETCH_PERS_REPOS_SUCCESS:
            return {
                ...state,
                personalLoading: false,
                personalRepos: action.payload,
                personalError: ""
            }
        case act.FETCH_PERS_REPOS_FAILURE:
            return {
                ...state,
                personalLoading: false,
                personalRepos: [],
                personalError: action.payload
            }

        default:
            return state;
    }
}

export default repositoryReducer;