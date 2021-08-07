import axiosConfig from '../../config/axiosConfig';
import {GET_MOVIES, GET_MOVIES_ERROR, GET_MOVIES_SUCCESS} from "../dispatchTypes";

export const discoverMovies = (dispatch, page, genreforURL) => {
    dispatch({
        type: GET_MOVIES,
    });
    axiosConfig
        .get(`discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)
        .then(response => {
            dispatch({
                type: GET_MOVIES_SUCCESS,
                results: response.data.results,
                total_pages: response.data.total_pages
            });
        })
        .catch(error => {
            dispatch({
                type: GET_MOVIES_ERROR,
                errorMessage: error.response.data.status_message,
            });
        })
        .catch(() => {
            dispatch({
                type: GET_MOVIES_ERROR,
                errorMessage:
                    'Lost connetion to the server. Kindly check your internet connection',
            });
        });
};
