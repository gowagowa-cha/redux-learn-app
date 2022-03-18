const SET_REPOS = "SET_REPOS";
const SET_ISFETCHING = "SET_ISFETCHING";

const initialState = {
  items: [],
  isFetching: true,
};

export const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REPOS:
      return {
        ...state,
        items: action.payload.items,
        isFetching: false,
      };
    case SET_ISFETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };

    default:
      return state;
  }
};

export const setReposAction = (repos) => ({ type: SET_REPOS, payload: repos });
export const setFetchingAction = (bool) => ({ type: SET_ISFETCHING, payload: bool });
