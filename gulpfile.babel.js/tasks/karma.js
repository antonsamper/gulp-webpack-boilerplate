/*
 * @title Karma
 * @description A task to run jasmine tests
 * @example (cli) gulp karma
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import karma from 'karma';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

gulp.task('karma', () => {

  let server = new karma.Server({
    configFile: `${__dirname}/../config/karma.js`,
    singleRun: options.env !== 'dev'
  });

  return server.start();

});
