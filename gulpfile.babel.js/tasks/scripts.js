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
import sourcemaps   from 'gulp-sourcemaps';
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
        .pipe(gulpif(process.env.gulpboilerplateuglify, uglify()))
        .pipe(gulpif(process.env.gulpboilerplateconcat, concat('libs.min.js')))
        .pipe(gulpif(process.env.gulpboilerplaterev, rev()))
        .pipe(gulp.dest(`${ sharedPaths.outputDir }/js/bower`));

    let app = gulp
        .src(sharedPaths.concatSrc)
        .pipe(plumber({errorHandler: sharedEvents.onError}))
        .pipe(gulpif(process.env.gulpboilerplatecache, cache('scripts')))
        .pipe(gulpif(process.env.gulpboilerplatesourcemaps, sourcemaps.init()))
        .pipe(babel())
        .pipe(gulpif(process.env.gulpboilerplatesourcemaps, sourcemaps.write()))
        .pipe(gulpif(process.env.gulpboilerplateuglify, uglify()))
        .pipe(gulpif(process.env.gulpboilerplateconcat, concat('app.min.js')))
        .pipe(gulpif(process.env.gulpboilerplaterev, rev()))
        .pipe(gulp.dest(`${ sharedPaths.outputDir }/js`));

    return merge(libs, app);

};


