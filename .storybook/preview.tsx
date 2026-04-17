import type { Preview } from "@storybook/react";
import React from "react";
import "../src/styles/globals.css";
import theme from './theme';

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className="bg-background text-foreground selection:bg-brand/30 antialiased p-8 min-h-screen">
        <Story />
      </div>
    ),
  ],

  parameters: {
    docs: {
      theme,
    },
    layout: "centered",
    backgrounds: {
      default: 'linear-dark',
      values: [
        {
          name: "linear-dark",
          value: "#08090a",
        },
        {
          name: "white",
          value: "#ffffff",
        }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
