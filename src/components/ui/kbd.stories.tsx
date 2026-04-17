import type { Meta, StoryObj } from "@storybook/react"
import { Kbd } from "./kbd"

const meta: Meta<typeof Kbd> = {
  title: "Components/Kbd",
  component: Kbd,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Kbd>

export const Single: Story = {
  args: {
    children: "K",
  },
}

export const Command: Story = {
  args: {
    children: "⌘",
  },
}

export const Combination: Story = {
  render: () => (
    <div className="flex items-center gap-1">
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </div>
  ),
}

export const Navigation: Story = {
  render: () => (
    <div className="flex items-center gap-1">
      <Kbd>↑</Kbd>
      <Kbd>↓</Kbd>
    </div>
  ),
}
