import { combineReducers } from 'redux';
import DogListReducer from './DogListReducer';

/* Combine all the Reducers in RootReducer */
const rootReducers = combineReducers({
    DogListReducer
});

export default rootReducers;