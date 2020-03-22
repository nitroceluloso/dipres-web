
import { ProgramPayload, ActionProgram, ProgramTypes } from "./types";
import { defaultState } from "./program.helper";

export const programReducer = (state = defaultState, action: ActionProgram): ProgramPayload => {

    let newState;

    switch (action.type) {

        case "SET_PROGRAM":
            newState = action.payload;
        break;

        case "FETCH_PROGRAM":
            newState = action.payload;
        break;

        default:
            newState = state;
        break;
    }

    return newState;
}