/*
 * @title gulpfile.babel.js
 * @description A directory file loader to include all the gulp tasks
 */


/*********************************************************************************
 1. IMPORTS
 *********************************************************************************/

import gulp from 'gulp';
import plumber from 'gulp-plumber';
import requireDir from 'require-dir';
import sharedPaths from './shared/paths.js';
import sharedEvents from './shared/events.js';


/*********************************************************************************
 2. GLOBALS
 *********************************************************************************/

global.gulp = gulp;
global.plumber = plumber;
global.sharedPaths = sharedPaths;
global.sharedEvents = sharedEvents;
global.options = {
  env: 'production'
};


/*********************************************************************************
 3. LOADER
 *********************************************************************************/

requireDir('tasks', {recurse: true});
