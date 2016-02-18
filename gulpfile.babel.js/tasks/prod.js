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
            cache: false,
            sourcemaps: false,
            concat: true,
            uglify: true,
            csso: true,
            htmlmin: true,
            rev: true,
            coverage: true
        }
    });

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

};
