
import { enviromentVariables } from "../config";

export const urlPrefix = (suffix: string) => `${enviromentVariables.BASE_URL}/${suffix}`;