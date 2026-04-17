import * as React from "react"
import { cn } from "@/lib/utils"

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, ...props }, ref) => {
    return (
      <kbd
        ref={ref}
        className={cn(
          "pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-surface-2 px-1.5 font-mono text-[10px] font-medium text-text-tertiary opacity-100 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]",
          className
        )}
        {...props}
      />
    )
  }
)
Kbd.displayName = "Kbd"

export { Kbd }
