/*
 * @title BrowserSync
 * @description A task to initialise a local server
 * @example (cli) gulp browserSync
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import browserSync from 'browser-sync';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => {

  const bs = browserSync.create();

  return bs.init([
    sharedPaths.srcIndex,
    sharedPaths.outputJs,
    sharedPaths.outputCss
  ], {
    server: {
      baseDir: sharedPaths.outputDir
    },
    open: true,
    notify: false,
    scrollProportionally: true
  });

};
