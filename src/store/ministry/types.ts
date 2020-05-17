
import { Action } from "../types";
import { MinistryService } from "../../services/ministry/types";

export type MinistryTypes = "FETCH_MINISTRY" | "SET_MINISTRY";

export interface MinistryPayload {
    list: Array<MinistryService>
}

export type ActionMinistry = Action<MinistryTypes, MinistryPayload>;