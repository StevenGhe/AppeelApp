//Exports all actions, makes it easier for components to dispatch actions 

export { fetchPublicRepos } from "./repository/repositoryActions";
export { fetchPersonalRepos } from "./repository/repositoryActions";
export { fetchCommits } from "./commit/commitActions";
export { setCommitFilter } from "./commit/commitActions";
export { delFavoriteRepo, setFavoriteRepo } from "./repository/repositoryActions";
