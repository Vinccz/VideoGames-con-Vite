import { combineReducers } from 'redux';
import { FETCH_VIDEO_GAMES_REQUEST, FETCH_VIDEO_GAMES_SUCCESS, FETCH_VIDEO_GAMES_FAILURE } from './actions';

const initialState = {
  loading: false,
  games: [],
  error: ''
};

const videoGamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VIDEO_GAMES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_VIDEO_GAMES_SUCCESS:
      return {
        loading: false,
        games: action.payload,
        error: ''
      };
    case FETCH_VIDEO_GAMES_FAILURE:
      return {
        loading: false,
        games: [],
        error: action.payload
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  videoGames: videoGamesReducer
});

export default rootReducer;
