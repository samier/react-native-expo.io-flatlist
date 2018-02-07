import * as ActionTypes from './index';
import Constants from '../constants/Constants';

/* Call API and Get the Affenpinscher Dog Images */
export function getDogListAction() {
    return (dispatch) => {
        dispatch(isLoading());
        fetch(`${Constants.apiURL}breed/affenpinscher/images`)
            .then(function (response) {
                if (response.status === 200) {
                    return response.json();
                } else {
                    return 'error';
                }
            })
            .then(function (response) {
                if (response === 'error') {
                    /* If getting error response then call errorResponse */
                    dispatch(errorResponse(response))
                } else {
                    /* If getting success response then call successResponse */
                    dispatch(successResponse(response));
                }   
            })
            .catch(error => dispatch(errorResponse(error)));
    }
}

function isLoading() { return { type: ActionTypes.DOG_LIST_LOADING, } }
function successResponse(response) { return { type: ActionTypes.DOG_LIST_DATA_RECEIVED, response } }
function errorResponse(error) { return { type: ActionTypes.DOG_LIST_ERROR, error } }