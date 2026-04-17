import type { Meta, StoryObj } from "@storybook/react"
import { DataTable } from "./data-table"
import { Checkbox } from "./table"
import { StatusIcon, PriorityIcon, IssueStatus, IssuePriority } from "./icons"
import { ColumnDef } from "@tanstack/react-table"
import * as React from "react"

interface Issue {
  id: string
  title: string
  status: IssueStatus
  priority: IssuePriority
  assignee: { name: string; avatar?: string }
  label: string
}

const data: Issue[] = [
  {
    id: "LIN-142",
    title: "Implement sub-pixel chiseled borders for dialogs",
    status: "in-progress",
    priority: "high",
    assignee: { name: "Oguz Bits" },
    label: "UI",
  },
  {
    id: "LIN-105",
    title: "Fix TanStack table header alignment in Safari",
    status: "todo",
    priority: "medium",
    assignee: { name: "Sarah" },
    label: "Bug",
  },
  {
    id: "LIN-089",
    title: "Update Inter Variable to v4.0",
    status: "done",
    priority: "low",
    assignee: { name: "Mike" },
    label: "Infra",
  },
  {
    id: "LIN-201",
    title: "Security: API leak in developer internal gateway",
    status: "backlog",
    priority: "urgent",
    assignee: { name: "Security Team" },
    label: "Urgent",
  },
]

const columns: ColumnDef<Issue>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <div className="font-mono text-[11px] text-text-muted">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <StatusIcon status={row.getValue("status")} />
        <span className="capitalize">{row.getValue("status")}</span>
      </div>
    ),
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => <PriorityIcon priority={row.getValue("priority")} />,
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => <div className="font-emphasis max-w-[400px] truncate">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "assignee",
    header: "Assignee",
    cell: ({ row }) => (
       <div className="flex items-center gap-2">
         <div className="w-5 h-5 rounded-full bg-surface-3 flex items-center justify-center text-[10px] border border-border/40">
           {(row.getValue("assignee") as any).name[0]}
         </div>
         <span className="text-[11px] text-text-tertiary">{(row.getValue("assignee") as any).name}</span>
       </div>
    ),
  },
]

const meta: Meta<typeof DataTable> = {
  title: "Components/Data/DataTable",
  component: DataTable,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof DataTable>

export const Default: Story = {
  render: () => (
    <div className="p-8 bg-background h-screen">
      <DataTable columns={columns} data={data} />
    </div>
  ),
}
