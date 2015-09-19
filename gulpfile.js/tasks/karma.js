/*
 * @title Karma
 * @description A task to run jasmine tests
 * @example (cli) gulp karma
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var gulp = require('gulp');
var Server = require('karma').Server;


/*********************************************************************************
 2. TASK
 *********************************************************************************/

gulp.task('karma', function () {

  var server = new Server({
    configFile: __dirname + '/../config/karma.js',
    singleRun: process.env.ENVIRONMENT_TYPE !== 'dev'
  });

  return server.start();

});
