
import React from 'react';
import "normalize.css"
import "./assets/styles/index.scss";

import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter } from "react-router-dom";
import { RouteGenerator } from "./common/routes/routes.component";

import Redirect from "./shared/redirect/Redirect.container";
import NavigationMenu from "./shared/navigation-menu/NavigationMenu.container";

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<NavigationMenu/>
				<Redirect/>
				<RouteGenerator/>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
