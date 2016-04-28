/*
 * @title helloWorld
 * @description Module definition for the helloWorld component
 */


/*********************************************************************************
 1. MODULE DEFINITION
 *********************************************************************************/

(function (app) {
    app.helloWorld = function (planet) {
        const hello = 'Hello ';
        let thing = 'World!';
        if (planet === true) thing = 'Planet!';
        return hello + thing;
    };
})(APP);
