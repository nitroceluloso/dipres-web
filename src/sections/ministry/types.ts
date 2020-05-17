
import { Program } from "../../services/program/types";
import { RouteProps } from "react-router";
import { Dictionary } from "../../helpers/types";
import { MinistryService } from "../../services/ministry/types";

export interface ProgramProps {
    ministryList: Array<MinistryService>
}

export interface ProgramSectionProps extends ProgramProps, RouteProps  {
    getPrograms(): void;
    getMinistry(): void;
};

export interface ProgramState {}