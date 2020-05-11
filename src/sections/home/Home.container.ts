
import { connect } from 'react-redux';
import { GlobalState } from "../../store/types";
import HomeComponent from "./Home.component";

export const mapStateToProps = (state: GlobalState) => {
    return {}
}

export const mapDispatchToProps = (dispatch: Function) => {
    return {};
}

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);