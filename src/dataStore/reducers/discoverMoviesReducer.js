import {GET_MOVIES, GET_MOVIES_ERROR, GET_MOVIES_SUCCESS} from "../dispatchTypes";

export const initialMovieState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: '',
    pages: 1,
    results: [],
    total_pages: "",
    total_results: ""
}

export const discoverMoviesReducer = (
    state = initialMovieState,
    action
) => {
    switch (action.type) {
        case GET_MOVIES: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_MOVIES_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                results: action.results,
                total_pages: action.total_pages
            };
        }
        case GET_MOVIES_ERROR: {
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