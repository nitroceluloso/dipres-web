
import { Program } from "../../services/program/types";
import { RouteProps } from "react-router";
import { Dictionary } from "../../helpers/types";
import { MinistryService } from "../../services/ministry/types";

export interface MinistryProps {
    ministryList: Array<MinistryService>;
    ministryChart: Array<any>
}

export interface MinistrySectionProps extends MinistryProps, RouteProps  {
    getPrograms(): void;
    getMinistry(): void;
};

export interface MinistryState {}