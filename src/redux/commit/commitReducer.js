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
        case act.FETCH_COMMITS_SUCCESS:

            var checkedCommits = [];

            if (action.payload && action.payload.length > 0) {
                checkedCommits = action.payload.filter(c => {
                    return c && c.commit && c.commit.message && c.commit.author && c.commit.author.name && c.author
                })
            }

            return {
                ...state,
                loading: false,
                commits: checkedCommits,
                error: ""
            };
        case act.FETCH_COMMITS_FAILURE: return {
            ...state,
            loading: false,
            commits: [],
            error: (action.payload && typeof action.payload === "string") ? action.payload : "Default Commit Reducer Error"
        }
        case act.SET_COMMITS_FILTER: return {
            ...state,
            filter: action.payload ? action.payload : ""
        }
        default: return state;
    }
}

export default commitReducer;