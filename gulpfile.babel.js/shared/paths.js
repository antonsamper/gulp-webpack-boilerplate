/*
 * @title Paths
 * @description An object containing shared application paths
 */


/*********************************************************************************
 1. EXPORTS
 *********************************************************************************/

module.exports = {
  srcDir: 'src',
  srcIndex: 'src/index.html',
  srcImages: ['src/**/*.{jpg,png,gif,svg}', '!src/fonts/**/*.svg'],
  srcIconFont: 'src/fonts/iconfont/*.svg',
  outputDir: 'dist',
  outputJs: 'dist/js/**/*.js',
  outputCss: 'dist/css/*.css',
  eslintSrc: [
    '.eslintrc',
    'bower.json',
    'package.json',
    'src/js/**/*.js',
    'gulpfile.babel.js/**/*.js'
  ],
  concatSrc: [
    'src/js/**/*.js',
    '!src/js/**/*.spec.js'
  ]
};
