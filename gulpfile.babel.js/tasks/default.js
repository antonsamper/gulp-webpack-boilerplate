/*
 * @title Default
 * @description A bundle task that generates production ready code
 * @example (cli) gulp
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import runSequence from 'run-sequence';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => {
  runSequence(
    'clean',
    'iconfont',
    'styles',
    'eslint',
    'scripts',
    ['minifyHtml', 'imagemin'],
    'revReplace',
    'move',
    'karma'
  );
};
