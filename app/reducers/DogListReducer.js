import * as ActionTypes from '../actions';

/* Initialization of State */
const initialState = {
    data: {},
    isProgress: false,
    error: undefined,
}

/* Get the Dog Image List data */
const dogList = (state = initialState, action) => { 
    switch (action.type) {
        /* Loading Case */
        case ActionTypes.DOG_LIST_LOADING:
            return {
                isProgress: true,
            };
        /*  Get Successful response */
        case ActionTypes.DOG_LIST_DATA_RECEIVED:
            return {
                ...state,
                isProgress: false,
                data: action.response,
                error: null,
            };
        /* Get error response */
        case ActionTypes.DOG_LIST_ERROR:
            return {
                isProgress: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default dogList;