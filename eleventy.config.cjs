// @ts-check
const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");
const browserslist = require("browserslist");
const { browserslistToTargets } = require("lightningcss");

const INPUT_DIR = "src";
const OUTPUT_DIR = "dist";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    viteOptions: {
      css: {
        transformer: "lightningcss",
        lightningcss: {
          targets: browserslistToTargets(browserslist(">= 0.25%")),
        },
      },
      build: {
        cssMinify: "lightningcss",
      },
    },
  });

  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    dir: { input: INPUT_DIR, output: OUTPUT_DIR },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
