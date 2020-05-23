
import { connect } from 'react-redux';
import NavigationMenu from "./NavigationMenu.component";
import { redirect } from "../../store/redirect/redirect.action";
import { RoutesKeys } from '../../routes/types';

export const mapStateToProps = () => ({})

export const mapDispatchToProps = (dispatch: Function) => {
    return {
        redirect: (key: RoutesKeys) => { dispatch(redirect(key)) }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationMenu);