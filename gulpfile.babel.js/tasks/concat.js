/*
 * @title Concat
 * @description A task to concatenate and compress js files
 * @example (cli) gulp concat
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import bowerFiles from 'main-bower-files';
import browserSync from 'browser-sync';
import concat from 'gulp-concat';
import gulpif from 'gulp-if';
import rev from 'gulp-rev';
import size from 'gulp-size';
import uglify from 'gulp-uglify';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

gulp.task('concat', () => {
  return gulp
    .src(bowerFiles().concat(sharedPaths.concatSrc))
    .pipe(size({showFiles: true}))
    .pipe(plumber({errorHandler: sharedEvents.onError}))
    .pipe(gulpif(options.env !== 'dev', uglify()))
    .pipe(gulpif(options.env !== 'dev', concat('app.min.js')))
    .pipe(gulpif(options.env !== 'dev', rev()))
    .pipe(gulp.dest(`${ sharedPaths.outputDir }/js`))
    .pipe(browserSync.reload({stream: true}))
    .pipe(size({showFiles: true}));
});
