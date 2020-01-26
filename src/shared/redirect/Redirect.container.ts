
import { connect } from 'react-redux';
import Redirect from './Redirect.component';
import { RedirectMapState } from './types';

export const mapStateToProps = (state: Partial<RedirectMapState>) => {
    return {
        flagRedirect: state.redirect?.flagRedirect || false,
        to: state.redirect?.to || "ERROR",
    }
}

export default connect(mapStateToProps, {})(Redirect);