/*
 * @title Imagemin
 * @description A task to minify images and svg files
 * @example (cli) gulp imagemin
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import cache from 'gulp-cached';
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
    .pipe(gulpif(gulpboilerplate.cache, cache('imagemin')))
    .pipe(imagemin())
    .pipe(gulpif(gulpboilerplate.rev, rev()))
    .pipe(gulp.dest(sharedPaths.outputDir))
    .pipe(gulpif(gulpboilerplate.rev, rev.manifest()))
    .pipe(gulpif(gulpboilerplate.rev, gulp.dest(sharedPaths.outputDir)));
};
