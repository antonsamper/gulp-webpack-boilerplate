/*
 * @title Styles
 * @description A task to compile Sass to CSS
 * @example (cli) gulp styles
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import autoprefixer from 'autoprefixer';
import csso from 'gulp-csso';
import cache from 'gulp-cached';
import gulpif from 'gulp-if';
import postcss from 'gulp-postcss';
import rev from 'gulp-rev';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => {

  const autoprefixerConfig = {
    browsers: [
      'IE >= 9',
      'last 1 Firefox versions',
      'last 1 Chrome versions',
      'last 1 Safari versions',
      'iOS >= 7.1'
    ]
  };

  return gulp
    .src(`${ sharedPaths.srcDir }/sass/*.scss`)
    .pipe(plumber({errorHandler: sharedEvents.onError}))
    .pipe(gulpif(gulpboilerplate.sourcemaps, sourcemaps.init()))
    .pipe(sass())
    .pipe(postcss([autoprefixer(autoprefixerConfig)]))
    .pipe(gulpif(gulpboilerplate.sourcemaps, sourcemaps.write()))
    .pipe(gulpif(gulpboilerplate.csso, csso()))
    .pipe(gulpif(gulpboilerplate.rev, rev()))
    .pipe(gulp.dest(sharedPaths.outputDir + '/css'));
};
