
import { routes } from "../../routes/routes.helper";
import { RoutesInterface } from "../../routes/types";

/**
 * Return the route by the key provided
 * @param to key for the route
 */
export const findRoute = (to: string): RoutesInterface | undefined => routes.find((el) => el.key === to);


export const getPath = (element: RoutesInterface | undefined): string => {
    if(element === undefined || element.path === undefined) return "";

    return Array.isArray(element.path)? element.path[0] : element.path;
}