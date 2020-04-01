
import { actionCreator } from "../store.helper";
import { ProgramPayload, ProgramTypes } from "./types";
import { ProgramService } from "../../services/program/Program.service";
import { thunkWrapper } from "../types";

import { startCall, checkLoading, endCall } from "../loading-modal/action";
import { Program } from "../../services/program/types";

export const setPrograms = (programList: Array<Program> = []) => {
    return actionCreator<ProgramTypes, ProgramPayload>("SET_PROGRAM", { list: programList });
}

export const fetchProgramAction = (): thunkWrapper => {
    return (dispatch) => {
        dispatch(startCall());
        return ProgramService.getPrograms()
            .then((resp) => {
                dispatch(setPrograms(resp));
            })
            .catch(() => {
                setPrograms([]);
            })
            .finally(() => {
                dispatch(endCall);
                dispatch(checkLoading);
            });
    }
}