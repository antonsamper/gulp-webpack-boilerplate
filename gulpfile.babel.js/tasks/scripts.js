/*
 * @title Scripts
 * @description A task to concatenate and compress js files
 * @example (cli) gulp scripts
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import sharedPaths  from '../shared/paths.js';
import sharedEvents from '../shared/events.js';
import gulp         from 'gulp';
import babel        from 'gulp-babel';
import cache        from 'gulp-cached';
import concat       from 'gulp-concat';
import gulpif       from 'gulp-if';
import plumber      from 'gulp-plumber';
import rev          from 'gulp-rev';
import uglify       from 'gulp-uglify';
import bowerFiles   from 'main-bower-files';
import merge        from 'merge-stream';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => {

    let libs = gulp
        .src(bowerFiles('**/*.js'))
        .pipe(plumber({errorHandler: sharedEvents.onError}))
        .pipe(gulpif(process.env.GULP_UGLIFY, uglify()))
        .pipe(gulpif(process.env.GULP_CONCAT, concat('libs.min.js')))
        .pipe(gulpif(process.env.GULP_REV, rev()))
        .pipe(gulp.dest(sharedPaths.scriptsLibsOutputDir));

    let app = gulp
        .src(sharedPaths.scriptsSrcFiles)
        .pipe(plumber({errorHandler: sharedEvents.onError}))
        .pipe(gulpif(process.env.GULP_CACHE, cache('scripts')))
        .pipe(babel())
        .pipe(gulpif(process.env.GULP_UGLIFY, uglify()))
        .pipe(gulpif(process.env.GULP_CONCAT, concat('app.min.js')))
        .pipe(gulpif(process.env.GULP_REV, rev()))
        .pipe(gulp.dest(sharedPaths.scriptsOutputDir));

    return merge(libs, app);

};
