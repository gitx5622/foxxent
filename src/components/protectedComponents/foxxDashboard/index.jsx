import React from 'react';
import "../../../styles/foxxDashboard/index.scss";
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from "./home";


const FoxxDashboard = withRouter(({
       match: {
           params: { dashboard_route },
       }
   }) => {
    const renderDashboardScreens = () => {
        switch (dashboard_route) {
            case 'home':
                return <Home/>;
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
                <div className="dashboard-screens">
                    { renderDashboardScreens() }
                </div>
            </div>
        </div>
    );
});

export default FoxxDashboard;