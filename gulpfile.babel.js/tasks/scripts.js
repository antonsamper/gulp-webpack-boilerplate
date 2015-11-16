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
    .src(bowerFiles())
    .pipe(plumber({errorHandler: sharedEvents.onError}))
    .pipe(gulpif(options.env !== 'dev', uglify()))
    .pipe(gulpif(options.env !== 'dev', concat('libs.min.js')))
    .pipe(gulpif(options.env !== 'dev', rev()))
    .pipe(gulp.dest(`${ sharedPaths.outputDir }/js/bower`));

  let app = gulp
    .src(sharedPaths.concatSrc)
    .pipe(plumber({errorHandler: sharedEvents.onError}))
    .pipe(gulpif(options.env === 'dev', sourcemaps.init()))
    .pipe(babel())
    .pipe(gulpif(options.env === 'dev', sourcemaps.write()))
    .pipe(gulpif(options.env !== 'dev', uglify()))
    .pipe(gulpif(options.env !== 'dev', concat('app.min.js')))
    .pipe(gulpif(options.env !== 'dev', rev()))
    .pipe(gulp.dest(`${ sharedPaths.outputDir }/js`));

  return merge(libs, app);

};


