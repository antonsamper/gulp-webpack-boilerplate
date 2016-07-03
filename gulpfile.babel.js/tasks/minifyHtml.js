/*
 * @title MinifyHtml
 * @description A task to inject assets into and compress the main index.html
 * @example (cli) gulp minifyHtml
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import sharedPaths  from '../shared/paths.js';
import sharedEvents from '../shared/events.js';
import gulp         from 'gulp';
import htmlmin      from 'gulp-htmlmin';
import gulpif       from 'gulp-if';
import inject       from 'gulp-inject';
import plumber      from 'gulp-plumber';
import runSequence  from 'run-sequence';
import series       from 'stream-series';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

gulp.task('html', () => {

    const styles = gulp.src([sharedPaths.stylesOutputFiles], {read: false});
    const scriptsLibs = gulp.src(sharedPaths.scriptsOutputFiles, {read: false});
    const scriptsMain = gulp.src([`${sharedPaths.scriptsOutputDir}/${sharedPaths.scriptsMainFile}`], {read: false});

    return gulp
        .src(sharedPaths.srcIndex)
        .pipe(plumber({errorHandler: sharedEvents.onError}))
        .pipe(inject(series(styles, scriptsLibs, scriptsMain), {
            ignorePath: sharedPaths.outputDir,
            addRootSlash: false
        }))
        .pipe(inject(gulp.src(`${sharedPaths.imagesOutputFiles}/${sharedPaths.iconsFolderName}.svg`), {
            transform: function (filepath, file) {
                return file.contents.toString();
            }
        }))
        .pipe(gulpif(process.env.GULP_HTMLMIN === 'true', htmlmin({collapseWhitespace: true, removeComments: true})))
        .pipe(gulp.dest(sharedPaths.outputDir));
});

export default () => {
    runSequence(
        'svg',
        'html'
    );
};
