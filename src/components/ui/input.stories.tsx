import type { Meta, StoryObj } from "@storybook/nextjs";

import { Input } from "./input";

const meta: Meta<typeof Input> = {
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    type: {
      options: [
        "text",
        "number",
        "password",
        "email",
        "search",
        "tel",
        "url",
        "date",
        "datetime-local",
        "color",
        "file",
      ],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    type: "text",
  },
};
