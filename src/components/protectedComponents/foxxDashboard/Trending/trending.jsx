import React, {useEffect, useState} from 'react';
import { withRouter } from "react-router-dom";
import "../../../../styles/Trending/trending.scss";
import { useDispatch, useSelector} from "react-redux";
import SingleContent from "../SingleContent/singleContent";
import CustomPagination from "../Pagination/CustomPagination";
import {discoverTrending} from "../../../../dataStore/actions/discoverTrending";


const Trending = withRouter(({ history }) => {
    const [page, setPage] = useState(1)
    const dispatch = useDispatch();
    const discoverMoviesSelector = useSelector(store => store.trendingState);
    const { results } = discoverMoviesSelector;

    const handleHomeDispatch = () => {
        discoverTrending(dispatch, page);
    }

    useEffect(() => {
        handleHomeDispatch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);
    return (
    <div className="homex">
        <div className="discover-trending">
            <h2>Trending movies on foxx</h2>
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
                        ).slice(0, 18)}
                    </div>
        <CustomPagination setPage={setPage}/>
        </div>
    </div>
    );
});

export default Trending;