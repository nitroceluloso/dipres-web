
import { defaultState } from "./criticalError.helper";
import { actionCriticalError, criticalErrorPayload } from "./types";

export const criticalErrorReducer = (state = defaultState, action: actionCriticalError): criticalErrorPayload => {

    let newState;

    switch (action.type) {

        case "SET_ERROR":
            newState = action.payload;
        break;

        case "CLEAR_ERROR":
            newState = action.payload;
        break;

        default:
            newState = state;
        break;
    }

    return newState;
}