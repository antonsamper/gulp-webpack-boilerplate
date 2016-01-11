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
    add: false,
    browsers: [
      'IE >= 9',
      'last 1 Firefox versions',
      'last 1 Chrome versions',
      'last 1 Safari versions',
      'iOS >= 6.1'
    ]
  };

  return gulp
    .src(`${ sharedPaths.srcDir }/sass/*.scss`)
    .pipe(plumber({errorHandler: sharedEvents.onError}))
    .pipe(gulpif(options.env === 'dev', sourcemaps.init()))
    .pipe(sass())
    .pipe(postcss([autoprefixer(autoprefixerConfig)]))
    .pipe(gulpif(options.env === 'dev', sourcemaps.write()))
    .pipe(gulpif(options.env !== 'dev', csso()))
    .pipe(gulpif(options.env !== 'dev', rev()))
    .pipe(gulp.dest(sharedPaths.outputDir + '/css'));
};
