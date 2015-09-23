/*
 * @title Move
 * @description A task to move font files to the dist folder
 * @example (cli) gulp move
 */


/*********************************************************************************
 1. TASK
 *********************************************************************************/

module.exports = () => {
  return gulp
    .src(`./${ sharedPaths.srcDir }/fonts/*.{eot,svg,ttf,woff}`, {
      base: `./${ sharedPaths.srcDir }`
    })
    .pipe(plumber({errorHandler: sharedEvents.onError}))
    .pipe(gulp.dest(sharedPaths.outputDir));
};
