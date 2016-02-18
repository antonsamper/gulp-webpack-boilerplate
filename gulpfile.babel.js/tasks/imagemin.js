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
import rev          from 'gulp-rev';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => {
    return gulp
        .src(sharedPaths.srcImages)
        .pipe(plumber({errorHandler: sharedEvents.onError}))
        .pipe(gulpif(process.env.cache, cache('imagemin')))
        .pipe(imagemin())
        .pipe(gulpif(process.env.rev, rev()))
        .pipe(gulp.dest(sharedPaths.outputDir))
        .pipe(gulpif(process.env.rev, rev.manifest()))
        .pipe(gulpif(process.env.rev, gulp.dest(sharedPaths.outputDir)));
};
