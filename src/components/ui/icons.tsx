import * as React from "react"
import { cn } from "@/lib/utils"

export type IssueStatus = "backlog" | "todo" | "in-progress" | "done" | "canceled"
export type IssuePriority = "none" | "low" | "medium" | "high" | "urgent"

export const StatusIcon = ({ status, className }: { status: IssueStatus; className?: string }) => {
  switch (status) {
    case "backlog":
      return <div className={cn("w-3.5 h-3.5 rounded-full border-2 border-dashed border-text-muted", className)} />
    case "todo":
      return <div className={cn("w-3.5 h-3.5 rounded-full border-2 border-text-muted", className)} />
    case "in-progress":
      return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={cn("text-warning", className)}>
          <path d="M7 1V13M7 1C10.3137 1 13 3.68629 13 7C13 10.3137 10.3137 13 7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case "done":
      return (
        <div className={cn("w-3.5 h-3.5 rounded-full bg-brand flex items-center justify-center", className)}>
          <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
            <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )
    case "canceled":
      return (
        <div className={cn("w-3.5 h-3.5 rounded-full border-2 border-text-muted flex items-center justify-center opacity-50", className)}>
           <div className="w-1.5 h-px bg-text-muted rotate-45" />
        </div>
      )
    default:
      return <div className={cn("w-3.5 h-3.5 rounded-full border-2 border-text-muted opacity-50", className)} />
  }
}

export const PriorityIcon = ({ priority, className }: { priority: IssuePriority; className?: string }) => {
  const bars = { none: 0, low: 1, medium: 2, high: 3, urgent: 0 }
  if (priority === "urgent") return <div className={cn("w-3.5 h-3.5 rounded bg-error/20 flex items-center justify-center text-error font-bold text-[8px]", className)}>!</div>
  
  return (
    <div className={cn("flex items-end gap-[1px] h-2.5", className)}>
      {[1, 2, 3].map((i) => (
        <div 
          key={i} 
          className={cn(
            "w-0.5 rounded-full",
            i === 1 ? "h-1.5" : i === 2 ? "h-2" : "h-2.5",
            i <= bars[priority] ? "bg-text-tertiary" : "bg-border"
          )} 
        />
      ))}
    </div>
  )
}
