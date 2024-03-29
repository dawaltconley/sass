const yaml = require('js-yaml');

module.exports = eleventyConfig => {
    eleventyConfig.addWatchTarget('eleventy/css');
    eleventyConfig.addPassthroughCopy('eleventy/assets');

    // add YAML support
    eleventyConfig.addDataExtension('yml', data => yaml.safeLoad(data));
    eleventyConfig.addDataExtension('yaml', data => yaml.safeLoad(data));

    return {
        dir: {
            input: './eleventy',
            output: './eleventy/_site',
            layouts: '_layouts',
            data: '_data',
        },
        htmlTemplateEngine: 'liquid'
    };
};
