
import * as React from 'react';

import NavigationMenuItem from "./components/navigation-menu-item/NavigationMenuItem.component";
import { routes } from "../../common/routes/routes";
import { MenuGeneratorProps, RoutesInterface, RoutesKeys } from './types';

const menuItems = new Map<string, RoutesKeys>([
    ['Programas', 'PROGRAM'],
    ['Ministerios', ''],
    ['Servicios Publicos', ''],
    ['Sobre el sitio', ''],
]);

export const menuGeneration = (params: MenuGeneratorProps) =>
    Array.from(menuItems)
        .map(generateListItem(params));


const generateListItem = ( { redirect, selectedMenu, setSelectedMenuItem }: MenuGeneratorProps ) =>
    (el: Array<string>, idx: number) => {
        const [ name, id ] = el;
        const selected = id !== '' && selectedMenu === id;

        return (
            <NavigationMenuItem
                key={idx}
                id={id}
                name={name}
                redirect={redirect}
                selected={selected}
                onClick={setSelectedMenuItem}
            />
        )
}

export const checkActualPath = () => {
    const { location }  = window || {};
    const { pathname = '' } = location;

    const selectedRoute = routes.find(findSelectedRoute(pathname));

    return selectedRoute ? selectedRoute.key : '-';
}

const findSelectedRoute = (pathname: string) => <T extends RoutesInterface>(el: T) => {
    const isString = typeof el.path === 'string';
    return isString ? el.path === pathname : el.path?.includes(pathname)
}