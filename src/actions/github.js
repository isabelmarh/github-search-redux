import axios from 'axios';
import { SET_USERS, SET_LOADING, RESET_LOADING, SEARCH_USERS, CLEAR_USERS, GET_USER, SET_REPOS } from './types';

export const allUsers = () => {
    return async (dispatch) => {
        dispatch({ type: SET_LOADING });
        const res = await axios.get('https://api.github.com/users');
        dispatch({ type: SET_USERS, payload: res.data });
        dispatch({ type: RESET_LOADING });
    };
};

export const searchUsers = (text) => {
    return async (dispatch) => {
        dispatch({ type: SET_LOADING });
        const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
        dispatch({ type: SEARCH_USERS, payload: res.data.items });
        dispatch({ type: RESET_LOADING });
    };
};

export const clearUsers = () => {
    return (dispatch) => {
        dispatch({ type: CLEAR_USERS });
        dispatch({ type: SET_USERS, payload: [] });
    };
};

export const getUser = (login) => {
    return async (dispatch) => {
        dispatch({ type: SET_LOADING });
        const res = await axios.get(`https://api.github.com/users/${login}`);
        dispatch({ type: GET_USER, payload: res.data });
        dispatch({ type: RESET_LOADING });
    };
};

export const getUserRepos = (login) => {
    return async (dispatch) => {
        dispatch({ type: SET_LOADING });
        const res = await axios.get(`http://api.github.com/users/${login}/repos?per_page=5&sort=created:asc`);
        dispatch({ type: SET_REPOS, payload: res.data });
        dispatch({ type: RESET_LOADING });
    };
};
