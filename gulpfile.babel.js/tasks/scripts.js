/*
 * @title Scripts
 * @description A task to concatenate and compress js files
 * @example (cli) gulp scripts
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import babel from 'gulp-babel';
import bowerFiles from 'main-bower-files';
import concat from 'gulp-concat';
import cache from 'gulp-cached';
import gulpif from 'gulp-if';
import merge from 'merge-stream';
import rev from 'gulp-rev';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => {

  let libs = gulp
    .src(bowerFiles('**/*.js'))
    .pipe(plumber({errorHandler: sharedEvents.onError}))
    .pipe(gulpif(gulpboilerplate.uglify, uglify()))
    .pipe(gulpif(gulpboilerplate.concat, concat('libs.min.js')))
    .pipe(gulpif(gulpboilerplate.rev, rev()))
    .pipe(gulp.dest(`${ sharedPaths.outputDir }/js/bower`));

  let app = gulp
    .src(sharedPaths.concatSrc)
    .pipe(plumber({errorHandler: sharedEvents.onError}))
    .pipe(gulpif(gulpboilerplate.cache, cache('scripts')))
    .pipe(gulpif(gulpboilerplate.sourcemaps, sourcemaps.init()))
    .pipe(babel())
    .pipe(gulpif(gulpboilerplate.sourcemaps, sourcemaps.write()))
    .pipe(gulpif(gulpboilerplate.uglify, uglify()))
    .pipe(gulpif(gulpboilerplate.concat, concat('app.min.js')))
    .pipe(gulpif(gulpboilerplate.rev, rev()))
    .pipe(gulp.dest(`${ sharedPaths.outputDir }/js`));

  return merge(libs, app);

};


