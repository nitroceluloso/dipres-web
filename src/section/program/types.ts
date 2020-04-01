
import { Program } from "../../services/program/types";
import { RouteProps } from "react-router";
import { DispatchProp } from 'react-redux';
import { Dictionary } from "../../helpers/types";

export interface ProgramProps {
    programListRaw: Array<Program>,
    programByResult: Dictionary<number>
}

export interface ProgramSectionProps extends ProgramProps, RouteProps, DispatchProp  {};

export interface ProgramState {}