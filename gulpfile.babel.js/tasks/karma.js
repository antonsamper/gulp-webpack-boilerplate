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

export default () => {

    const runType = gulpboilerplate.karmaSingleRun;

    let server = new karma.Server({
        configFile: `${__dirname}/../config/karma.conf.js`,
        singleRun: (runType) ? runType : true
    });

    return server.start();

};
