
import { Action } from "../types";
import { MinistryService } from "../../services/ministry/types";
import { ProgramLite } from "../program/types";
import { Program } from "../../services/program/types";

export type MinistryTypes = "FETCH_MINISTRY" | "SET_MINISTRY";

export interface MinistryPayload {
    list: Array<MinistryService>
}

export type ActionMinistry = Action<MinistryTypes, MinistryPayload>;

export type WithPlans = {
    programList: Array<ProgramLite>;
    programListQuantity: number;
    evaluation: {
        value: Number;
        description: String;
    }
};

export type MinistryListWithPlans = MinistryService & WithPlans;