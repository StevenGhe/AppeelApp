import repositoryReducer from "../repository/repositoryReducer";
import {
    FETCH_PERS_REPOS_FAILURE,
    FETCH_PERS_REPOS_SUCCESS,
    FETCH_PERS_REPOS_REQUEST,
    FETCH_PUB_REPOS_FAILURE,
    FETCH_PUB_REPOS_REQUEST,
    FETCH_PUB_REPOS_SUCCESS,
    SET_FAVORITE_REPO,
    DEL_FAVORITE_REPO
} from "../repository/repositoryTypes";

const statePublicLoadingTrue = {
    fav: [],
    publicLoading: true,
    personalLoading: false,
    publicRepos: [],
    personalRepos: [],
    publicError: "",
    personalError: ""
}

const statePersLoadingTrue = {
    fav: [],
    publicLoading: false,
    personalLoading: true,
    publicRepos: [],
    personalRepos: [],
    publicError: "",
    personalError: ""
}

const stateWithFullNameNodeIds = {
    fav: [],
    publicLoading: false,
    personalLoading: true,
    publicRepos: [{ full_name: "repoIdPublic" }],
    personalRepos: [{ full_name: "repoIdPersonal" }],
    publicError: "",
    personalError: ""
}

const stateWithFullNameNodeIdsAndFavorite = {
    fav: [],
    publicLoading: false,
    personalLoading: true,
    publicRepos: [{ full_name: "repoIdPublic", favorited: true }],
    personalRepos: [{ full_name: "repoIdPersonal", favorited: true }],
    publicError: "",
    personalError: ""
}

const testRepo = {
    full_name: "RepoFullName",
    name: "RepoName",
    description: "RepoDescription",
    favorited: false,
    owner: {
        login: "RepoOwnerLogin",
        avatar_url: "RepoOwnerAvatarUrl"
    }
}


describe("Repository Reducer", () => {
    it("ComRepositorymit Reducer has a default state", () => {
        expect(repositoryReducer(undefined, { type: "Default" })).toEqual({
            fav: [],
            publicLoading: false,
            personalLoading: false,
            publicRepos: [],
            personalRepos: [],
            publicError: "",
            personalError: ""
        })
    })

    //Request
    it("Repository Reducer sets publicLoading to true after FETCH_PUB_REPOS_REQUEST", () => {
        expect(repositoryReducer(undefined, { type: FETCH_PUB_REPOS_REQUEST })).toMatchObject({
            publicLoading: true
        })
    })

    it("Repository Reducer sets privateLoading to true after FETCH_PUB_REPOS_REQUEST", () => {
        expect(repositoryReducer(undefined, { type: FETCH_PERS_REPOS_REQUEST })).toMatchObject({
            personalLoading: true
        })
    })

    //Success
    it("Repository Reducer sets personalLoading to false and loads repos on FETCH_PERS_REPOS_SUCCESS with correct repos", () => {
        expect(repositoryReducer(statePersLoadingTrue, {
            type: FETCH_PERS_REPOS_SUCCESS,
            payload: [testRepo]
        })).toMatchObject({
            personalLoading: false,
            personalRepos: [testRepo],
            personalError: ""
        })
    })
    it("Repository Reducer sets personalLoading to false and loads empty repos on FETCH_PERS_REPOS_SUCCESS and invalid payload", () => {
        expect(repositoryReducer(statePersLoadingTrue, {
            type: FETCH_PERS_REPOS_SUCCESS,
            payload: { invalid: "payload" }
        })).toMatchObject({
            personalLoading: false,
            personalRepos: [],
            personalError: ""
        })
    })

    it("Repository Reducer sets publicLoading to false and loads repos on FETCH_PUB_REPOS_SUCCESS with correct repos", () => {
        expect(repositoryReducer(statePublicLoadingTrue, {
            type: FETCH_PUB_REPOS_SUCCESS,
            payload: [testRepo]
        })).toMatchObject({
            publicLoading: false,
            publicRepos: [testRepo],
            publicError: ""
        })
    })
    it("Repository Reducer sets publicLoading to false and loads empty repos on FETCH_PUB_REPOS_SUCCESS and invalid payload", () => {
        expect(repositoryReducer(statePublicLoadingTrue, {
            type: FETCH_PUB_REPOS_SUCCESS,
            payload: { invalid: "payload" }
        })).toMatchObject({
            publicLoading: false,
            publicRepos: [],
            publicError: ""
        })
    })

    //Failure
    it("Repository Reducer sets personalLoading to false and loads repos on FETCH_PERS_REPOS_FAILURE with correct repos", () => {
        expect(repositoryReducer(statePersLoadingTrue, {
            type: FETCH_PERS_REPOS_FAILURE,
            payload: "Error"
        })).toMatchObject({
            personalLoading: false,
            personalRepos: [],
            personalError: "Error"
        })
    })
    it("Repository Reducer sets personalLoading to false and loads empty repos on FETCH_PERS_REPOS_FAILURE and invalid payload", () => {
        expect(repositoryReducer(statePersLoadingTrue, {
            type: FETCH_PERS_REPOS_FAILURE,
            payload: null
        })).toMatchObject({
            personalLoading: false,
            personalRepos: [],
            personalError: "Default Repository Reducer Error"
        })
    })

    it("Repository Reducer sets publicLoading to false and loads error on FETCH_PUB_REPOS_FAILURE with correct error", () => {
        expect(repositoryReducer(statePublicLoadingTrue, {
            type: FETCH_PUB_REPOS_FAILURE,
            payload: "Error"
        })).toMatchObject({
            publicLoading: false,
            publicRepos: [],
            publicError: "Error"
        })
    })
    it("Repository Reducer sets publicLoading to false and loads default error on FETCH_PUB_REPOS_FAILURE with invalid error message", () => {
        expect(repositoryReducer(statePublicLoadingTrue, {
            type: FETCH_PUB_REPOS_FAILURE,
            payload: null
        })).toMatchObject({
            publicLoading: false,
            publicRepos: [],
            publicError: "Default Repository Reducer Error"
        })
    })

    //SetFavoriteRepo
    it("Repository Reducer adds favorite flag to personalRepo on SET_FAVORITE_REPO with correct repoId", () => {
        expect(repositoryReducer(stateWithFullNameNodeIds, {
            type: SET_FAVORITE_REPO,
            payload: "repoIdPersonal"
        })).toMatchObject({
            personalRepos: [{ full_name: "repoIdPersonal", favorited: true }],
            publicRepos: [{ full_name: "repoIdPublic" }]
        })
    })
    it("Repository Reducer adds favorite flag to publicRepo on SET_FAVORITE_REPO with correct repoId", () => {
        expect(repositoryReducer(stateWithFullNameNodeIds, {
            type: SET_FAVORITE_REPO,
            payload: "repoIdPublic"
        })).toMatchObject({
            personalRepos: [{ full_name: "repoIdPersonal" }],
            publicRepos: [{ full_name: "repoIdPublic", favorited: true }]
        })
    })
    it("Repository Reducer does not add any favorite flag on SET_FAVORITE_REPO with invalid repoId", () => {
        expect(repositoryReducer(stateWithFullNameNodeIds, {
            type: SET_FAVORITE_REPO,
            payload: "InvalidrepoId"
        })).toMatchObject({
            personalRepos: [{ full_name: "repoIdPersonal" }],
            publicRepos: [{ full_name: "repoIdPublic" }]
        })
    })

    it("Repository Reducer does not add favorite flag to any repo on SET_FAVORITE_REPO with non-string repoId", () => {
        expect(repositoryReducer(stateWithFullNameNodeIds, {
            type: SET_FAVORITE_REPO,
            payload: null
        })).toMatchObject({
            personalRepos: [{ full_name: "repoIdPersonal" }],
            publicRepos: [{ full_name: "repoIdPublic" }]
        })
    })

    //DelFavoriteRepo
    it("Repository Reducer removes favorite flag to personalRepo on DEL_FAVORITE_REPO with correct repoId", () => {
        expect(repositoryReducer(stateWithFullNameNodeIdsAndFavorite, {
            type: DEL_FAVORITE_REPO,
            payload: "repoIdPersonal"
        })).toMatchObject({
            personalRepos: [{ full_name: "repoIdPersonal" }],
            publicRepos: [{ full_name: "repoIdPublic", favorited: true }]
        })
    })
    it("Repository Reducer removes favorite flag to publicRepo on DEL_FAVORITE_REPO with correct repoId", () => {
        expect(repositoryReducer(stateWithFullNameNodeIdsAndFavorite, {
            type: DEL_FAVORITE_REPO,
            payload: "repoIdPublic"
        })).toMatchObject({
            personalRepos: [{ full_name: "repoIdPersonal", favorited: true }],
            publicRepos: [{ full_name: "repoIdPublic" }]
        })
    })
    it("Repository Reducer does not removes any favorite flag on DEL_FAVORITE_REPO with invalid repoId", () => {
        expect(repositoryReducer(stateWithFullNameNodeIdsAndFavorite, {
            type: DEL_FAVORITE_REPO,
            payload: "InvalidrepoId"
        })).toMatchObject({
            publicRepos: [{ full_name: "repoIdPublic", favorited: true }],
            personalRepos: [{ full_name: "repoIdPersonal", favorited: true }],
        })
    })

    it("Repository Reducer does not removes favorite flag to any repo on DEL_FAVORITE_REPO with non-string repoId", () => {
        expect(repositoryReducer(stateWithFullNameNodeIdsAndFavorite, {
            type: DEL_FAVORITE_REPO,
            payload: null
        })).toMatchObject({
            publicRepos: [{ full_name: "repoIdPublic", favorited: true }],
            personalRepos: [{ full_name: "repoIdPersonal", favorited: true }],
        })
    })
})