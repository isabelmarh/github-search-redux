import { combineReducers } from 'redux'
import alert from './alertReducer';
import github from './githubReducer';

export default combineReducers({ alert, github})