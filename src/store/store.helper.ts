
import { ActionI, Payload } from "./types";

/**
 * Return an object with the structure of an action.
 * @param type Type to restrict the keys
 * @param payload The object passed for payload
 */

export const actionCreator = <T, P>(type: T, payload: P): ActionI<T, P> => {
    return {
        type,
        payload
    }
}

export const updateState = <A extends Payload, D>(action: A, obj: D) => {
    return {
        ...action.payload,
        ...obj
    }
}