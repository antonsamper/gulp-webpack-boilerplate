/*
 * @title Move
 * @description A task to move font files to the output directory
 * @example (cli) gulp move
 */


/*********************************************************************************
 1. TASK
 *********************************************************************************/

export default () => {
  return gulp
    .src(`./${ sharedPaths.srcDir }/fonts/*.{eot,svg,ttf,woff,woff2}`, {
      base: `./${ sharedPaths.srcDir }`
    })
    .pipe(plumber({errorHandler: sharedEvents.onError}))
    .pipe(gulp.dest(sharedPaths.outputDir));
};
