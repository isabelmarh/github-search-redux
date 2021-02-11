import { SET_ALERT } from "./types";

export const showAlert = (msg, type) => {
    return (dispatch) => {
        dispatch({ type: SET_ALERT, payload: { msg, type } });
        setTimeout(() => {
            dispatch({ type: SET_ALERT, payload: null });
        }, 4000);
    };
};
