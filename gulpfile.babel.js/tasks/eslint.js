/*
 * @title ESLint
 * @description A task for javascript linting
 * @example (cli) gulp jscs
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import sharedPaths  from '../shared/paths.js';
import sharedEvents from '../shared/events.js';
import gulp         from 'gulp';
import cache        from 'gulp-cached';
import eslint       from 'gulp-eslint';
import gulpif       from 'gulp-if';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => {
    return gulp
        .src(sharedPaths.eslintSrc)
        .pipe(gulpif(process.env.GULP_CACHE, cache('eslint')))
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(gulpif(process.env.GULP_STRICT_ESLINT, eslint.failAfterError()));
};
