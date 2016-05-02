/*
 * @title Karma
 * @description Karma configuration file
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var sharedPaths = require('../shared/paths.js');
var path = require('path');


/*********************************************************************************
 2. TASK
 *********************************************************************************/

module.exports = config => {

    var basePath = `${__dirname}/../..`;
    var reporters = ['spec'];
    var testFiles = `${sharedPaths.srcDir}/js/**/*.spec.js`;


    // Optional add coverage
    if (process.env.GULP_COVERAGE) reporters.push('coverage');

    config.set({
        singleRun: true,
        basePath: basePath,
        frameworks: ['jasmine'],
        files: [testFiles],
        browsers: ['Chrome'],
        preprocessors: {
            [testFiles]: ['webpack']
        },
        webpack: {
            module: {
                preLoaders: [{
                    test: /\.js$/,
                    include: path.resolve(`${sharedPaths.srcDir}/js/`),
                    exclude: /\.spec\.js$/,
                    loader: 'isparta'
                }, {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'eslint'
                }],
                loaders: [{
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: ['babel'],
                    query: {
                        presets: ['es2015']
                    }
                }]
            }
        },
        webpackMiddleware: {
            stats: {
                colors: true
            },
            noInfo: true
        },
        reporters: reporters,
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
