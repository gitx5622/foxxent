import { combineReducers } from 'redux';
import {discoverMoviesReducer} from "./discoverMoviesReducer";
import {discoverSeriesReducer} from "./discoverSeriesReducer";
import {discoverGenresReducer} from "./discoverGenresReducer";
import {discoverTrendingReducer} from "./discoverTrendingReducer";


const rootReducer = combineReducers({
    movieState: discoverMoviesReducer,
    tvShowState: discoverSeriesReducer,
    genreState: discoverGenresReducer,
    trendingState: discoverTrendingReducer,
});

export default rootReducer;
