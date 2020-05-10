
import { RoutesInterface as RoutesInterfaceType , RoutesKeys as RoutesKeysType } from "../../common/routes/types";

export type RoutesInterface = RoutesInterfaceType;
export type RoutesKeys = RoutesKeysType;


export interface NavigationMenuProps {}

export interface NavigationMenuContainer extends NavigationMenuProps {
    redirect: Function;
}

export interface MenuGeneratorProps {
    redirect: Function;
    selectedMenu: string;
    setSelectedMenuItem: Function;
}