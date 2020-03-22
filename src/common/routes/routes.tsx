
import * as React from 'react';
import { RoutesInterface } from "./types";
import { RouteProps, Route } from 'react-router-dom';

import { CriticalErrorContainer } from "../../section/critical-error/CriticalError.container";
import { HomeContainer } from "../../section/home/Home.container";
import { ProgramContainer } from "../../section/program/Program.container";

export const routes: Array<RoutesInterface> = [
    {
        key: "ERROR",
        path: "/ups",
        exact: true,
        component: CriticalErrorContainer
    },
    {
        key: "HOME",
        path: "/home",
        exact: true,
        component: HomeContainer
    },
    {
        key: "PROGRAM",
        path: "/program",
        exact: true,
        component: ProgramContainer
    }
];

export const RouteGenerator = () => {
    return (
        <React.Fragment>
            {
                routes.map((el: RouteProps) => {
                    return <Route {...el} />
                })
            }
        </React.Fragment>
    )
}