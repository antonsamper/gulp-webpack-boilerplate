/*
 * @title Imagemin
 * @description A task to minify images and svg files
 * @example (cli) gulp imagemin
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import sharedPaths  from '../shared/paths.js';
import sharedEvents from '../shared/events.js';
import gulp         from 'gulp';
import cache        from 'gulp-cached';
import gulpif       from 'gulp-if';
import imagemin     from 'gulp-imagemin';
import plumber      from 'gulp-plumber';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => {
    return gulp
        .src(sharedPaths.imagesSrcFiles)
        .pipe(plumber({errorHandler: sharedEvents.onError}))
        .pipe(gulpif(process.env.GULP_CACHE === 'true', cache('imagemin')))
        .pipe(imagemin())
        .pipe(gulp.dest(sharedPaths.imagesOutputFiles))
};
