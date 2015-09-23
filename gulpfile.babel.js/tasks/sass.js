/*
 * @title Sass
 * @description A task to compile Sass to CSS
 * @example (cli) gulp sass
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';
import csso from 'gulp-csso';
import gulpif from 'gulp-if';
import rev from 'gulp-rev';
import sass from 'gulp-sass';
import size from 'gulp-size';
import sourcemaps from 'gulp-sourcemaps';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

module.exports = () => {
  return gulp
    .src(`${ sharedPaths.srcDir }/sass/*.scss`)
    .pipe(plumber({errorHandler: sharedEvents.onError}))
    .pipe(gulpif(options.env === 'dev', sourcemaps.init()))
    .pipe(sass())
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(gulpif(options.env === 'dev', sourcemaps.write()))
    .pipe(gulpif(options.env !== 'dev', csso()))
    .pipe(gulpif(options.env !== 'dev', rev()))
    .pipe(gulp.dest(sharedPaths.outputDir + '/css'))
    .pipe(browserSync.reload({stream: true}))
    .pipe(size({showFiles: true}));
};
