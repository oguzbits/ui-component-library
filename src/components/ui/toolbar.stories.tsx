import type { Meta, StoryObj } from "@storybook/react";
import { Toolbar, ToolbarButton, ToolbarSeparator } from "./toolbar";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List, MoreHorizontal } from "lucide-react";

const meta: Meta = {
  title: "Components/UI/Toolbar",
  component: Toolbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  render: () => (
    <Toolbar>
      <ToolbarButton active><Bold className="w-4 h-4" /></ToolbarButton>
      <ToolbarButton><Italic className="w-4 h-4" /></ToolbarButton>
      <ToolbarButton><Underline className="w-4 h-4" /></ToolbarButton>
      <ToolbarSeparator />
      <ToolbarButton><AlignLeft className="w-4 h-4" /></ToolbarButton>
      <ToolbarButton><AlignCenter className="w-4 h-4" /></ToolbarButton>
      <ToolbarButton><AlignRight className="w-4 h-4" /></ToolbarButton>
      <ToolbarSeparator />
      <ToolbarButton><List className="w-4 h-4" /></ToolbarButton>
      <ToolbarButton><MoreHorizontal className="w-4 h-4" /></ToolbarButton>
    </Toolbar>
  ),
};
