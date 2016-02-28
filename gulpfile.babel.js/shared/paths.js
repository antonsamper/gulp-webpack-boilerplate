/*
 * @title Paths
 * @description An function that returns an object containing file paths
 */


/*********************************************************************************
 1. EXPORTS
 *********************************************************************************/

module.exports = function () {

    const srcBase = './src';
    const distBase = './dist';

    return {
        srcDir: srcBase,
        srcIndex: `${srcBase}/index.html`,
        imagesSrcFiles: `${srcBase}/images/**/*.{jpg,png,gif,svg}`,
        imagesOutputFiles: `${distBase}/images`,
        outputDir: distBase,


        eslintSrcFiles: [
            './.eslintrc',
            './bower.json',
            './package.json',
            `${srcBase}/js/**/*.js`,
            './gulpfile.babel.js/**/*.js'
        ],


        fontsIconSrcFiles: `${srcBase}/fonts/iconfont/*.svg`,
        fontsSrcFiles: `${srcBase}/fonts/*.{eot,svg,ttf,woff,woff2}`,
        fontsOutputDir: `${distBase}/fonts`,

        revManifest: `${distBase}/rev-manifest.json`,

        scriptsSrcFiles: [
            `${srcBase}/js/**/*.js`,
            `!${srcBase}/js/**/*.spec.js`
        ],
        scriptsOutputFiles: [
            `${distBase}/js/bower/**/*.js`,
            `${distBase}/js/app.js`,
            `${distBase}/js/**/*.js`
        ],
        scriptsOutputDir: `${distBase}/js`,
        scriptsLibsOutputDir: `${distBase}/js/bower`,

        outputFiles: [`${distBase}/**/*.{html,css,js}`],

        stylesMainSrcFiles: [`${srcBase}/sass/*.scss`],
        stylesAllSrcFiles: [`${srcBase}/sass/**/*.scss`],
        stylesSrcGeneratedDir: `${srcBase}/sass/generated`,
        stylesOutputFiles: [`${distBase}/css/*.css`],
        stylesOutputDir: `${distBase}/css`

    };
}();
