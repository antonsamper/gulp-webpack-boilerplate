/*
 * @title Default
 * @description A bundle task that generates a development environment
 * @example (cli) gulp
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import sharedPaths from '../shared/paths.js';
import browserSync from 'browser-sync';
import gulp        from 'gulp';
import env         from 'gulp-env';
import runSequence from 'run-sequence';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => {

    env({
        vars: {
            gulpboilerplate: {
                cache: true,
                concat: false,
                csso: false,
                htmlmin: false,
                rev: false,
                sourcemaps: true,
                uglify: false
            }
        }
    });

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

};
