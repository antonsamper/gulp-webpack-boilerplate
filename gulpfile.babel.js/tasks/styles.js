/*
 * @title Styles
 * @description A task to compile Sass to CSS
 * @example (cli) gulp styles
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import sharedPaths  from '../shared/paths.js';
import sharedEvents from '../shared/events.js';
import autoprefixer from 'autoprefixer';
import gulp         from 'gulp';
import cache        from 'gulp-cached';
import csso         from 'gulp-csso';
import gulpif       from 'gulp-if';
import postcss      from 'gulp-postcss';
import plumber      from 'gulp-plumber';
import rev          from 'gulp-rev';
import sass         from 'gulp-sass';
import sourcemaps   from 'gulp-sourcemaps';


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
        .pipe(gulpif(process.env.GULP_SOURCEMAPS, sourcemaps.init()))
        .pipe(sass())
        .pipe(postcss([autoprefixer(autoprefixerConfig)]))
        .pipe(gulpif(process.env.GULP_SOURCEMAPS, sourcemaps.write()))
        .pipe(gulpif(process.env.GULP_CSSO, csso()))
        .pipe(gulpif(process.env.GULP_REV, rev()))
        .pipe(gulp.dest(sharedPaths.outputDir + '/css'));
};
