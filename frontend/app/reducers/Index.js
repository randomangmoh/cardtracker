// Lib imports
import { combineReducers } from 'redux';

// Reducers
import collectionReducer from './collectionReducer'

// Combine the reducers to pass to the store
const rootReducer = combineReducers({
    collectionReducer
});

export default rootReducer;
