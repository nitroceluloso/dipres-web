
import React, { useState } from 'react';
import './NavigationMenu.scss';
import { NavigationMenuContainer } from "./types";

import { menuGeneration, checkActualPath } from "./NavigationMenu.helper";

const NavigationMenu: React.SFC<NavigationMenuContainer> = ({ redirect }) => {

    const [ selectedMenu, setSelectedMenuItem ] = useState(checkActualPath());
    const params = { redirect, selectedMenu, setSelectedMenuItem };

    return (
        <nav>
            <ul>
                { menuGeneration(params) }
            </ul>
        </nav>
    );
}

export default NavigationMenu;