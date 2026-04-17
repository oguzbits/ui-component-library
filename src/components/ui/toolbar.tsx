import * as React from "react";
import { cn } from "@/lib/utils";

const Toolbar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center gap-1 rounded-lg border border-border bg-panel p-1.5 shadow-sm",
      className
    )}
    {...props}
  />
));
Toolbar.displayName = "Toolbar";

const ToolbarButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }
>(({ className, active, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "inline-flex h-7 items-center justify-center rounded-[2px] px-2 text-xs font-ui transition-all hover:bg-surface-2 focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
      active ? "bg-surface-3 text-foreground" : "text-text-secondary",
      className
    )}
    {...props}
  />
));
ToolbarButton.displayName = "ToolbarButton";

const ToolbarSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mx-1 h-4 w-px bg-border", className)}
    {...props}
  />
));
ToolbarSeparator.displayName = "ToolbarSeparator";

export { Toolbar, ToolbarButton, ToolbarSeparator };
