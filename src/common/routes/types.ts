
import { RouteProps } from "react-router";

export type RoutesKeys =
    "HOME" |
    "ERROR";

export interface RoutesInterface extends RouteProps {
    key: RoutesKeys
}