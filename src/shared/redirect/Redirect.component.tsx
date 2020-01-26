
import * as React from 'react';

import { Redirect as RedirectComponent } from "react-router";
import { RedirectProps } from "./types";
// import { clearStateRedirect } from "../../common/redux/redirect";
import { findRoute, getPath } from "./Redirect.helper";

const RedirectWrapper = (props: RedirectProps) => {

    const routeElement = findRoute(props.to);
    const path = getPath(routeElement);

    // if(props.flagRedirect) clearStateRedirect();

    return (
        <div>
            {
                props.flagRedirect &&
                <RedirectComponent push to={path} />
            }
        </div>
    );
}

export default RedirectWrapper;