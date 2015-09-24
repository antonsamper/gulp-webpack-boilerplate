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
  browserSync.init([
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
