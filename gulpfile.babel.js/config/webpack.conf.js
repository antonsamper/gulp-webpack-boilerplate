/*
 * @title Webpack
 * @description Webpack configuration file
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import BowerWebpackPlugin from 'bower-webpack-plugin';
import webpack from 'webpack';


/*********************************************************************************
 2. EXPORTS
 *********************************************************************************/

export default (() => {

    let config = {
        cache: true,
        output: {
            filename: '[name]-[hash].min.js'
        },
        module: {
            preLoaders: [{
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
        },
        plugins: [new BowerWebpackPlugin({
            includes: /\.js$/
        })]

    };

    // Development extras
    if (process.env.GULP_WEBPACK_DEV === 'true') {
        config.debug = true;
        config.devtool = 'inline-source-map';
    }

    if (process.env.GULP_UGLIFY === 'true') {
        config.plugins.push(new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: true,
            comments: false
        }));
    }

    return config;

})();
