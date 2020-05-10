
export const callbakParam = (cb: Function | Array<Function>, param: any) => 
    () => Array.isArray(cb) ? cb.forEach( fn => fn(param) ) : cb(param);