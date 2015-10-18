/*
 * @title gulpfile.babel.js
 * @description A directory file loader to include all the gulp tasks
 */

/*********************************************************************************
 1. IMPORTS
 *********************************************************************************/

import fs from 'fs';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sharedPaths from './shared/paths.js';
import events from './shared/events.js';


/*********************************************************************************
 2. GLOBALS
 *********************************************************************************/

global.gulp = gulp;
global.plumber = plumber;
global.sharedPaths = sharedPaths;
global.sharedEvents = events;
global.options = {
  env: 'production'
};


/*********************************************************************************
 3. TASK LOADER
 *********************************************************************************/

function createGulpTaks(name) {
  name = name.replace('.js','');
  gulp.task(name, () => {
    return require(`${__dirname}/tasks/${name}`)();
  });
}

fs.readdirSync(`${__dirname}/tasks/`).forEach(function (filename, i) {
  createGulpTaks(filename);
});
