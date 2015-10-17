/*
 * @title Imagemin
 * @description A task to minify images and svg files
 * @example (cli) gulp imagemin
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import gulpif from 'gulp-if';
import imagemin from 'gulp-imagemin';
import rev from 'gulp-rev';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => {
  return gulp
    .src(sharedPaths.srcImages)
    .pipe(plumber({errorHandler: sharedEvents.onError}))
    .pipe(imagemin())
    .pipe(gulpif(options.env !== 'dev', rev()))
    .pipe(gulp.dest(sharedPaths.outputDir))
    .pipe(gulpif(options.env !== 'dev', rev.manifest()))
    .pipe(gulpif(options.env !== 'dev', gulp.dest(sharedPaths.outputDir)));
};
