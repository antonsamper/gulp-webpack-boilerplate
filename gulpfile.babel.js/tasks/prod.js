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
            gulpboilerplate: {
                cache: false,
                concat: true,
                coverage: true,
                csso: true,
                htmlmin: true,
                rev: true,
                sourcemaps: false,
                uglify: true,
                
            }
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
