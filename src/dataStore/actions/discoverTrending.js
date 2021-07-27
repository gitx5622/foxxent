import axiosConfig from '../../config/axiosConfig';
import {
    GET_TRENDING,
    GET_TRENDING_ERROR,
    GET_TRENDING_SUCCESS
} from "../dispatchTypes";

export const discoverTrending = (dispatch, page) => {
    dispatch({
        type: GET_TRENDING,
    });
    axiosConfig
        .get(`trending/all/day?api_key=2998365350d817e64e3abcd94126560c&page=${page}`)
        .then(response => {
            dispatch({
                type: GET_TRENDING_SUCCESS,
                results: response.data.results,
            });
        })
        .catch(error => {
            dispatch({
                type: GET_TRENDING_ERROR,
                errorMessage: error.response.data.status_message,
            });
        })
        .catch(() => {
            dispatch({
                type: GET_TRENDING_ERROR,
                errorMessage:
                    'Lost connetion to the server. Kindly check your internet connection',
            });
        });
};
