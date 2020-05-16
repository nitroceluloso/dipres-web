
import * as React from 'react';
import { RouteProps, Route } from 'react-router-dom';
import { routes } from "./routes";

export const RouteGenerator = () => {
    return (
        <>
        {
            routes.map((el: RouteProps) => <Route {...el} />)
        }
        </>
    )
}