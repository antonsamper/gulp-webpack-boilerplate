/*
 * @title Paths
 * @description An object containing shared application paths
 */


/*********************************************************************************
 1. EXPORTS
 *********************************************************************************/

module.exports = {
    srcDir: './src',
    srcIndex: './src/index.html',
    srcImages: ['./src/**/*.{jpg,png,gif,svg}', '!./src/fonts/**/*.svg'],
    outputDir: './dist/',


    eslintSrcFiles: [
        './.eslintrc',
        './bower.json',
        './package.json',
        './src/js/**/*.js',
        './gulpfile.babel.js/**/*.js'
    ],


    fontsIconSrcFiles: './src/fonts/iconfont/*.svg',
    fontsSrcFiles: './src/fonts/*.{eot,svg,ttf,woff,woff2}',
    fontsOutputDir: './dist/fonts',

    revManifest: './dist/rev-manifest.json',

    scriptsSrcFiles: [
        './src/js/**/*.js',
        '!./src/js/**/*.spec.js'
    ],
    scriptsOutputFiles: [
        './dist/js/bower/**/*.js',
        './dist/js/app.js',
        './dist/js/**/*.js'
    ],
    scriptsOutputDir: './dist/js',
    scriptsLibsOutputDir: './dist/js/bower',

    outputFiles: ['./dist/**/*.{html,css,js}'],

    stylesMainSrcFiles: ['./src/sass/*.scss'],
    stylesAllSrcFiles: ['./src/sass/**/*.scss'],
    stylesSrcGeneratedDir: './src/sass/generated',
    stylesOutputFiles: ['./dist/css/*.css'],
    stylesOutputDir: './dist/css'

};
