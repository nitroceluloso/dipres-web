
import { actionCreator } from "../store.helper";
import { redirectStatus, redirectPayload, redirectParam } from "./types";
import { defaultState } from "./redirect.helper";

export const redirect = (data: redirectParam) => {
    return actionCreator<redirectStatus, redirectPayload>("DO_REDIRECT", {
        destination: data,
        flagRedirect: true,
    });
}

export const clearRedirect = () => {
    return actionCreator<redirectStatus, redirectPayload>("CLEAR_REDIRECT", defaultState);
}