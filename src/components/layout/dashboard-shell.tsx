"use client";

import * as React from "react";
import { 
  Sidebar, 
  SidebarHeader, 
  SidebarContent, 
  SidebarItem, 
  SidebarFooter 
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Inbox, 
  Layers, 
  Settings, 
  Search, 
  Plus,
  HelpCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <Sidebar>
        <SidebarHeader className="mb-4">
          <div className="w-6 h-6 rounded-sm bg-brand shadow-lg shadow-brand/20 flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full opacity-90" />
          </div>
          <span className="font-emphasis text-sm tracking-tight">Antigravity</span>
        </SidebarHeader>

        <SidebarContent>
          <SidebarItem icon={<Home />} active>Workspace</SidebarItem>
          <SidebarItem icon={<Inbox />}>Inboxes</SidebarItem>
          <SidebarItem icon={<Layers />}>Projects</SidebarItem>
          <div className="mt-6 mb-2 px-3 text-[10px] uppercase tracking-widest text-text-muted font-ui">Library</div>
          <SidebarItem icon={<Layers />}>Components</SidebarItem>
          <SidebarItem icon={<Layers />}>Typography</SidebarItem>
          <SidebarItem icon={<Layers />}>Elevation</SidebarItem>
        </SidebarContent>

        <SidebarFooter>
          <SidebarItem icon={<Settings />}>Settings</SidebarItem>
          <SidebarItem icon={<HelpCircle />}>Support</SidebarItem>
        </SidebarFooter>
      </Sidebar>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Navigation */}
        <header className="h-12 border-b border-border-subtle bg-background/50 backdrop-blur-md flex items-center justify-between px-6 shrink-0 sticky top-0 z-20">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative max-w-sm w-full group">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-tertiary group-focus-within:text-brand transition-colors" />
              <input 
                placeholder="Search Workspace..." 
                className="w-full bg-transparent border-none outline-none pl-9 text-sm text-foreground placeholder:text-text-muted font-ui"
              />
              <div className="absolute right-2.5 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded border border-border-subtle bg-surface-1 text-[10px] font-mono text-text-muted">
                ⌘K
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <Plus className="w-4 h-4" />
            </Button>
            <Avatar className="w-7 h-7">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Scrollable Layout Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="container mx-auto py-8 px-8">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
