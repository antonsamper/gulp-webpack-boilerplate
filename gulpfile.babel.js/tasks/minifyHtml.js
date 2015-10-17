/*
 * @title MinifyHtml
 * @description A task to inject assets into and compress the main index.html
 * @example (cli) gulp minifyHtml
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import gulpif from 'gulp-if';
import inject from 'gulp-inject';
import minifyHtml from 'gulp-minify-html';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => {
  return gulp
    .src(sharedPaths.srcIndex)
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
    .pipe(gulp.dest(sharedPaths.outputDir));
};
