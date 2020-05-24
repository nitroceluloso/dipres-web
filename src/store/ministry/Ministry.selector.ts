
import { Program } from "../../services/program/types";
import { MinistryService } from "../../services/ministry/types";
import { Dictionary } from "../../helpers/types";

const getSlimProgram = (program : Program) => {
    const { evaluation, year, publicService } = program;
    return {
        evaluation,
        year,
        publicService
    }
}

const dictionaryEvaluation: Dictionary<string> = {
    "1": "mal",
    "2": "bajo",
    "3": "medio",
    "4": "buen"
}

const setEvaluationDescription = (calification: number) => dictionaryEvaluation[calification.toString()];

export const linkMinistryToProgram = ( ministryList: Array<MinistryService>, programList: Array<Program> ) => {
    const indexedPrograms: Dictionary<any> = programList.reduce(indexProgramFn, {});
    return ministryList.map(ministryMapFn(indexedPrograms));
}

const indexProgramFn = (acm: any, act: Program) => {
    const key = act.ministry.code;
    const possibleElement = acm[key];

    return {
        ...acm,
        [key]: possibleElement ? possibleElement.concat(getSlimProgram(act)) : [getSlimProgram(act)]
    }
}

const ministryMapFn = (indexedPrograms: Dictionary<any>) => (el: MinistryService) => {
    const linkedArray = indexedPrograms[el.code] || [];
    const acumulatorCalification = linkedArray.reduce( (prev: any, act: any) => prev + act.evaluation.value, 0);
    const averageCalification = Math.round(acumulatorCalification / linkedArray.length);

    return {
        ...el,
        programList: linkedArray,
        evaluation: {
            value: averageCalification,
            description: setEvaluationDescription(averageCalification) || '-'
        }
    }
}