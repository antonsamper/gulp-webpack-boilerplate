/*
 * @title Iconfont
 * @description A task to generate an icon font from svg files
 * @example (cli) gulp iconfont
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import configIconfont from '../../config/iconfont.js';
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
      appendCodepoints: configIconfont.codepoints,
      normalize: configIconfont.normalize
    }))
    .on('codepoints', generator)
    .pipe(gulp.dest(`${ sharedPaths.outputDir }/fonts`));
};
