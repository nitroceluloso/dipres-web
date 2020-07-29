
import { actionCreator } from "../store.helper";
import { MinistryPayload, MinistryTypes } from "./types";
import { MinistryService } from "../../services/ministry/Ministry.service";

import { startCall, checkLoading, endCall } from "../loading-modal/loadingModal.action";
import { MinistryService as IMinistryService } from "../../services/ministry/types";


export const setMinistry = (programList: Array<IMinistryService> = []) => {
    return actionCreator<MinistryTypes, MinistryPayload>("SET_MINISTRY", { list: programList });
}


export const fetchMinistryAction = () => {
    return (dispatch: Function) => {
        dispatch(startCall());
        return MinistryService.get()
            .then((resp) => {
                dispatch(setMinistry(resp));
            })
            .catch(() => {
                setMinistry();
            })
            .finally(() => {
                dispatch(endCall);
                dispatch(checkLoading);
            });
    }
}