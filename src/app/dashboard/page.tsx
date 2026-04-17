"use client";

import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Toolbar, ToolbarButton, ToolbarSeparator } from "@/components/ui/toolbar";
import { Button } from "@/components/ui/button";
import { Filter, Calendar, List, LayoutGrid, MoreHorizontal, MessageSquare } from "lucide-react";

export default function DashboardDemo() {
  return (
    <DashboardShell>
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-text-tertiary hover:text-text-secondary transition-colors cursor-pointer">Projects</span>
              <span className="text-text-muted">/</span>
              <span className="text-foreground font-emphasis">Linear Modernization</span>
            </div>
            <h1 className="text-2xl font-emphasis tracking-tight">System Components Portfolio</h1>
          </div>
          <div className="flex items-center gap-3">
            <Toolbar>
              <ToolbarButton active><LayoutGrid className="w-4 h-4" /></ToolbarButton>
              <ToolbarButton><List className="w-4 h-4" /></ToolbarButton>
              <ToolbarSeparator />
              <ToolbarButton><Filter className="w-3.5 h-3.5 mr-1.5" /> Filter</ToolbarButton>
            </Toolbar>
            <Button size="sm">Create Component</Button>
          </div>
        </div>

        {/* Filters / Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-transparent border-b border-border/50 w-full justify-start rounded-none h-11 p-0 gap-8">
            <TabsTrigger 
              value="all" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand data-[state=active]:bg-transparent px-0 h-full"
            >
              All Components
            </TabsTrigger>
            <TabsTrigger 
              value="recent" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand data-[state=active]:bg-transparent px-0 h-full"
            >
              Recently Edited
            </TabsTrigger>
            <TabsTrigger 
              value="archived" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand data-[state=active]:bg-transparent px-0 h-full"
            >
              Archived
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Task Cards - Showing real component depth */}
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="group hover:border-border/80 transition-all cursor-pointer">
                  <CardContent className="p-4 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <div className={cn(
                          "w-2 h-2 rounded-full",
                          i % 3 === 0 ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]" : 
                          i % 2 === 0 ? "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.3)]" : "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.3)]"
                        )} />
                        <span className="text-[10px] font-mono text-text-tertiary">LIN-{1000 + i}</span>
                      </div>
                      <MoreHorizontal className="w-4 h-4 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <h3 className="font-ui text-sm leading-tight text-text-secondary group-hover:text-foreground">
                      Refactor system {i === 1 ? "Command Palette" : i === 2 ? "Luminance Cards" : "Data Grid"} to use 2026 specs.
                    </h3>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary" className="h-5 px-1.5 text-[10px]">v1.4.0</Badge>
                        <div className="flex items-center gap-1 text-[10px] text-text-muted">
                          <MessageSquare className="w-3 h-3" /> 2
                        </div>
                      </div>
                      <div className="flex -space-x-2">
                        <div className="w-5 h-5 rounded-full border border-border bg-surface-2 flex items-center justify-center text-[8px] font-mono text-text-muted">AB</div>
                        <div className="w-5 h-5 rounded-full border border-border bg-brand flex items-center justify-center text-[8px] font-mono text-white italic">C</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Skeleton State Example */}
              <Card className="opacity-50">
                <CardContent className="p-4 space-y-4">
                  <div className="flex items-center gap-2">
                    <Skeleton className="w-2 h-2 rounded-full" />
                    <Skeleton className="h-3 w-12" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-5 w-5 rounded-full" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  );
}

// Simple cn utility for i % 3 logic
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
