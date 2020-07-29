
import { Action } from "../types";

export type criticalErrorStatus = "SET_ERROR" | "CLEAR_ERROR";

export interface criticalErrorPayload {
    code: string;
    message: string;
}

export type actionCriticalError = Action<criticalErrorStatus, criticalErrorPayload>;