
import { redirectAction } from "./types";
import { defaultState } from "./redirect.helper";

export const redirectReducer = (state = defaultState, action: redirectAction) => {

    switch (action.type) {
        case "DO_REDIRECT":
            return action.payload;

        case "CLEAR_REDIRECT":
            return action.payload;

        default:
            return state;
    }
}