import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-onboarding",
    "@storybook/addon-docs",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  docs: {
    autodocs: "tag",
  },

  async viteFinal(config) {
    config.plugins?.push(tailwindcss());
    config.plugins?.push(tsconfigPaths());
    return config;
  },
};
export default config;
