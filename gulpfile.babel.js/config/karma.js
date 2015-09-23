/*
 * @title Karma
 * @description Karma configuration file
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import bowerFiles from 'main-bower-files';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

module.exports = config => {

  const basePath = `${__dirname}/../..`;
  const files = bowerFiles({
    paths: {
      bowerDirectory: `${basePath}/bower_components`,
      bowerJson: `${basePath}/bower.json`
    }
  }).concat(`${sharedPaths.srcDir}/js/**/*.js`);

  config.set({
    basePath: basePath,
    frameworks: ['jasmine'],
    files: files,
    browsers: ['PhantomJS'],
    preprocessors: {
      'src/js/**/!(*spec).js': ['coverage']
    },
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      reporters: [{
        type: 'html',
        dir: `${sharedPaths.outputDir}/reports/coverage/`,
        subdir: browser => {
          return browser.toLowerCase().split(/[ /-]/)[0];
        }
      }, {
        type: 'text-summary'
      }]
    }
  });

};
