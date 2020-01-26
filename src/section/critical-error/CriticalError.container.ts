
import { CritalError } from "./CriticalError.component";
import { connect } from "react-redux";
import { GlobalState } from "../../store/types";

const mapStateToProps = (state: Partial<GlobalState>) => {
    return {
        criticalError: state.criticalError
    }
}

const mapDispatchToProps = () => {
    return {}
}

export const CriticalErrorContainer = connect(mapStateToProps, mapDispatchToProps)(CritalError);