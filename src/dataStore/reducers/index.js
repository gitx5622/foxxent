import { combineReducers } from 'redux';
import {discoverMoviesReducer} from "./discoverMoviesReducer";
import {discoverSeriesReducer} from "./discoverSeriesReducer";
import {discoverGenresReducer} from "./discoverGenresReducer";


const rootReducer = combineReducers({
    movieState: discoverMoviesReducer,
    tvShowState: discoverSeriesReducer,
    genreState: discoverGenresReducer,
});

export default rootReducer;
