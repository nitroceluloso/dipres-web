
import { modalPayload, ActionLoadingModal } from "./types";

export const defaultState: modalPayload = {
    counter: 0,
    displayModal: false
}

export const setDisplayModal = (state: modalPayload): boolean => {
    return (state.counter || 0) > 0? true : false;
}

export const updateCounter = (state: modalPayload, action: ActionLoadingModal) => {
    const stateCounter = state.counter || 0;
    const actionCounter = action.payload.counter || 0;
    return stateCounter + actionCounter;
}