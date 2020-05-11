
import { callbakParam } from "./callbackParam.parser";

describe('callback param [parser]', () => {

    test('function directly', () => {
        const fn = jest.fn();
        callbakParam(fn, 1)();
        expect(fn).toHaveBeenCalled()
    });

    test('array of functions', () => {
        const fnA = jest.fn();
        const fnB = jest.fn();
        callbakParam([fnA, fnB], 1)();
        expect(fnA).toHaveBeenCalled();
        expect(fnB).toHaveBeenCalled();
    });

});