/*
 * @title Dev
 * @description A bundle task that generates a development environment
 * @example (cli) gulp dev
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import browserSync from 'browser-sync';
import runSequence from 'run-sequence';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => {

  global.options.env = 'dev';

  runSequence(
    'karma',
    'clean',
    'iconfont',
    'sass',
    'eslint',
    'concat',
    ['minifyHtml', 'imagemin'],
    'move',
    'browserSync'
  );

  gulp.watch(sharedPaths.eslintSrc, ['eslint']);
  gulp.watch(sharedPaths.concatSrc, ['concat']);
  gulp.watch(sharedPaths.srcImages, ['imagemin']);
  gulp.watch(sharedPaths.srcIndex, ['minifyHtml']);
  gulp.watch(sharedPaths.srcIconFont, ['iconfont']);
  gulp.watch(`${ sharedPaths.srcDir }/sass/**/*.scss`, ['sass']);

};
