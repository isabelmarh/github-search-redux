import { SET_USERS, SET_LOADING, RESET_LOADING, SEARCH_USERS, CLEAR_USERS, GET_USER, SET_REPOS } from "../actions/types";

const initialState = {
    users: [],
    loading: false,
    user: {},
    repos: [],
    title: "Github App",
    icon: "fab-fa-twitter"
};

const github = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_USERS:
            return {
                ...state,
                users: payload,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case RESET_LOADING:
            return {
                ...state,
                loading: false
            };
        case SEARCH_USERS:
            return {
                ...state,
                users: payload
            };
        case CLEAR_USERS:
            return {
                ...state,
                users: payload
            };
        case GET_USER:
            return {
                ...state,
                user: payload
            };
        case SET_REPOS:
            return {
                ...state,
                repos: payload
            };
        default:
            return state;
    }
};
export default github;
