
import { connect } from 'react-redux';
import { GlobalState } from "../../store/types";
import { grouByResult } from "../../store/program/program.selector";
import ProgramComponent from "./Program.component";

export const mapStateToProps = (state: GlobalState) => {
    return {
        programListRaw: state.program.list,
        programByResult: grouByResult(state)
    }
}

export const mapDispatchToProps = (dispatch: Function) => {
    return {};
}

export const ProgramContainer = connect(mapStateToProps, mapDispatchToProps)(ProgramComponent);