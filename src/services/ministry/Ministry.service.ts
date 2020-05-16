
import { AxiosFacade } from "../axios/Axios.service";
import { urlPrefix } from "../services.helper";
import { MinistryService as IMinistryService } from "./types";

const ministryPath = {
    "get": urlPrefix("v1/ministry")
}

export class MinistryService {

    static get(): Promise<Array<IMinistryService>> {
        return AxiosFacade.get(ministryPath.get);
    }

}