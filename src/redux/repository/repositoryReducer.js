import * as act from "./repositoryTypes"

const initialRepositoryState = {
    fav: [],
    publicLoading: false,
    personalLoading: false,
    publicRepos: [],
    personalRepos: [],
    publicError: "",
    personalError: ""
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
                publicRepos: action.payload && action.payload.length > 0 ? action.payload : [],
                publicError: ""         //Ideally you would test the structure of the incoming objects
            };                          //I decided to just check if there was an array of objects (same with commits/personal repos)
        case act.FETCH_PUB_REPOS_FAILURE:
            return {
                ...state,
                publicLoading: false,
                publicRepos: [],
                publicError: (action.payload && typeof action.payload === "string") ? action.payload : "Default Repository Reducer Error"
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
                personalRepos: action.payload && action.payload.length > 0 ? action.payload : [],
                personalError: ""
            }
        case act.FETCH_PERS_REPOS_FAILURE:
            return {
                ...state,
                personalLoading: false,
                personalRepos: [],
                personalError: (action.payload && typeof action.payload === "string") ? action.payload : "Default Repository Reducer Error"
            }

        case act.SET_FAVORITE_REPO:
            if (!(state.publicRepos && state.personalRepos
                && action.payload && (typeof action.payload) === "string")) {
                return state;
            }

            var tempPublicRepos = JSON.parse(JSON.stringify(state.publicRepos));
            for (var i in tempPublicRepos) {

                if (tempPublicRepos[i].full_name === action.payload) {
                    tempPublicRepos[i].favorited = true;
                    return {
                        ...state,
                        publicRepos: tempPublicRepos
                    }
                }
            }

            var tempPersRepos = JSON.parse(JSON.stringify(state.personalRepos));
            for (var i2 in tempPersRepos) {

                if (tempPersRepos[i2].full_name === action.payload) {
                    tempPersRepos[i2].favorited = true;
                    return {
                        ...state,
                        personalRepos: tempPersRepos
                    }
                }
            }
            return state;

        case act.DEL_FAVORITE_REPO:
            var tempPublicRepo = JSON.parse(JSON.stringify(state.publicRepos));
            for (var i3 in tempPublicRepo) {

                if (tempPublicRepo[i3].full_name === action.payload) {
                    tempPublicRepo[i3].favorited = false;
                    return {
                        ...state,
                        publicRepos: tempPublicRepo
                    }
                }
            }

            var tempPersRepo = JSON.parse(JSON.stringify(state.personalRepos));
            for (var i4 in tempPersRepo) {

                if (tempPersRepo[i4].full_name === action.payload) {
                    tempPersRepo[i4].favorited = false;
                    return {
                        ...state,
                        personalRepos: tempPersRepo
                    }
                }
            }
            return state;

        default:
            return state;
    }
}

export default repositoryReducer;