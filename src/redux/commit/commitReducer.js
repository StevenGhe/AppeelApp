import * as act from "./commitTypes"

const initialCommitState = {
    loading: false,
    commits: [],
    error: "",
    filter: ""
}

const commitReducer = (state = initialCommitState, action) => {
    switch (action.type) {
        
        case act.FETCH_COMMITS_REQUEST: return {
            ...state,
            loading: true
        };
        case act.FETCH_COMMITS_SUCCESS: return {
            ...state,
            loading: false,
            commits: action.payload,
            error: ""
        };
        case act.FETCH_COMMITS_FAILURE: return {
            ...state,
            loading: false,
            commits: [],
            error: action.payload
        }
        case act.SET_COMMITS_FILTER: return {
            ...state,
            filter: action.payload
        }
        default: return state;
    }
}

export default commitReducer;