import axios from 'axios'
import { setFetchingAction, setReposAction } from '../redux/reposReducer'

export const getRepos = (searchQuery = "stars:%3E1") => {
  return async (dispatch) => {
    dispatch(setFetchingAction(true))
    const res = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars`)
    dispatch(setReposAction(res.data))
  }
}