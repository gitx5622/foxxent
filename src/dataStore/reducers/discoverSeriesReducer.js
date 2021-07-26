import {
    GET_SERIES,
    GET_SERIES_ERROR,
    GET_SERIES_SUCCESS
} from "../dispatchTypes";

export const initialSeriesState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: '',
    series: {
        pages: "",
        results: [],
        total_pages: "",
        total_results: ""
    },
}

export const discoverSeriesReducer = (
    state = initialSeriesState,
    action
) => {
    switch (action.type) {
        case GET_SERIES: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_SERIES_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                series: action.series,
            };
        }
        case GET_SERIES_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
        default:
            return state
    }

};