import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Login from "./Login";
import Register from "./Register";

const Auth = ({
          match: {
              params: { type },
          },
      }) => {

    const renderScreens = () => {
        switch (type) {
            case 'login': {
                return <Login />;
            }

            case 'register':
                return <Register />;

            default:
                break;
        }
    };

    return (
            <div className="auth-wrapper">
                <Helmet>
                    <title>{`TOPRATED Professors - ${type.toUpperCase()}`}</title>
                </Helmet>
                <div className="auth-container">
                    <div className="form-section">
                        <div className="form-wrapper">
                            {renderScreens()}
                        </div>
                    </div>
                </div>
            </div>
    );
};

Auth.propTypes = {
    match: PropTypes.objectOf(PropTypes.any),
    history: PropTypes.objectOf(PropTypes.any),
};

export default withRouter(Auth);
