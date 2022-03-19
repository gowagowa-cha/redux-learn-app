import axios from "axios";
import { setFetchingAction, setReposAction } from "../redux/reposReducer";

export const getRepos = (searchQuery = "stars:%3E1", currentPage, perPage) => {
  console.log(searchQuery);
  if (searchQuery == "") {
    searchQuery = "stars:%3E1";
  }
  return async (dispatch) => {
    dispatch(setFetchingAction(true));
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`,
    );
    dispatch(setReposAction(res.data));
  };
};
