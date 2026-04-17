import * as React from "react";
import { cn } from "@/lib/utils";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <aside
    ref={ref}
    className={cn(
      "flex flex-col w-60 h-screen bg-panel border-r border-border-subtle shrink-0",
      className
    )}
    {...props}
  />
));
Sidebar.displayName = "Sidebar";

const SidebarHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("px-4 py-3 flex items-center gap-2", className)} {...props} />
);

const SidebarContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex-1 overflow-y-auto px-2 space-y-0.5", className)} {...props} />
);

const SidebarItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { active?: boolean; icon?: React.ReactNode }
>(({ className, active, icon, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center gap-2.5 px-3 py-1.5 rounded-md text-sm font-ui transition-colors cursor-pointer group",
      active 
        ? "bg-surface-2 text-foreground" 
        : "text-text-tertiary hover:bg-surface-1 hover:text-text-secondary",
      className
    )}
    {...props}
  >
    {icon && <div className={cn("w-4 h-4 shrink-0", active ? "text-brand-accent" : "text-text-muted group-hover:text-text-tertiary")}>{icon}</div>}
    <span className="truncate">{children}</span>
  </div>
));
SidebarItem.displayName = "SidebarItem";

const SidebarFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("px-4 py-3 border-t border-border-subtle", className)} {...props} />
);

export { Sidebar, SidebarHeader, SidebarContent, SidebarItem, SidebarFooter };
