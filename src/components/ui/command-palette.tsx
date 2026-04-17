import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Kbd } from "@/components/ui/kbd";

const CommandPalette = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "w-full max-w-[640px] rounded-xl border border-border bg-panel-elevated shadow-dialog overflow-hidden flex flex-col",
      className
    )}
    {...props}
  >
    {/* Search Header */}
    <div className="flex items-center px-4 py-3 border-b border-border/50 gap-3">
      <Search className="w-4 h-4 text-text-tertiary" />
      <input
        autoFocus
        placeholder="Search for an issue or command..."
        className="bg-transparent border-none outline-none flex-1 text-base text-foreground placeholder:text-text-tertiary font-sans"
      />
      <div className="flex items-center gap-1">
        <Kbd>⌘</Kbd><Kbd>K</Kbd>
      </div>
    </div>

    {/* Results list placeholder for visual demonstration */}
    <div className="py-2">
      <CommandItem label="Search issues" shortcut="S" />
      <CommandItem label="Create new issue" shortcut="C" />
      <CommandItem label="Go to personal projects" shortcut="G P" />
      <CommandItem label="Invite coworkers" />
    </div>

    {/* Footer Meta */}
    <div className="px-4 py-2 bg-surface-1 border-t border-border/30 flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <span className="text-[10px] font-ui text-text-tertiary uppercase tracking-wider">Navigation</span>
        <Kbd>↑↓</Kbd>
        <span className="text-[10px] font-ui text-text-tertiary uppercase tracking-wider ml-2">Open</span>
        <Kbd>↵</Kbd>
      </div>
      <div className="text-[10px] font-ui text-text-tertiary uppercase tracking-wider">
        Linear UI Kit v1.0
      </div>
    </div>
  </div>
));
CommandPalette.displayName = "CommandPalette";

function CommandItem({ label, shortcut }: { label: string; shortcut?: string }) {
  return (
    <div className="px-3 py-2 mx-2 rounded-md hover:bg-surface-2 flex items-center justify-between group cursor-pointer transition-colors">
      <span className="text-sm font-ui text-text-secondary group-hover:text-foreground">
        {label}
      </span>
      {shortcut && <Kbd>{shortcut}</Kbd>}
    </div>
  );
}



export { CommandPalette };
