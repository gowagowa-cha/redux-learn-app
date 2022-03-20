import axios from "axios";
import { setFetchingAction, setIsFetchErrorAction, setReposAction } from "../redux/reposReducer";

export const getRepos = (searchQuery = "stars:%3E1", currentPage, perPage) => {
  if (searchQuery == "") {
    searchQuery = "stars:%3E1";
  }
  return async (dispatch) => {
    try {
      dispatch(setFetchingAction(true));
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`,
      );
      dispatch(setReposAction(res.data));
    } catch (error) {
      dispatch(setIsFetchErrorAction(true));
      dispatch(setFetchingAction(false));
      setTimeout(() => {
        dispatch(setIsFetchErrorAction(false));
      }, 3000);
    }
  };
};

export const getCurrentRepo = async (username, repoName, setReposAction) => {
  const res = await axios(`https://api.github.com/repos/${username}/${repoName}`);
  setReposAction(res.data);
};

export const getContributers = async (username, repoName, setContributers) => {
  const res = await axios(
    `https://api.github.com/repos/${username}/${repoName}/contributors?page=1&per_page=10`,
  );
  setContributers(res.data);
};
