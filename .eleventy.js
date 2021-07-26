module.exports = eleventyConfig => {
    eleventyConfig.addPassthroughCopy('eleventy/css');
    eleventyConfig.addWatchTarget('eleventy/css/**/*.css');

    return {
        dir: {
            input: './eleventy',
            output: './eleventy/_site',
        },
        htmlTemplateEngine: 'njk'
    };
};
