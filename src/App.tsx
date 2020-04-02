
import React from 'react';
import "normalize.css"

import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter } from "react-router-dom";
import { RouteGenerator } from "./common/routes/routes";

import Redirect from "./shared/redirect/Redirect.container";

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Redirect/>
				<RouteGenerator/>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
