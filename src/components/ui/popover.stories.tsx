import type { Meta, StoryObj } from "@storybook/react"
import { Popover, PopoverTrigger, PopoverContent } from "./popover"
import { Button } from "./button"
import { Badge } from "./badge"
import { Check, ChevronRight } from "lucide-react"
import * as React from "react"

const meta: Meta<typeof Popover> = {
  title: "Components/Overlay/Popover",
  component: Popover,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Popover>

export const StatusPicker: Story = {
  render: () => (
    <div className="flex justify-center p-20">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-brand" />
            In Progress
            <ChevronRight className="w-3 h-3 text-text-muted rotate-90" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56 p-2">
          <div className="grid gap-1">
            <StatusItem label="Backlog" color="bg-text-muted" />
            <StatusItem label="Todo" color="bg-text-tertiary" />
            <StatusItem label="In Progress" color="bg-brand" active />
            <StatusItem label="Done" color="bg-success" />
            <StatusItem label="Canceled" color="bg-error/50" />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  ),
}

function StatusItem({ label, color, active }: { label: string; color: string; active?: boolean }) {
  return (
    <div className="flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-surface-1 cursor-pointer group">
      <div className="flex items-center gap-3">
        <div className={`w-2 h-2 rounded-full ${color}`} />
        <span className="text-sm font-ui text-text-secondary group-hover:text-foreground">{label}</span>
      </div>
      {active && <Check className="w-3.5 h-3.5 text-brand" />}
    </div>
  )
}
