/*
 * @title Iconfont
 * @description A task to generate an icon font from svg files
 * @example (cli) gulp iconfont
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import configIconfont from '../../config/iconfont.conf.js';
import generator from './generator.js';
import iconfont from 'gulp-iconfont';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => {
  return gulp
    .src(sharedPaths.srcIconFont)
    .pipe(plumber({errorHandler: sharedEvents.onError}))
    .pipe(iconfont({
      fontName: configIconfont.name,
      appendUnicode: configIconfont.appendUnicode,
      formats: configIconfont.formats,
      timestamp:  Math.round(Date.now()/1000)
    }))
    .on('glyphs', generator)
    .pipe(gulp.dest(`${ sharedPaths.outputDir }/fonts`));
};
