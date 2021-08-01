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
            let checkedPublicRepos = [];

            if (action.payload && action.payload.length > 0) {
                checkedPublicRepos = action.payload.filter(repo => {
                    return repo && repo.full_name && repo.name && repo.description && repo.owner && repo.owner.login
                })
            }
            return {
                ...state,
                publicLoading: false,
                publicRepos: checkedPublicRepos,
                publicError: ""
            };
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
            let checkedPersRepos = [];

            if (action.payload && action.payload.length > 0) {
                checkedPersRepos = action.payload.filter(repo => {
                    return repo && repo.full_name && repo.name && repo.description && repo.owner && repo.owner.login
                })
            }

            return {
                ...state,
                personalLoading: false,
                personalRepos: checkedPersRepos,
                personalError: ""
            }
        case act.FETCH_PERS_REPOS_FAILURE:
            return {
                ...state,
                personalLoading: false,
                personalRepos: [],
                personalError: (action.payload && typeof action.payload === "string") ? action.payload : "Default Repository Reducer Error"
            }

        //SET FAVORITE
        case act.SET_FAVORITE_REPO:
            if (!(state.publicRepos && state.personalRepos
                && action.payload && (typeof action.payload) === "string")) {
                return state;
            }

            let tempPublicRepos = JSON.parse(JSON.stringify(state.publicRepos));
            for (let i in tempPublicRepos) {

                if (tempPublicRepos[i].full_name === action.payload) {
                    tempPublicRepos[i].favorited = true;
                    return {
                        ...state,
                        publicRepos: tempPublicRepos
                    }
                }
            }

            let tempPersRepos = JSON.parse(JSON.stringify(state.personalRepos));
            for (let i2 in tempPersRepos) {

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
            let tempPublicRepo = JSON.parse(JSON.stringify(state.publicRepos));
            for (let i3 in tempPublicRepo) {

                if (tempPublicRepo[i3].full_name === action.payload) {
                    tempPublicRepo[i3].favorited = false;
                    return {
                        ...state,
                        publicRepos: tempPublicRepo
                    }
                }
            }

            let tempPersRepo = JSON.parse(JSON.stringify(state.personalRepos));
            for (let i4 in tempPersRepo) {

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