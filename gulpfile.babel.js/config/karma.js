/*
 * @title Karma
 * @description Karma configuration file
 */


/*********************************************************************************
 1. TASK
 *********************************************************************************/

module.exports = config => {

  const basePath = `${__dirname}/../..`;

  config.set({
    basePath: basePath,
    frameworks: ['jasmine'],
    files: [
      'node_modules/babel-core/browser-polyfill.js',
      `${sharedPaths.srcDir}/js/**/*.js`
    ],
    browsers: ['PhantomJS'],
    preprocessors: {
      'src/js/**/*.js': ['babel'],
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
    },
    babelPreprocessor: {
      options: {
        sourceMap: 'inline'
      }
    }
  });

};
