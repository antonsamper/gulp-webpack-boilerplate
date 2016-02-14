/*
 * @title Karma
 * @description Karma configuration file
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var bowerFiles = require('main-bower-files');
var sharedPaths = require('../shared/paths.js');


/*********************************************************************************
 2. TASK
 *********************************************************************************/

module.exports = config => {

    var basePath = `${__dirname}/../..`;

    config.set({
        basePath: basePath,
        frameworks: ['jasmine'],
        files: bowerFiles({
            paths: {
                bowerDirectory: `${basePath}/bower_components`,
                bowerJson: `${basePath}/bower.json`
            }
        }).concat([
            'node_modules/babel-polyfill/dist/polyfill.js',
            `${sharedPaths.srcDir}/js/**/*.js`
        ]),
        browsers: ['Chrome'],
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
    })
};
