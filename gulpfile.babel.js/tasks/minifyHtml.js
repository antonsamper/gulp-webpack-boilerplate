/*
 * @title MinifyHtml
 * @description A task to inject assets into and compress the main index.html
 * @example (cli) gulp minifyHtml
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import browserSync from 'browser-sync';
import gulpif from 'gulp-if';
import inject from 'gulp-inject';
import minifyHtml from 'gulp-minify-html';
import size from 'gulp-size';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

module.exports = () => {
  return gulp
    .src(sharedPaths.srcIndex)
    .pipe(size({showFiles: true}))
    .pipe(plumber({errorHandler: sharedEvents.onError}))
    .pipe(inject(gulp.src([
      sharedPaths.outputCss,
      sharedPaths.outputJs
    ], {
      read: false
    }), {
      ignorePath: sharedPaths.outputDir,
      addRootSlash: false
    }))
    .pipe(gulpif(options.env !== 'dev', minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    })))
    .pipe(gulp.dest(sharedPaths.outputDir))
    .pipe(browserSync.reload({stream: true}))
    .pipe(size({showFiles: true}));
};
