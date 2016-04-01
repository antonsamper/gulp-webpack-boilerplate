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
        .src(sharedPaths.eslintSrcFiles)
        .pipe(gulpif(process.env.GULP_CACHE === 'true', cache('eslint')))
        .pipe(eslint())
        .pipe(eslint.format());
        // todo break build on eslint errors
        // https://github.com/adametry/gulp-eslint/issues/135
        //.pipe(gulpif(process.env.GULP_IGNORE_ERRORS === 'true', eslint.failAfterError()));
};
