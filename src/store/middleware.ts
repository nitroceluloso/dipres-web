
import thunk from "redux-thunk";
import { enviromentVariables } from "../config/index";
import { createLogger } from "redux-logger"

const middlewares: Array<any> = [
    thunk
];

if (enviromentVariables.ENVIROMENT === `develop`) {
    const logger = createLogger({
        collapsed: true
    });
    middlewares.push(logger);
}

export { middlewares };