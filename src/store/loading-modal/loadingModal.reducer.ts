
import { ActionLoadingModal, modalPayload } from "./types";
import { defaultState, setDisplayModal, updateCounter } from "./loadingModal.helper";
import { updateState } from "../store.helper";

export const loadingModalReducer = (state = defaultState, action: ActionLoadingModal): Partial<modalPayload> => {

    switch (action.type) {
        case "CHECK_LOADING":
            return updateState<ActionLoadingModal, modalPayload>(action, {
                displayModal: setDisplayModal(state)
            });

        case "START_CALL":
            return updateState<ActionLoadingModal, modalPayload>(action, {
                counter: updateCounter(state, action)
            });

        case "END_CALL":
            return updateState<ActionLoadingModal, modalPayload>(action, {
                counter: updateCounter(state, action)
            });

        default:
            return state;
    }
}