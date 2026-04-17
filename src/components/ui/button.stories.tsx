import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link", "brand"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Brand: Story = {
  args: {
    variant: "brand",
    children: "Brand Primary",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Action",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Action",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Action",
  },
};
