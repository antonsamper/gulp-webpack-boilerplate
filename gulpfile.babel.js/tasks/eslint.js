/*
 * @title ESLint
 * @description A task for javascript linting
 * @example (cli) gulp jscs
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import eslint from 'gulp-eslint';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => {
  return gulp
    .src(sharedPaths.eslintSrc)
    .pipe(plumber({errorHandler: sharedEvents.onError}))
    .pipe(eslint())
    .pipe(eslint.format());
};
