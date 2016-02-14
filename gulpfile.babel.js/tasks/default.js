/*
 * @title Default
 * @description A bundle task that generates a development environment
 * @example (cli) gulp
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

    global.gulpboilerplate.cache = true;
    global.gulpboilerplate.sourcemaps = true;
    global.gulpboilerplate.concat = false;
    global.gulpboilerplate.uglify = false;
    global.gulpboilerplate.csso = false;
    global.gulpboilerplate.htmlmin = false;
    global.gulpboilerplate.rev = false;

    runSequence(
        'clean',
        'iconfont',
        'styles',
        'eslint',
        'scripts',
        ['minifyHtml', 'imagemin'],
        'move',
        'server'
    );

    gulp.watch(sharedPaths.eslintSrc, ['eslint']);
    gulp.watch(sharedPaths.concatSrc, ['scripts']);
    gulp.watch(sharedPaths.srcImages, ['imagemin']);
    gulp.watch(sharedPaths.srcIndex, ['minifyHtml']);
    gulp.watch(sharedPaths.srcIconFont, ['iconfont']);
    gulp.watch(`${ sharedPaths.srcDir }/sass/**/*.scss`, ['styles']);

}
