
import { AxiosFacade } from "../axios/Axios.service";
import { urlPrefix } from "../services.helper";
import { Program } from "./types";

const programPath = {
    "get": urlPrefix("v1/program")
}

export class ProgramService {

    static getPrograms(): Promise<Array<Program>> {
        return AxiosFacade.get(programPath.get);
    }

}