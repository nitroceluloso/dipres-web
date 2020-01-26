
import { RoutesKeys } from "../../common/routes/types";
import { ActionI } from "../types";

export type redirectStatus = "DO_REDIRECT" | "CLEAR_REDIRECT";

export interface redirectPayload {
    flagRedirect: boolean;
    destination: RoutesKeys;
}

export type redirectAction = ActionI<redirectStatus,redirectPayload>;