/*
 * @title Paths
 * @description An function that returns an object containing file paths
 */


/*********************************************************************************
 1. EXPORTS
 *********************************************************************************/

module.exports = function () {

    const srcDir = 'src';
    const outputDir = 'dist';
    const iconsDir = `${srcDir}/fonts/iconfont/*.svg`;

    const scriptsLibsFilename = 'libs.min.js';
    const scriptsAppFilename = 'app.min.js';

    return {
        srcDir,
        srcIndex: `${srcDir}/index.html`,
        imagesSrcFiles: `${srcDir}/images/**/*.{jpg,png,gif,svg}`,
        imagesOutputFiles: `${outputDir}/images`,
        outputDir,
        eslintSrcFiles: [
            '.eslintrc',
            'bower.json',
            'package.json',
            `${srcDir}/js/**/*.js`,
            'gulpfile.babel.js/**/*.js'
        ],
        fontsIconSrcFiles: iconsDir,
        fontsSrcFiles: [`${srcDir}/fonts/**/*.{eot,svg,ttf,woff,woff2}`, `!${iconsDir}`],
        fontsOutputDir: `${outputDir}/fonts`,
        revManifest: `${outputDir}/rev-manifest.json`,
        scriptsLibsFilename,
        scriptsAppFilename,
        scriptsSrcFiles: [
            `${srcDir}/js/**/*.js`,
            `!${srcDir}/js/**/*.spec.js`
        ],
        scriptsOutputFiles: [
            `${outputDir}/js/${scriptsLibsFilename}`,
            `${outputDir}/js/${scriptsAppFilename}`,
            `${outputDir}/js/**/*.js`
        ],
        outputFiles: [`${outputDir}/**/*.{html,css,js}`],
        scriptsOutputDir: `${outputDir}/js`,
        stylesMainSrcFiles: [`${srcDir}/sass/*.scss`],
        stylesAllSrcFiles: [`${srcDir}/sass/**/*.scss`],
        stylesSrcGeneratedDir: `${srcDir}/sass/generated`,
        stylesOutputFiles: [`${outputDir}/css/*.css`],
        stylesOutputDir: `${outputDir}/css`
    };
}();
