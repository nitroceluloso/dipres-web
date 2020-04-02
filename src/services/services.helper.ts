
import { enviromentVariables } from "../common/config";

export const urlPrefix = (suffix: string) => {
    return `${enviromentVariables.BASE_URL}/${suffix}`;
}