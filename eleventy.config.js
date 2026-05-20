export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/.nojekyll": ".nojekyll" });

  eleventyConfig.addFilter("readableDate", (dateString) => {
    return new Date(dateString).toLocaleDateString("en", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  });

  eleventyConfig.addFilter("where", (array, key, value) => {
    return (array || []).filter((item) => item[key] === value);
  });

  eleventyConfig.addFilter("notWhere", (array, key, value) => {
    return (array || []).filter((item) => item[key] !== value);
  });

  return {
    pathPrefix: process.env.BASE_PATH || "/",
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
}
