
import { connect } from 'react-redux';
import { GlobalState } from "../../store/types";
import { grouByResult } from "../../store/program/program.selector";
import ProgramComponent from "./Program.component";

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

export const ProgramContainer = connect(mapStateToProps, mapDispatchToProps)(ProgramComponent);