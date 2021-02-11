import { SET_ALERT } from "../actions/types";
const initialState = null;

const alert = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_ALERT:
            return payload;
        default:
            return state;
    }
};
export default alert;

