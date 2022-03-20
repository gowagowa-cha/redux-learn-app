const SET_REPOS = "SET_REPOS";
const SET_ISFETCHING = "SET_ISFETCHING";
const SET_CURRENTPAGE = "SET_CURRENTPAGE";
const SET_ISFETCHERROR = "SET_ISFETCHERROR";

const initialState = {
  items: [],
  isFetching: true,
  currentPage: 1,
  perPage: 10,
  totalCount: 0,
  isFetchError: false,
};

export const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REPOS:
      return {
        ...state,
        items: action.payload.items,
        totalCount: action.payload.total_count,
        isFetching: false,
      };
    case SET_ISFETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case SET_CURRENTPAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_ISFETCHERROR:
      return {
        ...state,
        isFetchError: action.payload,
      };

    default:
      return state;
  }
};

export const setReposAction = (repos) => ({ type: SET_REPOS, payload: repos });
export const setFetchingAction = (bool) => ({ type: SET_ISFETCHING, payload: bool });
export const setCurrentPageAction = (page) => ({ type: SET_CURRENTPAGE, payload: page });
export const setIsFetchErrorAction = (bool) => ({ type: SET_ISFETCHERROR, payload: bool });
