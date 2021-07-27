import {
    GET_TRENDING,
    GET_TRENDING_ERROR,
    GET_TRENDING_SUCCESS
} from "../dispatchTypes";

export const initialTrendingState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: '',
    pages: 1,
    results: [],
    total_pages: "",
    total_results: ""
}

export const discoverTrendingReducer = (
    state = initialTrendingState,
    action
) => {
    switch (action.type) {
        case  GET_TRENDING: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_TRENDING_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                results: action.results,
            };
        }
        case GET_TRENDING_ERROR: {
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