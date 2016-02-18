/*
 * @title RevReplace
 * @description A task to rewrite occurrences of file names changed by gulp-rev
 * @example (cli) gulp revReplace
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import sharedPaths  from '../shared/paths.js';
import sharedEvents from '../shared/events.js';
import del          from 'del';
import gulp         from 'gulp';
import plumber      from 'gulp-plumber';
import revReplace   from 'gulp-rev-replace';
import runSequence  from 'run-sequence';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

let manifest = `${ sharedPaths.outputDir }/rev-manifest.json`;

gulp.task('revReplaceManifest', () => {
  return gulp
    .src(`${ sharedPaths.outputDir }/**/*.{html,css,js}`)
    .pipe(plumber({errorHandler: sharedEvents.onError}))
    .pipe(revReplace({manifest: gulp.src(manifest)}))
    .pipe(gulp.dest(sharedPaths.outputDir));
});

gulp.task('revDeleteManifest', () => {
  return del.sync(manifest);
});

export default () => {
  runSequence(
    'revReplaceManifest',
    'revDeleteManifest'
  );
};
