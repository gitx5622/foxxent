import React, {useEffect, useState} from 'react';
import { Button } from "@material-ui/core";
import { Popover } from "antd";
import {  IoIosAddCircle } from "react-icons/all";
import uniqBy from 'lodash.uniqby';
import "../../../styles/Home/Home.scss";
import {withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {discoverMovies} from "../../../dataStore/actions/discoverMovies";
import {discoverSeries} from "../../../dataStore/actions/discoverSeries";
import {discoverMovieGenres, discoverTvGenres} from "../../../dataStore/actions/discoverGenres";

const Home = ({ history }) => {
    const discoverMoviesSelector = useSelector(state => state.movieState);
    const discoverSeriesSelector = useSelector(state => state.tvShowState);
    const discoverGenresSelector = useSelector(state => state.genreState);
    const {
        movies: {
            results: moviesResults,
        },
    } = discoverMoviesSelector;
    const {
        series: {
            results: seriesResults,
        },
    } = discoverSeriesSelector;

    const { movie_genres: Mgenres, tv_genres: Tgenres } = discoverGenresSelector;

    const [movies, setMovies] = useState(moviesResults || []);
    const [tvShows, setTvShows] = useState(seriesResults || []);
    const [tvGenres, setTvGenres] = useState(Mgenres || []);
    const [movieGenres, setMovieGenres] = useState(Tgenres || []);

    const dispatch = useDispatch();

    const handleHomeDispatch = () => {
        discoverMovies(dispatch);
        discoverSeries(dispatch);
        discoverTvGenres(dispatch);
        discoverMovieGenres(dispatch);
    }

    useEffect(() => {
        handleHomeDispatch();
        setMovies(uniqBy([...movies, ...moviesResults], 'id'));
        setTvShows(uniqBy([...tvShows, ...seriesResults], 'id'));
        setTvGenres(uniqBy([...tvGenres, ...Tgenres], 'id'));
        setMovieGenres(uniqBy([...movieGenres, ...Mgenres], 'id'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, moviesResults, seriesResults, Tgenres, Mgenres]);

    const text = <span>Title</span>;
    const content = (
        <div>
            <p>Content</p>
            <p>Content</p>
        </div>
    );

    return (
    <div className="homex">
        <div className="foxx-part-one" style={{backgroundImage:"url('/images/Landing/back.jpg')"}}>
            <div className="foxx-top-links">
                <div className="foxx-logo">
                    <h3>Foxx Entertainment</h3>
                </div>
                <div className="foxx-topbar-links">
                    <Button squared className="custom-button" ><h5>Home</h5></Button>
                    <Button squared className="custom-button" ><h5>Tv shows</h5></Button>
                    <Button squared className="custom-button" ><h5>Movies</h5></Button>
                </div>
                <div className="foxx-topbar-links">
                    <Button squared className="custom-button" ><h5>Search</h5></Button>
                    <Button squared className="custom-button" ><h5>Logout</h5></Button>
                </div>
            </div>
            <div className="foxx-middle-links">
                <div>
                    <center>
                        <h3>Welcome.
                            Millions of movies, TV shows and people to discover. Explore now.
                        </h3><br/>
                        <h3>Ready to Watch ? Create an account with us to enjoy</h3><br/>
                        <div className="more-info">
                            <Button squared className="custom-button" onClick={() => history.push("/dashboard/index")}>More info</Button>
                            <Button squared className="custom-button" onClick={() => history.push("/dashboard/index")}>Enjoy</Button>
                        </div>
                        <Popover placement="left" title={text} content={content} trigger="click">
                            <IoIosAddCircle />
                        </Popover>
                        </center>
                </div>
                <div/>
                <div/>
            </div>
        </div>
        <div className="genres">
            <h3>Movies:</h3>
            {tvGenres && tvGenres.map(tv_genre => {
                return (
                    <Button className="genres-button" squared>{tv_genre.name}</Button>
                )
            }).slice(0, 13)}
        </div>
        <div className="slider-one">
            <h2>Trending movies on foxx</h2>
                    <div className="discover-movies animate__animated animate__zoomIn">
                        {movies && movies
                        .map(movie => { return (
                            <div>
                                <img src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} width="100%" alt=""/>
                            </div>
                        )})
                        .slice(1,9)
                        }
                    </div>
        </div>
        <div className="genres">
            <h3>Series:</h3>
            {tvGenres && tvGenres.map(tv_genre => {
                return (
                    <Button className="genres-button" squared>{tv_genre.name}</Button>
                )
            }).slice(0, 13)}
        </div>
        <div className="slider-two">
            <h2>Trending series on foxx</h2>
            <div className="discover-series">
                {tvShows && tvShows
                    .map(series => { return (
                        <div>
                            <img src={`http://image.tmdb.org/t/p/w185/${series.poster_path}`} width="100%" alt=""/>
                        </div>
                    )})
                    .slice(1,9)
                }
            </div>
        </div>
        <div className="slider-three">
            <h2>Trending series on foxx</h2>
            <div className="discover-movies">
                {tvShows && tvShows
                    .map(series => { return (
                        <div>
                            <img src={`http://image.tmdb.org/t/p/w185/${series.poster_path}`} width="100%" alt=""/>
                        </div>
                    )})
                    .slice(1,9)
                }
            </div>
        </div>
    </div>
    );
};

export default withRouter(Home);