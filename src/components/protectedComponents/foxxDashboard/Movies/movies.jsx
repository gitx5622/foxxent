import React, {useEffect, useState} from 'react';
import { withRouter } from "react-router-dom";
import "../../../../styles/Trending/trending.scss";
import { useDispatch, useSelector} from "react-redux";
import {discoverMovies} from "../../../../dataStore/actions/discoverMovies";
import SingleContent from "../SingleContent/singleContent";
import CustomPagination from "../Pagination/CustomPagination";

const Movies = withRouter(({ history }) => {
    const [page, setPage] = useState(1)
    const dispatch = useDispatch();
    const discoverMoviesSelector = useSelector(store => store.movieState);
    const { results, total_pages } = discoverMoviesSelector;

    const handleHomeDispatch = () => {
        discoverMovies(dispatch, page);
    }

    useEffect(() => {
        handleHomeDispatch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);
    return (
        <div className="homex">
            <div className="discover-trending">
                <h2>Foxx movies</h2>
                <div className="trending animate__animated animate__zoomIn">
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
                        )}
                </div>
                {total_pages > 1 && (
                    <CustomPagination numOfPages={total_pages} setPage={setPage}/>
                )}
            </div>
        </div>
    );
});

export default Movies;