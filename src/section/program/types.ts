
import { Program } from "../../services/program/types";
import { RouteProps } from "react-router";
import { Dictionary } from "../../helpers/types";

export interface ProgramProps {
    programListRaw: Array<Program>,
    programByResult: Dictionary<number>
}

export interface ProgramSectionProps extends ProgramProps, RouteProps  {
    getPrograms(): void;
};

export interface ProgramState {}