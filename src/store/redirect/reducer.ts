
import { redirectAction } from "./types";
import { defaultState } from "./redirect.helper";

export const redirectReducer = (state = defaultState, action: redirectAction) => {

    let response;

    switch (action.type) {
        case "DO_REDIRECT":
            response = action.payload;
        break;

        case "CLEAR_REDIRECT":
            response = action.payload;
        break;

        default:
            response = state;
        break;
    }

    return response;
}