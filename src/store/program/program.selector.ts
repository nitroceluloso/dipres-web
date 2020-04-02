
import { GlobalState } from "../types";
import _, { Dictionary } from "lodash";

export const grouByResult = (state: GlobalState): Dictionary<number> => {
    const { list } = state.program;
    return _.countBy(list, 'evaluation.description');
}

