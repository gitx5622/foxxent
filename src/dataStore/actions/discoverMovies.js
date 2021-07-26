import axiosConfig from '../../config/axiosConfig';
import {GET_MOVIES, GET_MOVIES_ERROR, GET_MOVIES_SUCCESS} from "../dispatchTypes";

export const discoverMovies = (dispatch) => {
    dispatch({
        type: GET_MOVIES,
    });
    axiosConfig
        .get(`discover/movie?api_key=2998365350d817e64e3abcd94126560c`)
        .then(response => {
            dispatch({
                type: GET_MOVIES_SUCCESS,
                movies: response.data,
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
