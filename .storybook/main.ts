const path = require("path");
import type { StorybookConfig } from '@storybook/svelte-webpack5';

const config: StorybookConfig = {
  stories: ['../assets/**/*.mdx', '../assets/svelte/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-svelte-csf',
  ],
  docs: {
    autodocs: true,
  },
  framework: {
    name: '@storybook/svelte-webpack5',
    options: {},
  },
  webpackFinal: async (config, { configType }) => {
    const svelteLoader = config.module.rules.find(r => {
      if (typeof r !== 'object') {
        return false;
      }

      return r.loader && r.loader.includes("svelte-loader")
    });

    if (svelteLoader) {
      svelteLoader.options.preprocess = require("svelte-preprocess")();
      config.module.rules.push({
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "/")
      });
    }

    // Return the altered config
    return config;
  },
};

export default config;
