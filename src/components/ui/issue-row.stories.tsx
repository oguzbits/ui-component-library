import type { Meta, StoryObj } from "@storybook/react"
import { IssueRow } from "./issue-row"

const meta: Meta<typeof IssueRow> = {
  title: "Components/IssueRow",
  component: IssueRow,
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "select",
      options: ["backlog", "todo", "in-progress", "done", "canceled"],
    },
    priority: {
      control: "select",
      options: ["none", "low", "medium", "high", "urgent"],
    },
  },
}

export default meta
type Story = StoryObj<typeof IssueRow>

export const Default: Story = {
  args: {
    id: "LIN-101",
    title: "Implement sub-pixel rendering for dark mode",
    status: "in-progress",
    priority: "high",
    labels: ["UI", "Core"],
    comments: 3,
    assignee: { name: "Oguz", image: "https://github.com/oguzbits.png" },
  },
}

export const Urgent: Story = {
  args: {
    id: "LIN-999",
    title: "Production database is unreachable from edge functions",
    status: "todo",
    priority: "urgent",
    labels: ["Critical", "Infra"],
    comments: 42,
  },
}

export const Completed: Story = {
  args: {
    id: "LIN-042",
    title: "Refactor button shadows to use Section 6 elevation",
    status: "done",
    priority: "medium",
    labels: ["Refactor"],
    comments: 0,
    assignee: { name: "Oguz", image: "https://github.com/oguzbits.png" },
  },
}

export const List: Story = {
  render: () => (
    <div className="rounded-xl border border-border bg-panel overflow-hidden">
      <IssueRow id="LIN-001" title="Initial system architecture" status="done" priority="high" labels={["Design"]} />
      <IssueRow id="LIN-002" title="Define luminance-based color tokens" status="done" priority="medium" labels={["Design"]} />
      <IssueRow id="LIN-003" title="Implement core button component" status="in-progress" priority="high" labels={["UI"]} comments={2} />
      <IssueRow id="LIN-004" title="Add Storybook documentation" status="todo" priority="low" labels={["Docs"]} />
    </div>
  ),
}
