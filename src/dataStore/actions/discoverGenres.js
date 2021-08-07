import axiosConfig from '../../config/axiosConfig';
import {
    GET_MOVIE_GENRES, GET_MOVIE_GENRES_ERROR,
    GET_MOVIE_GENRES_SUCCESS,
    GET_TV_GENRES,
    GET_TV_GENRES_ERROR,
    GET_TV_GENRES_SUCCESS
} from "../dispatchTypes";

export const discoverTvGenres = (dispatch) => {
    dispatch({
        type: GET_TV_GENRES,
    });
    axiosConfig
        .get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        .then(response => {
            dispatch({
                type: GET_TV_GENRES_SUCCESS,
                tv_genres: response.data.genres,
            });
        })
        .catch(error => {
            dispatch({
                type: GET_TV_GENRES_ERROR,
                errorMessage: error.response.data.status_message,
            });
        })
        .catch(() => {
            dispatch({
                type: GET_TV_GENRES_ERROR,
                errorMessage:
                    'Lost connetion to the server. Kindly check your internet connection',
            });
        });
};
export const discoverMovieGenres = (dispatch) => {
    dispatch({
        type: GET_MOVIE_GENRES,
    });
    axiosConfig
        .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=2998365350d817e64e3abcd94126560c&language=en-US`)
        .then(response => {
            dispatch({
                type: GET_MOVIE_GENRES_SUCCESS,
                movie_genres: response.data.genres,
            });
        })
        .catch(error => {
            dispatch({
                type: GET_MOVIE_GENRES_ERROR,
                errorMessage: error.response.data.status_message,
            });
        })
        .catch(() => {
            dispatch({
                type: GET_MOVIE_GENRES_ERROR,
                errorMessage:
                    'Lost connetion to the server. Kindly check your internet connection',
            });
        });
};
