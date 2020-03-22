
import { Program } from "../../services/program/types";
import { RouteProps } from "react-router";
import {  } from "module";

export interface ProgramProps {
    programListRaw: Array<Program>
}

export interface ProgramSectionProps extends ProgramProps, RouteProps {};

export interface ProgramState {}