import React from 'react';
// import { Badge } from "@material-ui/core";
import "../../../../styles/SingleContent/singleContent.scss";

const SingleContent = ({title, poster_path, date, media_type, ratings}) => {
    return (
        <div className="media">
            {/*<Badge*/}
            {/*    badgeContent={ratings}*/}
            {/*    color={ratings > 6 ? "secondary" : "primary"}*/}
            {/*/>*/}
            <img
                className="poster"
                src={`http://image.tmdb.org/t/p/w185/${poster_path}`}
                alt={title}
            />
            <b className="title">{title}</b>
            <span className="subTitle">
                 {media_type === "tv" ? "TV Series" : "Movie"}
                <span className="subTitle">{date}</span>
      </span>
        </div>
    );
};

export default SingleContent;