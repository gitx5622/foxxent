import axiosConfig from '../../config/axiosConfig';

import {
    LOADING,
    SUCCESS,
    ERROR,
} from '../dispatchTypes';

export const checkDetails = (dispatchCheckDetails, bodyData) => {
    dispatchCheckDetails({
        type: LOADING,
    });

    try {
        axiosConfig
            .post('/sessions', bodyData)
            .then(response => {
                localStorage.currentUser = JSON.stringify(response.data);
                localStorage.admin = true;
                localStorage.token = response.headers['x-toprated-token'];
                dispatchCheckDetails({
                    type: SUCCESS,
                });
            })
            .catch(error => {
                if (error.response.status === 400) {
                    dispatchCheckDetails({
                        type: ERROR,
                        errorMessage: "Username and password don't match",
                    });
                } else if (error.response.status === 404) {
                    dispatchCheckDetails({
                        type: ERROR,
                        errorMessage: 'Account not registered for a merchant account.',
                    });
                } else {
                    dispatchCheckDetails({
                        type: ERROR,
                        errorMessage: error.response.data.error_message,
                    });
                }
            })
            .catch(() => {
                dispatchCheckDetails({
                    type: ERROR,
                    errorMessage:
                        'Something went wrong. Kindly refresh your browser and try again',
                });
            });
    } catch (error) {
        dispatchCheckDetails({
            type: ERROR,
            errorMessage: 'Something went wrong, try again later!',
        });
    }
};


