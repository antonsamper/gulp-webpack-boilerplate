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

    let server = new karma.Server({
        configFile: `${__dirname}/../config/karma.conf.js`
    });

    return server.start();

};
