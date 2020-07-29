
import { RouteProps } from "react-router";

export type RoutesKeys =
    "" |
    "HOME" |
    "ERROR" |
    "PROGRAM" |
    "MINISTRY" |
    "PUBLIC-SERVICE" |
    "ABOUT"
;

export interface RoutesInterface extends RouteProps {
    key: RoutesKeys
}