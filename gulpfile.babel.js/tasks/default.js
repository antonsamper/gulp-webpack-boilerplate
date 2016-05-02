/*
 * @title Default
 * @description A bundle task that generates a development environment
 * @example (cli) gulp
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import sharedPaths from '../shared/paths.js';
import gulp        from 'gulp';
import env         from 'gulp-env';
import runSequence from 'run-sequence';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => {

    env({
        vars: {
            GULP_IGNORE_ERRORS: true,
            GULP_CACHE: true,
            GULP_COVERAGE: false,
            GULP_CSSO: false,
            GULP_HTMLMIN: false,
            GULP_REV: false,
            GULP_SOURCEMAPS: true,
            GULP_UGLIFY: false,
            GULP_WEBPACK_DEV: true
        }
    });

    runSequence(
        'clean',
        'iconfont',
        'styles',
        'webpack',
        ['minifyHtml', 'imagemin'],
        'move',
        'server'
    );

    gulp.watch(sharedPaths.scriptsSrcFiles, ['webpack']);
    gulp.watch(sharedPaths.imagesSrcFiles, ['imagemin']);
    gulp.watch(sharedPaths.srcIndex, ['minifyHtml']);
    gulp.watch(sharedPaths.fontsIconSrcFiles, ['iconfont']);
    gulp.watch(sharedPaths.stylesAllSrcFiles, ['styles']);

};
