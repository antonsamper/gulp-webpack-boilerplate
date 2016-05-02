/*
 * @title fibonacci
 * @description Module definition for the fibonacci component
 */


/*********************************************************************************
 1. MODULE DEFINITION
 *********************************************************************************/

export default {
    [Symbol.iterator]() {
        let pre = 0;
        let cur = 1;
        return {
            next() {
                [pre, cur] = [cur, pre + cur];
                return {done: false, value: cur};
            }
        };
    }
};
