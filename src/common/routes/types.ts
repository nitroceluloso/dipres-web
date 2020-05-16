
import { RouteProps } from "react-router";

export type RoutesKeys =
    "HOME" |
    "ERROR" |
    "PROGRAM" |
    ""
;

export interface RoutesInterface extends RouteProps {
    key: RoutesKeys
}