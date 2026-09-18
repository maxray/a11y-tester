const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPassthroughCopy({ "src/styles": "styles" });
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
  // Vue game build output — populated by `npm run build:game` before the 11ty build runs.
  eleventyConfig.addPassthroughCopy({ "game-app/dist": "assets/game" });

  eleventyConfig.addCollection("rule", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/content/rules/*.md").sort((a, b) => {
      return a.data.id.localeCompare(b.data.id, undefined, { numeric: true });
    })
  );

  eleventyConfig.addCollection("example", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/content/examples/*.md")
  );

  eleventyConfig.addFilter("examplesForRule", (examples, ruleId) =>
    examples.filter((example) => example.data.ruleId === ruleId)
  );

  eleventyConfig.addFilter("byPrinciple", (rules, principle) =>
    rules.filter((rule) => rule.data.principle === principle)
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
