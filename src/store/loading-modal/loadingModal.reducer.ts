
import { ActionLoadingModal, modalPayload } from "./types";
import { defaultState, setDisplayModal, updateCounter } from "./loadingModal.helper";
import { updateState } from "../store.helper";

export const loadingModalReducer = (state = defaultState, action: ActionLoadingModal): Partial<modalPayload> => {

    let newState: modalPayload;

    switch (action.type) {
        case "CHECK_LOADING":
            newState = updateState<ActionLoadingModal, modalPayload>(action, {
                displayModal: setDisplayModal(state)
            });
        break;

        case "START_CALL":
            newState = updateState<ActionLoadingModal, modalPayload>(action, {
                counter: updateCounter(state, action)
            });
        break;

        case "END_CALL":
            newState = updateState<ActionLoadingModal, modalPayload>(action, {
                counter: updateCounter(state, action)
            });
        break;

        default:
            newState = state;
        break;
    }

    return newState;
}