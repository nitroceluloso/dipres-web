
import { Program } from "../../services/program/types";
import _ from "lodash";
import { MinistryService } from "../../services/ministry/types";
import { Dictionary } from "../../helpers/types";

const getSlimProgram = (program : Program) => {
    return _.pick(program, ['evaluation', 'year', 'publicService']);
}

const dictionaryEvaluation: Dictionary<string> = {
    "1": "mal",
    "2": "bajo",
    "3": "medio",
    "4": "buen"
}

const setEvaluationDescription = (calification: number) => dictionaryEvaluation[calification.toString()];

export const linkMinistryToProgram = ( ministryList: Array<MinistryService>, programList: Array<Program> ) => {
    const indexedPrograms: Dictionary<any> = programList.reduce( (acm: any, act) => {
        const key = act.ministry.code;
        const possibleElement = acm[key];


        return {
            ...acm,
            [key]: possibleElement ? possibleElement.concat(getSlimProgram(act)) : [getSlimProgram(act)]
        }
    }, {});

    return ministryList.map( (el) => {
        const linkedArray = indexedPrograms[el.code] || [];
        const acumulatorCalification = linkedArray.reduce( (prev: any, act: any) => prev + act.evaluation.value, 0);
        const averageCalification = Math.round(acumulatorCalification / linkedArray.length);

        return {
            ...el,
            programList: linkedArray,
            evaluation: {
                value: averageCalification,
                description: setEvaluationDescription(averageCalification)
            }
        }
    } );
}