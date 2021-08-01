import React, {useEffect, useState} from 'react';
import { withRouter } from "react-router-dom";
import "../../../../styles/Trending/trending.scss";
import { useDispatch, useSelector} from "react-redux";
import SingleContent from "../SingleContent/singleContent";
import CustomPagination from "../Pagination/CustomPagination";
import {discoverSeries} from "../../../../dataStore/actions/discoverSeries";
import Genres from "../Genres/genres";
import useGenre from "../../../../utils/useGenre";


const Series = withRouter(({ history }) => {
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [page, setPage] = useState(1)
    const genreforURL = useGenre(selectedGenres);

    const dispatch = useDispatch();
    const discoverMoviesSelector = useSelector(store => store.tvShowState);

    const { series: {
        results,
        total_pages,
    } } = discoverMoviesSelector;

    const handleHomeDispatch = () => {
        discoverSeries(dispatch, page, genreforURL);
    }

    useEffect(() => {
        handleHomeDispatch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [genreforURL, page]);
    return (
        <div className="homex">
            <div className="discover-trending">
                <h2>Foxx series</h2>
                <Genres
                    selectedGenres={selectedGenres}
                    setSelectedGenres={setSelectedGenres}
                    type="tv"
                    genres={genres}
                    setGenres={setGenres}
                    setPage={setPage}
                />
                <div className="trending animate__animated animate__bounceInRight">
                    {results
                        .map((trending) =>
                            <SingleContent
                                key={trending.id}
                                id={trending.id}
                                poster_path={trending.poster_path}
                                title={trending.title || trending.name}
                                date={trending.first_air_date || trending.release_date}
                                media_type={trending.media_type}
                                ratings={trending.vote_average}
                            />
                        ).slice(0, 18)}
                </div>
                <CustomPagination numOfPages={total_pages} setPage={setPage}/>
            </div>
        </div>
    );
});

export default Series;