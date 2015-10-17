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
    'karma',
    'clean',
    'iconfont',
    'styles',
    'eslint',
    'concat',
    ['minifyHtml', 'imagemin'],
    'revReplace',
    'move'
  );
};
