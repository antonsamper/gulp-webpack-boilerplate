/*
 * @title Move
 * @description A task to move font files to the output directory
 * @example (cli) gulp move
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import sharedPaths  from '../shared/paths.js';
import sharedEvents from '../shared/events.js';
import gulp         from 'gulp';
import plumber      from 'gulp-plumber';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => {
    return gulp
        .src([
            sharedPaths.fontsSrcFiles,
            sharedPaths.faviconFile
        ], {

            base: sharedPaths.srcDir
        })
        .pipe(plumber({errorHandler: sharedEvents.onError}))
        .pipe(gulp.dest(sharedPaths.outputDir));
};
