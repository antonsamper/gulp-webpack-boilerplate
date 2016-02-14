/*
 * @title Prod
 * @description A bundle task that generates production ready code
 * @example (cli) gulp prod
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import runSequence from 'run-sequence';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => {

    global.gulpboilerplate.cache = false;
    global.gulpboilerplate.sourcemaps = false;
    global.gulpboilerplate.concat = true;
    global.gulpboilerplate.uglify = true;
    global.gulpboilerplate.csso = true;
    global.gulpboilerplate.htmlmin = true;
    global.gulpboilerplate.karmaSingleRun = true;
    global.gulpboilerplate.rev = true;

    runSequence(
        'clean',
        'iconfont',
        'styles',
        'eslint',
        'scripts',
        ['minifyHtml', 'imagemin'],
        'revReplace',
        'move',
        'karma'
    );

}
