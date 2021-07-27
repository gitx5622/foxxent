import React, { useState, Fragment } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import SnackInfo from "../../utils/SnackInfo";
import Landing from "../publicComponents/Landing";
import FoxxDashboard from "./foxxDashboard";
import Auth from "../publicComponents/Authentication";
import Contact from "../publicComponents/Brand/contact";
import About from "../publicComponents/Brand/about";
/**
 * @description Routing handler for dashboard components
 * @param {*} { props }
 */

const ProtectedRoutes = ({ location }) => {
    const [snackInfo, setSnackInfo] = useState({
        open: false,
        message: '',
        vertical: 'bottom',
        horizontal: 'left',
        severity: 'info',
        autoHideDuration: 5000,
    });

    const isBrandPage =
        location.pathname === '/' ||
        location.pathname === '/contact' ||
        location.pathname === '/about';

    const isUserPage =
        location.pathname === '/user/login' ||
        location.pathname === '/user/register';

    return (
        <Fragment>
            {isUserPage ? (
                <Fragment>
                    <div className="unprotected-routes-wrapper">
                        <div className="content-section">
                            <Switch>
                                <Route exact path="/user/:type" render={() => <Auth />} />
                            </Switch>
                        </div>
                    </div>
                </Fragment>
            ) : isBrandPage === true ? (
                <div className="unprotected-routes-wrapper">
                    <div className="content-section" id="content-section">
                        <div id="main-scrollable">
                            <Switch>
                                <Route exact path="/" render={() => <Landing />} />
                                <Route exact path="/contact" render={() => <Contact />} />
                                <Route exact path="/about" render={() => <About />} />
                            </Switch>
                        </div>
                    </div>
                </div>
            ) : (
                <Switch>
                    <div>
                        <Route
                            exact
                            path="/dashboard/:dashboard_route"
                            render={() => (
                                <FoxxDashboard/>
                            )}
                        />
                    </div>
                    <Redirect to='/'/>
                </Switch>
            )}

            <SnackInfo
                snackInfo={snackInfo}
                handleClose={() =>
                    setSnackInfo(snackInfo => ({ ...snackInfo, open: false }))
                }
            />
        </Fragment>
    );
};

export default withRouter(ProtectedRoutes);
