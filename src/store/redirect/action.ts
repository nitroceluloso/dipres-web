
import { actionCreator } from "../store.helper";
import { redirectStatus, redirectPayload } from "./types";
import { defaultState } from "./redirect.helper";

export const redirect = (data: redirectPayload) => {
    return actionCreator<redirectStatus, redirectPayload>("DO_REDIRECT", {
        ...data,
        flagRedirect: true,
    });
}

export const clearRedirect = () => {
    return actionCreator<redirectStatus, redirectPayload>("CLEAR_REDIRECT", defaultState);
}