/*
 * @title Svg
 * @description A task to combine svgs into a <symbol> element with paths
 * @example (cli) gulp svg
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import sharedPaths  from '../shared/paths.js';
import sharedEvents from '../shared/events.js';
import gulp         from 'gulp';
import plumber      from 'gulp-plumber';
import svgstore     from 'gulp-svgstore';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => {
    return gulp
        .src(sharedPaths.iconsSrcFiles)
        .pipe(plumber({errorHandler: sharedEvents.onError}))
        .pipe(svgstore({inlineSvg: true}))
        .pipe(gulp.dest(sharedPaths.imagesOutputFiles));
};
