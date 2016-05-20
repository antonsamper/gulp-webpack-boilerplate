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
import runSequence from 'run-sequence';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => {

    process.env.GULP_IGNORE_ERRORS = true;
    process.env.GULP_CACHE = true;
    process.env.GULP_SOURCEMAPS = true;
    process.env.GULP_WEBPACK_DEV = true;

    runSequence(
        'clean',
        'styles',
        'webpack',
        ['minifyHtml', 'imagemin'],
        'move',
        'server'
    );

    gulp.watch(sharedPaths.scriptsSrcFiles, ['webpack']);
    gulp.watch(sharedPaths.imagesSrcFiles, ['imagemin']);
    gulp.watch([sharedPaths.srcIndex, sharedPaths.iconsSrcFiles], ['minifyHtml']);
    gulp.watch(sharedPaths.fontsSrcFiles, ['move']);
    gulp.watch(sharedPaths.stylesAllSrcFiles, ['styles']);

};
