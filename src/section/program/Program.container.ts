
import { connect } from 'react-redux';
import { GlobalState } from "../../store/types";
import ProgramComponent from "./Program.component";

export const mapStateToProps = (state: GlobalState) => {
    return {
        programListRaw: state.program.list
    }
}

export const mapDispatchToProps = (dispatch: Function) => {
    return {};
}

export const ProgramContainer = connect(mapStateToProps)(ProgramComponent);