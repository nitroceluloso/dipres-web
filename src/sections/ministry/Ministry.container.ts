
import { connect } from 'react-redux';
import { GlobalState } from "../../store/types";
import { linkMinistryToProgram, groupMinistryByEvaluation } from "../../store/ministry/Ministry.selector";
import MinistryComponent from "./Ministry.component";

import { fetchProgramAction } from '../../store/program/program.action';
import { fetchMinistryAction } from "../../store/ministry/Ministry.action";

export const mapStateToProps = (state: GlobalState) => {
    const ministryList = state.ministry.list;
    const programList = state.program.list;
    const mergedProgramListByMinistry = linkMinistryToProgram(ministryList, programList);

    return {
        ministryList: mergedProgramListByMinistry,
        ministryChart: groupMinistryByEvaluation(mergedProgramListByMinistry)
    }
}

export const mapDispatchToProps = (dispatch: Function) => {
    return {
        getPrograms: () => { dispatch(fetchProgramAction()) },
        getMinistry: () => { dispatch(fetchMinistryAction()) }
    };
}

export const MinistryContainer = connect(mapStateToProps, mapDispatchToProps)(MinistryComponent);