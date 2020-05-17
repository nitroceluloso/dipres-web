
import { Action as IAction, Dispatch } from "redux";

import { criticalErrorPayload } from "./critical-error/types";
import { modalPayload } from "./loading-modal/types";
import { redirectPayload } from "./redirect/types";
import { ProgramPayload } from "./program/types";

import { MinistryPayload } from "./ministry/types";

export interface Action<A, B> extends IAction<A>{
    payload: B
}

export interface Payload<T = any> {
    payload: T;
}

export interface GlobalState {
    criticalError: criticalErrorPayload;
    loading: modalPayload;
    redirect: redirectPayload;
    program: ProgramPayload;
    ministry: MinistryPayload;
}