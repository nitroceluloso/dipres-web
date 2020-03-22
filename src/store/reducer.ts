
import { criticalErrorReducer as criticalError } from "./critical-error/reducer";
import { loadingModalReducer as loading } from "./loading-modal/reducer";
import { redirectReducer as redirect} from "./redirect/reducer";
import { programReducer as program } from "./program/reducer";

export const globalReducer = {
    criticalError,
    loading,
    redirect,
    program
}