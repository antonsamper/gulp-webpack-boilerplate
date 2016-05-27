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

    return {
        srcDir,
        outputDir,
        srcIndex: `${srcDir}/index.html`,
        imagesSrcFiles: [`${srcDir}/images/**/*.{jpg,png,gif,svg}`, `!${iconsSrcFiles}`],
        imagesOutputFiles: `${outputDir}/images`,
        iconsSrcFiles,
        iconsFolderName,
        fontsSrcFiles: `${srcDir}/fonts/**/*.{eot,svg,ttf,woff,woff2}`,
        scriptsSrcFiles: `${srcDir}/js/**/*.js`,
        scriptsOutputFiles: `${outputDir}/js/**/*.js`,
        outputFiles: [`${outputDir}/**/*.{html,css,js}`],
        scriptsOutputDir: `${outputDir}/js`,
        stylesMainSrcFiles: [`${srcDir}/sass/*.scss`],
        stylesAllSrcFiles: [`${srcDir}/sass/**/*.scss`],
        stylesSrcGeneratedDir: `${srcDir}/sass/generated`,
        stylesOutputFiles: `${outputDir}/css/*.css`,
        stylesOutputDir: `${outputDir}/css`
    };

}();
