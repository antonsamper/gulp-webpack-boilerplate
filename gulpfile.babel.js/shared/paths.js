/*
 * @title Paths
 * @description An function that returns an object containing file paths
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import packagejson from '../../package.json';


/*********************************************************************************
 2. EXPORTS
 *********************************************************************************/

module.exports = function () {

    const srcDir = 'src';
    const outputDir = `dist/${packagejson.version}`;
    const iconsFolderName = 'icons';
    const iconsSrcFiles = `${srcDir}/images/${iconsFolderName}/*.svg`;
    const scriptsMainFile = 'app.js';

    return {
        srcDir,
        outputDir,
        srcIndex: `${srcDir}/index.html`,
        imagesSrcFiles: [`${srcDir}/images/**/*.{jpg,png,gif,svg}`, `!${iconsSrcFiles}`],
        imagesOutputFiles: `${outputDir}/images`,
        iconsSrcFiles,
        iconsFolderName,
        fontsSrcFiles: `${srcDir}/fonts/**/*.{eot,svg,ttf,woff,woff2}`,
        faviconFile: `${srcDir}/favicon.ico`,
        scriptsMainFile,
        scriptsSrcFiles: `${srcDir}/js/**/*.js`,
        scriptsSrcDir: `${srcDir}/js`,
        scriptsOutputDir: `${outputDir}/js`,
        scriptsOutputFiles: [`${outputDir}/js/**/*.js`, `!${outputDir}/js/${scriptsMainFile}`],
        outputFiles: [`${outputDir}/**/*.{html,css,js}`],
        stylesMainSrcFiles: [`${srcDir}/sass/*.scss`],
        stylesAllSrcFiles: [`${srcDir}/**/*.scss`],
        stylesSrcGeneratedDir: `${srcDir}/sass/generated`,
        stylesOutputFiles: `${outputDir}/css/*.css`,
        stylesOutputDir: `${outputDir}/css`
    };

}();
