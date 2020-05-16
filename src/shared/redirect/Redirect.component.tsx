
import * as React from 'react';

import { Redirect as RedirectComponent } from "react-router";
import { RedirectProps } from "./types";
import { findRoute, getPath } from "./Redirect.helper";

const RedirectWrapper = (props: RedirectProps) => {

    const routeElement = findRoute(props.to);
    const path = getPath(routeElement);

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