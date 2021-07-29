import commitReducer from "../commit/commitReducer";
import { FETCH_COMMITS_FAILURE, FETCH_COMMITS_SUCCESS, FETCH_COMMITS_REQUEST, SET_COMMITS_FILTER } from "../commit/commitTypes";

const stateLoadingTrue = {
    loading: true,
    commits: [],
    error: "",
    filter: ""
}

describe("Commit Reducer", () => {
    it("Commit Reducer has a default state", () => {
        expect(commitReducer(undefined, { type: "Default" })).toEqual({
            loading: false,
            commits: [],
            error: "",
            filter: ""
        })
    })

    it("Commit Reducer sets loading to true after FETCH_COMMITS_REQUEST", () => {
        expect(commitReducer(undefined, { type: FETCH_COMMITS_REQUEST })).toMatchObject({
            loading: true
        })
    })

    it("Commit Reducer sets loading to false and loads commits on FETCH_COMMITS_SUCCESS with correct commits", () => {
        expect(commitReducer(stateLoadingTrue, {
            type: FETCH_COMMITS_SUCCESS,
            payload: ["Commit1", "Commit2"]
        })).toMatchObject({
            loading: false,
            commits: ["Commit1", "Commit2"],
            error: ""
        })
    })

    it("Commit Reducer sets loading to false and loads empty commits on FETCH_COMMITS_SUCCESS and invalid payload", () => {
        expect(commitReducer(stateLoadingTrue, {
            type: FETCH_COMMITS_SUCCESS,
            payload: { invalid: "payload" }
        })).toMatchObject({
            loading: false,
            commits: [],
            error: ""
        })
    })

    it("Commit Reducer sets loading to false and loads error on FETCH_COMMITS_FAILURE with correct error", () => {
        expect(commitReducer(stateLoadingTrue, {
            type: FETCH_COMMITS_FAILURE,
            payload: "Error on loading"
        })).toMatchObject({
            loading: false,
            commits: [],
            error: "Error on loading"
        })
    })

    it("Commit Reducer sets loading to false and loads default error on FETCH_COMMITS_FAILURE with invalid payload ", () => {
        expect(commitReducer(stateLoadingTrue, {
            type: FETCH_COMMITS_FAILURE,
            payload: { invalid: "payload" }
        })).toMatchObject({
            loading: false,
            commits: [],
            error: "Default Commit Reducer Error"
        })
    })

    it("Commit Reducer changes filter when SET_COMMITS_FILTER is dispatched with correct filter", () => {
        expect(commitReducer(undefined, {
            type: SET_COMMITS_FILTER,
            payload: "Filter"
        })).toMatchObject({
            filter: "Filter"
        })
    })

    it("Commit Reducer changes is empty when SET_COMMITS_FILTER is dispatched with invalid null filter", () => {
        expect(commitReducer(undefined, {
            type: SET_COMMITS_FILTER,
            payload: null
        })).toMatchObject({
            filter: ""
        })
    })


})