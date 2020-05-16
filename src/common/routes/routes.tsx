
import { RoutesInterface } from "./types";

import { CriticalErrorContainer } from "../../sections/critical-error/CriticalError.container";
import { HomeContainer } from "../../sections/home/Home.container";
import { ProgramContainer } from "../../sections/program/Program.container";
import { MinistryContainer } from "../../sections/ministry/Ministry.container";

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
        path: ["/program", "/"],
        exact: true,
        component: ProgramContainer
    },
    {
        key: "MINISTRY",
        path: ["/ministry"],
        exact: true,
        component: MinistryContainer
    }
];