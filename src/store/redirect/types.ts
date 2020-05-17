
import { RoutesKeys } from "../../common/routes/types";
import { Action } from "../types";

export type redirectStatus = "DO_REDIRECT" | "CLEAR_REDIRECT";

export type redirectParam = RoutesKeys;

export interface redirectPayload {
    flagRedirect: boolean;
    destination: RoutesKeys;
}

export type redirectAction = Action<redirectStatus,redirectPayload>;