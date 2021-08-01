import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import "../../../styles/Trending/trending.scss";
import {withRouter} from "react-router-dom";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SearchIcon from "@material-ui/icons/Search";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";


const useStyles = makeStyles({
    root: {
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "#2d313a",
        zIndex: 100,
    },
});

const  SimpleBottomNavigation = ({history}) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    useEffect(() => {
    if (value === 0 ) history.push('/dashboard/home');
    else if ( value === 1 ) history.push('/dashboard/movies');
    else if ( value === 2 ) history.push('/dashboard/series');
    else if (value === 3) history.push("/dashboard/search");
    }, [history, value])

    return (
        <BottomNavigation
            onClick={() => window.scroll(0, 0)}
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction style={{color:"white"}} label="Trending" icon={<WhatshotIcon />} />
            <BottomNavigationAction style={{color:"white"}} label="Movies" icon={<MovieIcon />} />
            <BottomNavigationAction style={{color:"white"}} label="Tv Series" icon={<TvIcon />} />
            <BottomNavigationAction style={{ color: "white" }} label="Search" icon={<SearchIcon />}/>
        </BottomNavigation>
    );
}
export default withRouter(SimpleBottomNavigation);