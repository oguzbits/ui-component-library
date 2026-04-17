import type { Meta, StoryObj } from "@storybook/react"
import { Sidebar, SidebarHeader, SidebarContent, SidebarItem, SidebarGroup, SidebarSearch } from "./sidebar"
import { Inbox, Layout, Activity, MessageSquare, Settings, Users, Star, Hash, Archive } from "lucide-react"
import * as React from "react"

const meta: Meta<typeof Sidebar> = {
  title: "Components/Navigation/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    isCollapsed: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const Default: Story = {
  render: (args) => (
    <div className="h-screen bg-background">
      <Sidebar {...args}>
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2 py-1 select-none">
            <div className="w-6 h-6 rounded bg-brand flex items-center justify-center text-[10px] font-bold text-white">L</div>
            {!args.isCollapsed && <span className="font-emphasis text-sm">Linear Space</span>}
          </div>
        </SidebarHeader>
        
        <SidebarSearch isCollapsed={args.isCollapsed} />

        <SidebarContent>
          <SidebarItem icon={<Inbox />} label="Inbox" shortcut="G I" isCollapsed={args.isCollapsed} />
          <SidebarItem icon={<Activity />} label="My Issues" shortcut="G M" isCollapsed={args.isCollapsed} active />
          <SidebarItem icon={<Layout />} label="Views" shortcut="G V" isCollapsed={args.isCollapsed} />
          
          <SidebarGroup label="Favorities" isCollapsed={args.isCollapsed}>
            <SidebarItem icon={<Star className="text-warning fill-warning" />} label="Security Audit" isCollapsed={args.isCollapsed} />
            <SidebarItem icon={<Star className="text-warning fill-warning" />} label="UI Refactor" isCollapsed={args.isCollapsed} />
          </SidebarGroup>

          <SidebarGroup label="Teams" isCollapsed={args.isCollapsed}>
            <SidebarItem icon={<Hash />} label="Core Engine" isCollapsed={args.isCollapsed} />
            <SidebarItem icon={<Hash />} label="Frontend" isCollapsed={args.isCollapsed} />
            <SidebarItem icon={<Hash />} label="Infrastructure" isCollapsed={args.isCollapsed} />
          </SidebarGroup>
        </SidebarContent>

        <div className="p-4 border-t border-border/20">
          <SidebarItem icon={<Settings />} label="Settings" isCollapsed={args.isCollapsed} />
          {!args.isCollapsed && (
             <div className="mt-4 flex items-center gap-3 px-2 py-1 hover:bg-surface-1 rounded-lg cursor-pointer transition-colors">
               <div className="w-6 h-6 rounded-full bg-brand-subtle flex items-center justify-center text-[10px] text-brand">O</div>
               <div className="flex flex-col">
                  <span className="text-xs font-ui font-bold">Oguz Bits</span>
                  <span className="text-[10px] text-text-muted">Pro Plan</span>
               </div>
             </div>
          )}
        </div>
      </Sidebar>
    </div>
  ),
}

export const FocusMode: Story = {
  ...Default,
  args: {
    isCollapsed: true,
  },
}
