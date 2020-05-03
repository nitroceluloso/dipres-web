
import { RoutesInterface } from "./types";

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
        path: ["/program", "/"],
        exact: true,
        component: ProgramContainer
    }
];