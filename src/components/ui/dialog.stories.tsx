import type { Meta, StoryObj } from "@storybook/react"
import { 
  Dialog, 
  DialogTrigger, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter 
} from "./dialog"
import { Button } from "./button"
import { Input } from "./input"
import * as React from "react"
import { Users } from "lucide-react"

const meta: Meta<typeof Dialog> = {
  title: "Components/Overlay/Dialog",
  component: Dialog,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Professional Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="w-10 h-10 rounded-lg bg-brand-subtle flex items-center justify-center text-brand mb-4">
             <Users className="w-5 h-5" />
          </div>
          <DialogTitle>Invite Team Member</DialogTitle>
          <DialogDescription>
            Invite a new member to your workspace. They will be sent an invitation email.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs font-bold text-text-muted uppercase tracking-wider">Name</label>
            <Input id="name" placeholder="Sarah Connor" className="h-9" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs font-bold text-text-muted uppercase tracking-wider">Email</label>
            <Input id="email" placeholder="sarah@resistance.com" className="h-9" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="ghost" className="h-9">Cancel</Button>
          <Button className="bg-brand text-white hover:bg-brand-hover h-9">Send Invite</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
