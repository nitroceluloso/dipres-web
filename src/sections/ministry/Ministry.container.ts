
import { connect } from 'react-redux';
import { GlobalState } from "../../store/types";
import { linkMinistryToProgram } from "../../store/ministry/Ministry.selector";
import MinistryComponent from "./Ministry.component";

import { fetchProgramAction } from '../../store/program/program.action';
import { fetchMinistryAction } from "../../store/ministry/Ministry.action";

export const mapStateToProps = (state: GlobalState) => {
    const ministryList = state.ministry.list;
    const programList = state.program.list;

    return {
        ministryList: linkMinistryToProgram(ministryList, programList),
    }
}

export const mapDispatchToProps = (dispatch: Function) => {
    return {
        getPrograms: () => { dispatch(fetchProgramAction()) },
        getMinistry: () => { dispatch(fetchMinistryAction()) }
    };
}

export const MinistryContainer = connect(mapStateToProps, mapDispatchToProps)(MinistryComponent);