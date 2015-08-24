/*
 * @title helloWorld
 * @description Module definition for the helloWorld component
 */


/*********************************************************************************
 1. MODULE DEFINITION
 *********************************************************************************/

(function (app) {

  app.helloWorld = function (planet) {
    var hello = 'Hello ';
    var thing = 'World!';

    if(planet === true) {
      thing = 'Planet!';
    }

    return hello + thing;
  };

})(APP);
