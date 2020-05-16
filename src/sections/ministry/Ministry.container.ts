
import { connect } from 'react-redux';
import { GlobalState } from "../../store/types";
import { grouByResult } from "../../store/program/program.selector";
import ProgramComponent from "./Ministry.component";

import { fetchProgramAction } from '../../store/program/program.action';

export const mapStateToProps = (state: GlobalState) => {
    return {
        programListRaw: state.program.list,
        programByResult: grouByResult(state)
    }
}

export const mapDispatchToProps = (dispatch: Function) => {
    return {
        getPrograms: () => { dispatch(fetchProgramAction()) }
    };
}

export const MinistryContainer = connect(mapStateToProps, mapDispatchToProps)(ProgramComponent);