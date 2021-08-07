import axiosConfig from '../../config/axiosConfig';
import {GET_SERIES, GET_SERIES_ERROR, GET_SERIES_SUCCESS} from "../dispatchTypes";

export const discoverSeries = (dispatch, page, genreforURL) => {
    dispatch({
        type: GET_SERIES,
    });
    axiosConfig
        .get(`discover/tv?api_key=${process.env.REACT_APP_API_KEY}&&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)
        .then(response => {
            dispatch({
                type: GET_SERIES_SUCCESS,
                series: response.data,
            });
        })
        .catch(error => {
            dispatch({
                type: GET_SERIES_ERROR,
                errorMessage: error.response.data.status_message,
            });
        })
        .catch(() => {
            dispatch({
                type: GET_SERIES_ERROR,
                errorMessage:
                    'Lost connetion to the server. Kindly check your internet connection',
            });
        });
};
