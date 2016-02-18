/*
 * @title ESLint
 * @description A task for javascript linting
 * @example (cli) gulp jscs
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import cache from 'gulp-cached';
import eslint from 'gulp-eslint';
import gulpif from 'gulp-if';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sharedPaths from '../shared/paths.js';
import sharedEvents from '../shared/events.js';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => {
  return gulp
    .src(sharedPaths.eslintSrc)
    .pipe(plumber({errorHandler: sharedEvents.onError}))
    .pipe(gulpif(gulpboilerplate.cache, cache('eslint')))
    .pipe(eslint())
    .pipe(eslint.format());
};
