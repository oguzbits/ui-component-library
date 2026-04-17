import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-ui transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] border border-transparent",
  {
    variants: {
      variant: {
        /* Primary Brand CTA */
        default: "bg-brand text-white border-brand/20 shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:bg-brand-hover hover:border-brand-hover/40",
        
        /* Subtle Ghost - The Linear Default */
        ghost: "bg-surface-1 border-border-subtle text-text-secondary hover:bg-surface-2 hover:text-foreground hover:border-border",
        
        /* Secondary / Panel Button */
        secondary: "bg-surface-2 border-border text-foreground hover:bg-surface-3 hover:border-text-tertiary/20",
        
        /* Outline variant for distinct structure */
        outline: "border-border bg-transparent hover:bg-surface-1 hover:text-foreground",
        
        /* Minimal Link */
        link: "text-brand-accent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-8 text-base",
        icon: "h-9 w-9",
      },
      pill: {
        true: "rounded-full",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      pill: false,
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, pill, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, pill, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
