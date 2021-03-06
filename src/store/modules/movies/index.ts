import produce from 'immer';
import { Reducer } from 'redux';
import { MovieState, MoviesActionTypes } from './types';
import { AuthActionTypes } from '../auth/types';

const INITIAL_STATE: MovieState = {
  list: [],
  currentMovie: null,
  currentSearch: [],
  loadingSearch: false,
  loadingPaginate: false,
  currentPage: 1,
  lastSearchParam: '',
};

const reducer: Reducer<MovieState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case MoviesActionTypes.SEARCH_MOVIES_REQUEST:
        draft.loadingSearch = true;
        break;
      case MoviesActionTypes.SEARCH_MOVIES_SUCESS:
        draft.currentSearch = action.payload.movies;
        draft.lastSearchParam = action.payload.param;
        draft.loadingSearch = false;
        draft.currentPage = 1;
        break;
      case MoviesActionTypes.SEARCH_MOVIES_FAILURE:
        draft.currentSearch = [];
        draft.loadingSearch = false;
        break;
      case MoviesActionTypes.PAGINATE_CURRENT_SEARCH_REQUEST:
        draft.loadingPaginate = true;
        break;
      case MoviesActionTypes.PAGINATE_CURRENT_SEARCH_SUCESS:
        draft.loadingPaginate = false;
        draft.currentSearch = action.payload.movies;
        draft.currentPage = action.payload.pageNumber;
        break;
      case MoviesActionTypes.PAGINATE_CURRENT_SEARCH_FAILURE:
        draft.loadingPaginate = false;
        break;
      case MoviesActionTypes.ADD_MOVIE_IN_LIST_SUCESS:
        draft.list = action.payload.movies;
        break;
      case MoviesActionTypes.REMOVE_MOVIE_IN_LIST_SUCESS:
        draft.list = action.payload.movies;
        break;
      case MoviesActionTypes.SHOW_DETAILS_MOVIE_REQUEST:
        draft.currentMovie = null;
        break;
      case MoviesActionTypes.SHOW_DETAILS_MOVIE_SUCESS:
        draft.currentMovie = action.payload;
        break;
      case MoviesActionTypes.SHOW_DETAILS_MOVIE_FAILURE:
        draft.currentMovie = null;
        break;
      case AuthActionTypes.SIGN_OUT:
        draft.list = [];
        draft.currentMovie = null;
        draft.currentSearch = [];
        draft.loadingSearch = false;
        draft.loadingPaginate = false;
        draft.currentPage = 1;
        draft.lastSearchParam = '';
        break;
      default:
        return state;
    }
  });
};

export default reducer;
