module.exports = function (eleventyConfig) {
  // rebuild on CSS changes
  eleventyConfig.addWatchTarget('./src/_includes/css.njk');

  return {
    dir: {
      input: 'src',
      output: 'public',
      data: '_data',
      includes: '_includes',
      layouts: '_layouts'
    },
    templateFormats: [
      'md',
      'njk'
    ],
    htmlTemplateEngine: 'njk'
  };
};