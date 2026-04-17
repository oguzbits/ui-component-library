import * as React from "react"
import { cn } from "@/lib/utils"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import { ChevronRight, Search, Plus } from "lucide-react"
import { Kbd } from "./kbd"

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { isCollapsed?: boolean }
>(({ className, isCollapsed = false, ...props }, ref) => (
  <aside
    ref={ref}
    className={cn(
      "flex h-full flex-col bg-panel border-r border-border/40 transition-all duration-300 ease-in-out",
      isCollapsed ? "w-[60px]" : "w-[240px]",
      className
    )}
    {...props}
  />
))
Sidebar.displayName = "Sidebar"

const SidebarHeader = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col gap-2 p-4", className)} {...props}>
    {children}
  </div>
)

const SidebarContent = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex-1 overflow-y-auto px-2 space-y-1", className)} {...props}>
    {children}
  </div>
)

const SidebarItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    icon?: React.ReactNode
    label: string
    active?: boolean
    shortcut?: string
    isCollapsed?: boolean
  }
>(({ className, icon, label, active, shortcut, isCollapsed, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "group flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer transition-colors",
      "hover:bg-surface-2",
      active ? "bg-surface-2 text-foreground" : "text-text-tertiary",
      className
    )}
    {...props}
  >
    {icon && <div className="flex-shrink-0 w-4 h-4">{icon}</div>}
    {!isCollapsed && (
      <div className="flex flex-1 items-center justify-between min-w-0">
        <span className="truncate text-sm font-ui leading-none">{label}</span>
        {shortcut && <Kbd className="opacity-0 group-hover:opacity-100 transition-opacity">{shortcut}</Kbd>}
      </div>
    )}
  </div>
))
SidebarItem.displayName = "SidebarItem"

const SidebarGroup = ({ 
  label, 
  children, 
  isCollapsed,
  defaultOpen = true 
}: { 
  label: string
  children: React.ReactNode
  isCollapsed?: boolean
  defaultOpen?: boolean
}) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)
  
  if (isCollapsed) return <div className="py-4 border-t border-border/20 flex flex-col items-center gap-4">{children}</div>

  return (
    <CollapsiblePrimitive.Root open={isOpen} onOpenChange={setIsOpen} className="py-2">
      <div className="group flex items-center justify-between px-2 mb-1">
        <CollapsiblePrimitive.Trigger className="flex items-center gap-1 text-[10px] font-bold text-text-muted uppercase tracking-wider hover:text-text-tertiary transition-colors">
          <ChevronRight className={cn("w-3 h-3 transition-transform", isOpen && "rotate-90")} />
          {label}
        </CollapsiblePrimitive.Trigger>
        <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-surface-2 rounded transition-all">
          <Plus className="w-3 h-3 text-text-muted" />
        </button>
      </div>
      <CollapsiblePrimitive.Content className="space-y-0.5">
        {children}
      </CollapsiblePrimitive.Content>
    </CollapsiblePrimitive.Root>
  )
}

const SidebarSearch = ({ isCollapsed }: { isCollapsed?: boolean }) => {
  if (isCollapsed) return (
    <div className="flex justify-center p-2 mt-2">
      <div className="p-2 rounded-md hover:bg-surface-2 cursor-pointer text-text-tertiary">
        <Search className="w-4 h-4" />
      </div>
    </div>
  )

  return (
    <div className="group relative mx-2 mb-4">
      <div className="flex items-center gap-2 px-3 h-8 rounded-lg border border-border/40 bg-surface-1 transition-all group-hover:border-border/60 hover:bg-surface-2 cursor-pointer">
        <Search className="w-3.5 h-3.5 text-text-muted" />
        <span className="text-sm text-text-muted font-ui">Search</span>
        <div className="flex-1" />
        <Kbd>⌘K</Kbd>
      </div>
    </div>
  )
}

export { Sidebar, SidebarHeader, SidebarContent, SidebarItem, SidebarGroup, SidebarSearch }
