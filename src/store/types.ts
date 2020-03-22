
import { Action } from "redux";

import { criticalErrorPayload } from "./critical-error/types";
import { modalPayload } from "./loading-modal/types";
import { redirectPayload } from "./redirect/types";
import { ProgramPayload } from "./program/types";

export interface ActionI<A, B> extends Action<A>{
    payload: B
}

export interface Payload {
    payload: any;
}

export interface GlobalState {
    criticalError: criticalErrorPayload;
    loading: modalPayload;
    redirect: redirectPayload;
    program: ProgramPayload
}

export interface thunkWrapper {
    (dispatch: Function, getState: any) : Promise<any>;
}