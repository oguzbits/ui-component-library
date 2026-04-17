import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-ui transition-colors focus:outline-none focus:ring-1 focus:ring-brand",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-brand text-white hover:bg-brand-hover",
        secondary:
          "border-border bg-surface-2 text-foreground hover:bg-surface-3",
        destructive:
          "border-transparent bg-red-500/20 text-red-500 border-red-500/30",
        outline: "text-foreground border-border bg-transparent",
        success: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400 font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
