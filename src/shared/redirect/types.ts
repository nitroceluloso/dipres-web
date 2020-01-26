
import { RoutesKeys } from "../../common/routes/types";

export interface RedirectProps {
    flagRedirect: boolean,
    to: RoutesKeys,
}

export interface RedirectMapState{
    redirect: RedirectProps
}