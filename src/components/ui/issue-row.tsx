import * as React from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Kbd } from "@/components/ui/kbd"
import { MoreHorizontal, Paperclip, MessageSquare } from "lucide-react"

export type IssueStatus = "backlog" | "todo" | "in-progress" | "done" | "canceled"
export type IssuePriority = "none" | "low" | "medium" | "high" | "urgent"

interface IssueRowProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string
  title: string
  status: IssueStatus
  priority: IssuePriority
  labels?: string[]
  assignee?: { name: string; image?: string }
  comments?: number
}

const StatusIcon = ({ status }: { status: IssueStatus }) => {
  switch (status) {
    case "backlog":
      return <div className="w-3.5 h-3.5 rounded-full border-2 border-dashed border-text-muted" />
    case "todo":
      return <div className="w-3.5 h-3.5 rounded-full border-2 border-text-muted" />
    case "in-progress":
      return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-warning">
          <path d="M7 1V13M7 1C10.3137 1 13 3.68629 13 7C13 10.3137 10.3137 13 7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case "done":
      return (
        <div className="w-3.5 h-3.5 rounded-full bg-brand flex items-center justify-center">
          <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
            <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )
    default:
      return <div className="w-3.5 h-3.5 rounded-full border-2 border-text-muted opacity-50" />
  }
}

const PriorityIcon = ({ priority }: { priority: IssuePriority }) => {
  const bars = { none: 0, low: 1, medium: 2, high: 3, urgent: 0 }
  if (priority === "urgent") return <div className="w-3.5 h-3.5 rounded-sm bg-error/20 flex items-center justify-center text-error font-bold text-[8px]">!</div>
  
  return (
    <div className="flex items-end gap-[1px] h-2.5">
      {[1, 2, 3].map((i) => (
        <div 
          key={i} 
          className={cn(
            "w-[3px] rounded-full",
            i === 1 ? "h-1.5" : i === 2 ? "h-2" : "h-2.5",
            i <= bars[priority] ? "bg-text-tertiary" : "bg-border"
          )} 
        />
      ))}
    </div>
  )
}

const IssueRow = React.forwardRef<HTMLDivElement, IssueRowProps>(
  ({ id, title, status, priority, labels = [], assignee, comments = 0, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group flex items-center gap-3 px-3 py-2 text-sm border-b border-border/40 hover:bg-surface-1 cursor-pointer transition-colors",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-3 min-w-[100px]">
          <PriorityIcon priority={priority} />
          <span className="text-[11px] font-mono text-text-tertiary uppercase tracking-wider">{id}</span>
        </div>
        
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <StatusIcon status={status} />
          <span className="truncate font-ui text-text-secondary group-hover:text-foreground transition-colors">{title}</span>
        </div>

        <div className="flex items-center gap-4 opacity-100 group-hover:opacity-100 transition-opacity">
          {labels.map((label) => (
            <Badge key={label} variant="secondary" className="h-5 px-1.5 text-[10px] bg-surface-2 text-text-tertiary font-normal">
              {label}
            </Badge>
          ))}
          
          <div className="flex items-center gap-3 text-text-muted">
             {comments > 0 && (
               <div className="flex items-center gap-1 text-[10px]">
                 <MessageSquare className="w-3 h-3" />
                 {comments}
               </div>
             )}
             
             {assignee ? (
               <Avatar className="w-5 h-5">
                 <AvatarImage src={assignee.image} />
                 <AvatarFallback className="text-[8px] bg-brand text-white">{assignee.name[0]}</AvatarFallback>
               </Avatar>
             ) : (
               <div className="w-5 h-5 rounded-full border border-dashed border-border" />
             )}
          </div>
        </div>
      </div>
    )
  }
)
IssueRow.displayName = "IssueRow"

export { IssueRow }
