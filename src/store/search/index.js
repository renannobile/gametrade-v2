import { createSelector } from "reselect";

const PREFIX = "SEARCH";
export const DO_SEARCH = `${PREFIX}/DO_SEARCH`;
export const SEARCH_SUCCESS = `${PREFIX}/SEARCH_SUCCESS`;
export const SEARCH_ERROR = `${PREFIX}/SEARCH_ERROR`;

export const doSearch = (query) => ({
  type: DO_SEARCH,
  payload: {
    query,
  },
});

export const onSearchSuccess = (data) => ({
  type: SEARCH_SUCCESS,
  payload: {
    data,
  },
});

export const onSearchError = (error) => ({
  type: SEARCH_ERROR,
  payload: {
    error,
  },
});

const initialState = {
  query: "",
  results: [],
  loading: false,
  error: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DO_SEARCH:
      return {
        query: payload.query,
        results: [],
        loading: true,
        error: false,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        results: payload.data,
        loading: false,
        error: false,
      };
    case SEARCH_ERROR:
      return {
        ...state,
        results: [],
        loading: false,
        error: payload.error,
      };
    default:
      return state;
  }
};

export const searchSelector = (state) => state.search;

export const resultsSelector = createSelector(
  searchSelector,
  ({ results }) => results
);

export default reducer;
