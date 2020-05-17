
import { MinistryPayload, ActionMinistry } from "./types";

const defaultState = {
    list: []
}

export const ministryReducer = (state = defaultState, action: ActionMinistry): MinistryPayload => {

    switch (action.type) {

        case "SET_MINISTRY":
            return action.payload;

        case "FETCH_MINISTRY":
            return action.payload;

        default:
            return state;
    }
}