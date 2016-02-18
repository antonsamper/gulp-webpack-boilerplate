/*
 * @title gulpfile.babel.js
 * @description A directory file loader to include all the gulp tasks
 */

/*********************************************************************************
 1. IMPORTS
 *********************************************************************************/

import fs   from 'fs';
import gulp from 'gulp';


/*********************************************************************************
 2. TASK LOADER
 *********************************************************************************/

function createGulpTask(name) {
    name = name.replace('.js', '');
    gulp.task(name, () => {
        return require(`${__dirname}/tasks/${name}`).default();
    });
}

fs.readdirSync(`${__dirname}/tasks/`).forEach(function (filename, i) {
    createGulpTask(filename);
});
