import React from 'react';
import "../../../styles/foxxDashboard/index.scss";
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from "./Trending/trending";
import Movies from "./Movies/movies";
import Series from "./Series/series";
import Search from "./Search/search";
import SimpleBottomNavigation from "./bottomNav";
import {Button} from "@material-ui/core";


const FoxxDashboard = withRouter(({
       match: {
           params: { dashboard_route },
       }
   }) => {
    const renderDashboardScreens = () => {
        switch (dashboard_route) {
            case 'home':
                return <Home/>;
            case 'movies':
                return <Movies/>
            case 'series':
                return <Series/>
            case 'search':
                return <Search/>
            default:
                return '404: Page not Found';
        }
    }
    return (
        <div className="foxxdashboard">
            <Helmet>
                <title>{` FOXX | ${
                    (dashboard_route && dashboard_route.toUpperCase()) || 'HOME'
                }`}</title>
            </Helmet>
            <div>
            </div>
            <div className="main-area">
                <div className="foxx-part-one" style={{backgroundImage:"url('/images/Landing/back.jpg')"}}>
                    <div className="foxx-top-links">
                        <div className="foxx-logo">
                            <h3 onClick={() => window.scroll(0, 0)}>Foxx Entertainment</h3>
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
                                </h3>
                            </center>
                        </div>
                        <div/>
                        <div/>
                    </div>
                </div>
                <div className="dashboard-screens">
                    { renderDashboardScreens() }
                </div>
                <SimpleBottomNavigation/>
            </div>
        </div>
    );
});

export default FoxxDashboard;