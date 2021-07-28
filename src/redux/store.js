import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";

import repositoryReducer from "./repository/repositoryReducer";
import commitReducer from "./commit/commitReducer";

const rootReducer = combineReducers({
    repository: repositoryReducer,
    commit: commitReducer
})

const enhancers = [
    applyMiddleware(ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
]
const store = createStore(rootReducer, compose(...enhancers));

export default store;