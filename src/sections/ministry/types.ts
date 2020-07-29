
import { RouteProps } from "react-router";
import { MinistryListWithPlans } from "../../store/ministry/types";

export interface MinistryProps {
    ministryList: Array<MinistryListWithPlans>;
    ministryChart: Array<any>
}

export interface MinistrySectionProps extends MinistryProps, RouteProps  {
    getPrograms(): void;
    getMinistry(): void;
};

export interface MinistryState {}