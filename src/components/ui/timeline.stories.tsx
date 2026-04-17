import type { Meta, StoryObj } from "@storybook/react"
import { Timeline } from "./timeline"
import * as React from "react"

const meta: Meta<typeof Timeline> = {
  title: "Components/Data/Timeline",
  component: Timeline,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Timeline>

const mockItems: any[] = [
  {
    id: "1",
    label: "Design System V2",
    start: 0,
    end: 45,
    status: "completed",
  },
  {
    id: "2",
    label: "API Gateway Migration",
    start: 20,
    end: 80,
    status: "in-progress",
  },
  {
    id: "3",
    label: "Mobile App Refactor",
    start: 40,
    end: 60,
    status: "in-progress",
  },
  {
    id: "4",
    label: "Q3 Planning",
    start: 70,
    end: 95,
    status: "planned",
  },
]

export const Default: Story = {
  render: () => (
    <div className="p-8 bg-background h-screen">
       <div className="mb-6">
         <h1 className="text-xl font-emphasis mb-1">Product Roadmap</h1>
         <p className="text-sm text-text-muted">Tracking high-level initiatives for the first half of the year.</p>
       </div>
       <Timeline items={mockItems} />
    </div>
  ),
}
