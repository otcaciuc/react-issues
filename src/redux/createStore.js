import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import application from './combineReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    application,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
