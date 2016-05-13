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
import csso         from 'gulp-csso';
import gulpif       from 'gulp-if';
import postcss      from 'gulp-postcss';
import plumber      from 'gulp-plumber';
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
        .src(sharedPaths.stylesMainSrcFiles)
        .pipe(plumber({errorHandler: sharedEvents.onError}))
        .pipe(gulpif(process.env.GULP_SOURCEMAPS === 'true', sourcemaps.init()))
        .pipe(sass())
        .pipe(postcss([autoprefixer(autoprefixerConfig)]))
        .pipe(gulpif(process.env.GULP_SOURCEMAPS === 'true', sourcemaps.write()))
        .pipe(gulpif(process.env.GULP_CSSO === 'true', csso()))
        .pipe(gulp.dest(sharedPaths.stylesOutputDir));
};
