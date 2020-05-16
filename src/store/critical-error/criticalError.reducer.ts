
import { defaultState } from "./criticalError.helper";
import { actionCriticalError, criticalErrorPayload } from "./types";

export const criticalErrorReducer = (state = defaultState, action: actionCriticalError): criticalErrorPayload => {

    switch (action.type) {

        case "SET_ERROR":
            return action.payload;

        case "CLEAR_ERROR":
            return action.payload;

        default:
            return state;
    }
}