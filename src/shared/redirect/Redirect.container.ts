
import { connect } from 'react-redux';
import Redirect from './Redirect.component';
import { GlobalState } from '../../store/types';

export const mapStateToProps = (state: Partial<GlobalState>) => {

    return {
        flagRedirect: state.redirect?.flagRedirect || false,
        to: state.redirect?.destination || "ERROR",
    }
}

export default connect(mapStateToProps, {})(Redirect);