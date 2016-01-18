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


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => {
  return gulp
    .src(sharedPaths.eslintSrc)
    .pipe(plumber({errorHandler: sharedEvents.onError}))
    .pipe(gulpif(options.env === 'dev', cache('eslint')))
    .pipe(eslint())
    .pipe(eslint.format());
};
