
import { actionCreator } from "../store.helper"
import { criticalErrorStatus, criticalErrorPayload } from "./types"
import { defaultState } from "./criticalError.helper";

export const setError = (data: criticalErrorPayload) => {
    return actionCreator<criticalErrorStatus, criticalErrorPayload>("SET_ERROR", data);
}

export const clearError = () => {
    return actionCreator<criticalErrorStatus, criticalErrorPayload>("CLEAR_ERROR", defaultState);
}