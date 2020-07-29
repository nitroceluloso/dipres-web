
import { config } from "dotenv";
import { version } from "../../package.json";

config();

const baseConfig = {
    ENVIROMENT: process.env.REACT_APP_ENVIROMENT || "develop",
    HOST: process.env.REACT_APP_BASE_URL || "localhost",
    PORT: process.env.REACT_APP_BASE_PORT || 3001,
    APP_VERSION: version,
}

export const enviromentVariables = {
    ...baseConfig,
    BASE_URL: `http://${baseConfig.HOST}:${baseConfig.PORT}/api`,
}