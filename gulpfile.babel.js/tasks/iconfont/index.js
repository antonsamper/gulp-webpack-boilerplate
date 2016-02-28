/*
 * @title Iconfont
 * @description A task to generate an icon font from svg files
 * @example (cli) gulp iconfont
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import fontGenerator  from './generator.js';
import sharedPaths    from '../../shared/paths.js';
import sharedEvents   from '../../shared/events.js';
import configIconfont from '../../config/iconfont.conf.js';
import gulp           from 'gulp';
import iconfont       from 'gulp-iconfont';
import plumber        from 'gulp-plumber';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => {
    return gulp
        .src(sharedPaths.fontsIconSrcFiles)
        .pipe(plumber({errorHandler: sharedEvents.onError}))
        .pipe(iconfont({
            fontName: configIconfont.name,
            appendUnicode: configIconfont.appendUnicode,
            formats: configIconfont.formats,
            timestamp: Math.round(Date.now() / 1000)
        }))
        .on('glyphs', fontGenerator)
        .pipe(gulp.dest(sharedPaths.fontsOutputDir));
}
;
