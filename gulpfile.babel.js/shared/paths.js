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
    const iconsDir = `${srcDir}/fonts/iconfont/*.svg`;

    return {
        srcDir,
        outputDir,
        srcIndex: `${srcDir}/index.html`,
        imagesSrcFiles: `${srcDir}/images/**/*.{jpg,png,gif,svg}`,
        imagesOutputFiles: `${outputDir}/images`,
        fontsIconSrcFiles: iconsDir,
        fontsSrcFiles: [`${srcDir}/fonts/**/*.{eot,svg,ttf,woff,woff2}`, `!${iconsDir}`],
        fontsOutputDir: `${outputDir}/fonts`,
        revManifest: `${outputDir}/rev-manifest.json`,
        scriptsSrcFiles: `${srcDir}/js/**/*.js`,
        scriptsOutputFiles: `${outputDir}/js/**/*.js`,
        outputFiles: [`${outputDir}/**/*.{html,css,js}`],
        scriptsOutputDir: `${outputDir}/js`,
        stylesMainSrcFiles: [`${srcDir}/sass/*.scss`],
        stylesAllSrcFiles: [`${srcDir}/sass/**/*.scss`],
        stylesSrcGeneratedDir: `${srcDir}/sass/generated`,
        stylesOutputFiles: [`${outputDir}/css/*.css`],
        stylesOutputDir: `${outputDir}/css`
    };

}();
