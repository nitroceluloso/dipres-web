
import { LoadingModalType, modalPayload } from "./types";
import { actionCreator } from "../store.helper";

export const checkLoading = () => {
    return actionCreator<LoadingModalType, modalPayload>("CHECK_LOADING", { displayModal: true });
}

export const startCall = () => {
    return actionCreator<LoadingModalType, modalPayload>("START_CALL", { counter: +1});
}

export const endCall = () => {
    return actionCreator<LoadingModalType, modalPayload>("END_CALL", { counter: -1});
}