
import { ActionI } from "../types";
import { Program } from "../../services/program/types";

export type ProgramTypes = "FETCH_PROGRAM" | "SET_PROGRAM";

export interface ProgramPayload {
    list: Array<Program>
}

export type ActionProgram = ActionI<ProgramTypes, ProgramPayload>;