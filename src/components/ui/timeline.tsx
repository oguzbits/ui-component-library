import * as React from "react"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "./tooltip"

interface TimelineItem {
  id: string
  label: string
  start: number // 0-100 percentage
  end: number // 0-100 percentage
  status: "completed" | "in-progress" | "planned"
}

export const Timeline = ({ items }: { items: TimelineItem[] }) => {
  return (
    <div className="w-full rounded-xl border border-border/40 bg-panel shadow-sm overflow-hidden select-none">
      {/* Timeline Header */}
      <div className="flex border-b border-border/40 h-10 items-center">
        <div className="w-48 border-r border-border/40 px-4 text-[11px] font-bold text-text-muted uppercase tracking-wider h-full flex items-center">Project</div>
        <div className="flex-1 relative h-full flex items-center px-4">
          <div className="flex justify-between w-full text-[10px] text-text-muted font-ui">
            <span>JAN</span>
            <span>FEB</span>
            <span>MAR</span>
            <span>APR</span>
            <span>MAY</span>
            <span>JUN</span>
          </div>
          {/* Vertical Grid Lines */}
          <div className="absolute inset-x-0 bottom-0 top-full flex justify-between px-4 pointer-events-none opacity-20 z-0">
             {[...Array(7)].map((_, i) => <div key={i} className="w-px h-[500px] bg-border" />)}
          </div>
        </div>
      </div>

      {/* Timeline Rows */}
      <div className="relative">
        {items.map((item) => (
          <div key={item.id} className="flex border-b border-border/20 last:border-0 h-12 group hover:bg-surface-1 transition-colors">
            <div className="w-48 border-r border-border/40 px-4 flex items-center">
              <span className="text-sm font-ui text-text-secondary truncate">{item.label}</span>
            </div>
            <div className="flex-1 relative flex items-center px-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div 
                      className={cn(
                        "h-6 rounded-md cursor-pointer transition-all hover:brightness-110",
                        item.status === "completed" ? "bg-success/20 border border-success/40" : 
                        item.status === "in-progress" ? "bg-brand/20 border border-brand/40 shadow-glow-sm" : 
                        "bg-surface-3 border border-border/60"
                      )}
                      style={{ 
                        marginLeft: `${item.start}%`, 
                        width: `${item.end - item.start}%` 
                      }}
                    >
                      <div className={cn(
                        "h-full rounded-sm opacity-60",
                        item.status === "completed" ? "bg-success" : 
                        item.status === "in-progress" ? "bg-brand" : 
                        "bg-text-muted"
                      )} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="text-[10px] space-y-1">
                      <div className="font-bold">{item.label}</div>
                      <div className="text-text-tertiary capitalize">{item.status}</div>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
