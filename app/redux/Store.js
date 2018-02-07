import { createStore, applyMiddleware } from 'redux';
import rootReducers from '../reducers';
import thunk from 'redux-thunk';

/* Create Redux Store object to store the reducers data */
const store = createStore(rootReducers, {}, applyMiddleware(thunk));

export default store;