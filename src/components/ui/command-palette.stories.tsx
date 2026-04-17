import type { Meta, StoryObj } from "@storybook/react";
import { CommandPalette } from "./command-palette";

const meta: Meta<typeof CommandPalette> = {
  title: "Components/UI/CommandPalette",
  component: CommandPalette,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CommandPalette>;

export const Default: Story = {
  args: {
    className: "w-[450px]",
  },
};

export const CustomShadow: Story = {
  args: {
    className: "w-[450px] shadow-dialog",
  },
  render: (args) => (
    <div className="p-20 bg-background flex justify-center">
       <CommandPalette {...args} />
    </div>
  )
};
