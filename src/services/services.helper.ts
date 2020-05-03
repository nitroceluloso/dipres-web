
import { enviromentVariables } from "../common/config";

export const urlPrefix = (suffix: string) => `${enviromentVariables.BASE_URL}/${suffix}`;