/*
 * @title Webpack
 * @description A task to concatenate and compress js files via webpack
 * @example (cli) gulp webpack
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import webpackConfig from '../config/webpack.conf';
import sharedPaths   from '../shared/paths.js';
import sharedEvents  from '../shared/events.js';
import gulp          from 'gulp';
import plumber       from 'gulp-plumber';
import named         from 'vinyl-named';
import webpack       from 'webpack-stream';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => {
    return gulp
        .src(`${sharedPaths.scriptsSrcDir}/${sharedPaths.scriptsMainFile}`)
        .pipe(plumber({errorHandler: sharedEvents.onError}))
        .pipe(named())
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(sharedPaths.scriptsOutputDir));
};
