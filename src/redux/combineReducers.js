import { combineReducers } from 'redux';
import issues from './reducers/Issues.reducer';
import generic from './reducers/Generic.reducer';

export default combineReducers({ issues, generic });
