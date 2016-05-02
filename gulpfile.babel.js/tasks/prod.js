/*
 * @title Prod
 * @description A bundle task that generates production ready code
 * @example (cli) gulp prod
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import env         from 'gulp-env';
import runSequence from 'run-sequence';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => {

    env({
        vars: {
            GULP_IGNORE_ERRORS: false,
            GULP_CACHE: false,
            GULP_COVERAGE: true,
            GULP_CSSO: true,
            GULP_HTMLMIN: true,
            GULP_REV: true,
            GULP_SOURCEMAPS: false,
            GULP_UGLIFY: true
        }
    });

    runSequence(
        'clean',
        'iconfont',
        'styles',
        ['minifyHtml', 'imagemin'],
        'revReplace',
        'move',
        'karma'
    );

};
