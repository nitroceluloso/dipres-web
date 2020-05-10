
import * as React from 'react';

import { callbakParam } from '../../../../helpers/parser/callback-param/callbackParam.parser';
import { NavigationMenuItemProps } from "./types";

const NavigationMenuItem: React.SFC<NavigationMenuItemProps> = ({ id, redirect, onClick, name, selected }) => {
    return (
        <li onClick={callbakParam([redirect, onClick], id)} className={`${selected ? 'selected' : ''}`}>
            <span>{name}</span>
        </li>
    );
}

export default NavigationMenuItem;