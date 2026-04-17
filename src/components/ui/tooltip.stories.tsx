import type { Meta, StoryObj } from "@storybook/react"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "./tooltip"
import { Button } from "./button"
import { Kbd } from "./kbd"
import { Plus } from "lucide-react"
import * as React from "react"

const meta: Meta<typeof Tooltip> = {
  title: "Components/Overlay/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: () => (
    <div className="flex justify-center p-20">
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" className="w-10 h-10">
              <Plus className="w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="flex items-center gap-4">
            <span>Create new issue</span>
            <div className="flex items-center gap-1">
               <Kbd className="bg-surface-3 border-transparent text-text-tertiary">C</Kbd>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  ),
}
