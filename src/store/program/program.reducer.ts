
import { ProgramPayload, ActionProgram } from "./types";
import { defaultState } from "./program.store.helper";

export const programReducer = (state = defaultState, action: ActionProgram): ProgramPayload => {

    switch (action.type) {

        case "SET_PROGRAM":
            return action.payload;

        case "FETCH_PROGRAM":
            return action.payload;

        default:
            return state;
    }
}