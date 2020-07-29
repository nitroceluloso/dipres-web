
import { Program } from "../../services/program/types";
import { MinistryService } from "../../services/ministry/types";
import { Dictionary } from "../../helpers/types";
import _ from "lodash";

import { MinistryListWithPlans } from "./types";
import { ProgramLite } from "../program/types";

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

export const linkMinistryToProgram = ( ministryList: Array<MinistryService>, programList: Array<Program> ): Array<MinistryListWithPlans>  => {
    const indexedPrograms: Dictionary<any> = programList.reduce(indexProgramFn, {});
    return ministryList.map(ministryMapFn(indexedPrograms)).sort(sortMinistryList);
}

const sortMinistryList = (prev: any, next: any) => prev.evaluation.value < next.evaluation.value ? 1 : -1;

const indexProgramFn = (acm: any, act: Program) => {
    const key = act.ministry.code;
    const possibleElement = acm[key];

    return {
        ...acm,
        [key]: possibleElement ? possibleElement.concat(getSlimProgram(act)) : [getSlimProgram(act)]
    }
}

const ministryMapFn = (indexedPrograms: Dictionary<Array<ProgramLite>>) => (el: MinistryService): MinistryListWithPlans => {
    const linkedArray = indexedPrograms[el.code] || [];
    const acumulatorCalification = linkedArray.reduce( (prev: any, act: any) => prev + act.evaluation.value, 0);
    const averageCalification = Math.round(acumulatorCalification / linkedArray.length);

    return {
        ...el,
        programList: linkedArray,
        programListQuantity: linkedArray.length,
        evaluation: {
            value: averageCalification,
            description: setEvaluationDescription(averageCalification) || '-'
        }
    }
}

export const groupMinistryByEvaluation = (ministryArray: Array<MinistryListWithPlans>) => {
    const groupedByEvaluation = _.groupBy(ministryArray, 'evaluation.value');
    const keys = Object.keys(groupedByEvaluation);

    return keys.map( key => ({
        name: groupedByEvaluation[key][0].evaluation.description,
        value: groupedByEvaluation[key].length
    }));
}