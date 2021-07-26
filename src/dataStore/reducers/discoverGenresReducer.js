import {
    GET_MOVIE_GENRES, GET_MOVIE_GENRES_ERROR,
    GET_MOVIE_GENRES_SUCCESS,
    GET_TV_GENRES, GET_TV_GENRES_ERROR,
    GET_TV_GENRES_SUCCESS
} from "../dispatchTypes";

export const initialGenreState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: '',
    movie_genres: [],
    tv_genres: [],
}

export const discoverGenresReducer = (
    state = initialGenreState,
    action
) => {
    switch (action.type) {
        case GET_TV_GENRES: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_MOVIE_GENRES: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_MOVIE_GENRES_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                movie_genres: action.movie_genres,
            };
        }
        case GET_TV_GENRES_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                tv_genres: action.tv_genres,
            };
        }
        case GET_MOVIE_GENRES_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
        case GET_TV_GENRES_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
        default:
            return state;
    }

};