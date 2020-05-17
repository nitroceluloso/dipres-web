
import { criticalErrorReducer as criticalError } from "./critical-error/criticalError.reducer";
import { loadingModalReducer as loading } from "./loading-modal/loadingModal.reducer";
import { redirectReducer as redirect} from "./redirect/redirect.reducer";
import { programReducer as program } from "./program/program.reducer";

import { ministryReducer as ministry } from "./ministry/Ministry.reducer";

export const globalReducer = {
    criticalError,
    loading,
    redirect,
    program,
    ministry
}