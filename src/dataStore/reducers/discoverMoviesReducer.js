import {GET_MOVIES, GET_MOVIES_ERROR, GET_MOVIES_SUCCESS} from "../dispatchTypes";

export const initialMovieState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: '',
    movies: {
        pages: "",
        results: [],
        total_pages: "",
        total_results: ""
    },
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
                movies: action.movies,
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