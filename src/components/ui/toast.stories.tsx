import type { Meta, StoryObj } from "@storybook/react"
import { 
  Toast, 
  ToastTitle, 
  ToastDescription, 
  ToastAction, 
  ToastProvider, 
  ToastViewport 
} from "./toast"
import { Button } from "./button"
import { Kbd } from "./kbd"
import * as React from "react"

const meta: Meta<typeof Toast> = {
  title: "Components/Feedback/Toast",
  component: Toast,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Toast>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <ToastProvider>
        <div className="flex flex-col items-center gap-4 p-20">
          <Button 
            variant="outline" 
            onClick={() => setOpen(true)}
          >
            Trigger Success Toast
          </Button>

          <Toast open={open} onOpenChange={setOpen}>
            <div className="grid gap-1">
              <ToastTitle>Issue LIN-142 created</ToastTitle>
              <ToastDescription>Your new issue is now live in the backlog.</ToastDescription>
            </div>
            <ToastAction altText="Undo" asChild>
              <Button variant="ghost" className="h-8 gap-2 px-2 text-xs">
                Undo <Kbd className="bg-surface-3">⌘Z</Kbd>
              </Button>
            </ToastAction>
          </Toast>
        </div>
        <ToastViewport />
      </ToastProvider>
    )
  },
}
