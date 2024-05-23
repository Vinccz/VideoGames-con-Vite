import axios from 'axios';

export const FETCH_VIDEO_GAMES_REQUEST = 'FETCH_VIDEO_GAMES_REQUEST';
export const FETCH_VIDEO_GAMES_SUCCESS = 'FETCH_VIDEO_GAMES_SUCCESS';
export const FETCH_VIDEO_GAMES_FAILURE = 'FETCH_VIDEO_GAMES_FAILURE';

export const fetchVideoGames = () => {
  return async dispatch => {
    dispatch({ type: FETCH_VIDEO_GAMES_REQUEST });

    try {
      const response = await axios.get('https://api.rawg.io/api/games?key=648a9ba7af8f4352b2cebd718d0fe7e6&dates=2019-09-01,2019-09-30&platforms=18,1,7');
      dispatch({ type: FETCH_VIDEO_GAMES_SUCCESS, payload: response.data.results });
    } catch (error) {
      dispatch({ type: FETCH_VIDEO_GAMES_FAILURE, payload: error.message });
    }
  };
};
