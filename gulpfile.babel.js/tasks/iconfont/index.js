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
import size from 'gulp-size';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

gulp.task('iconfont', function () {
  return gulp
    .src(sharedPaths.srcIconFont)
    .pipe(size({showFiles: true}))
    .pipe(plumber({errorHandler: sharedEvents.onError}))
    .pipe(iconfont({
      fontName: configIconfont.name,
      appendCodepoints: configIconfont.codepoints,
      normalize: configIconfont.normalize
    }))
    .on('codepoints', generator)
    .pipe(gulp.dest(`${ sharedPaths.outputDir }/fonts`))
    .pipe(size({showFiles: true}));
});
