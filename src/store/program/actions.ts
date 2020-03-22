
import { actionCreator } from "../store.helper"
import { ProgramPayload, ProgramTypes } from "./types";
import { ProgramService } from "../../services/program/Program.service";
import { thunkWrapper } from "../types";

import { startCall, checkLoading, endCall } from "../loading-modal/action";

export const setPrograms = <T extends any>(programList: Array<T>) => {
    return actionCreator<ProgramTypes, ProgramPayload>("SET_PROGRAM", {
        list: programList
    });
}

export const fetchProgramAction = (): thunkWrapper => {
    return (dispatch) => {
        dispatch(startCall());
        return ProgramService.getPrograms()
            .then((resp) => {
                dispatch(setPrograms(resp));
            })
            .finally(() => {
                dispatch(endCall);
                dispatch(checkLoading);
            });
    }
}