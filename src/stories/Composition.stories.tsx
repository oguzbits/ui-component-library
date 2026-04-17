import type { Meta } from "@storybook/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal, MessageSquare, Paperclip, Clock } from "lucide-react";

const meta: Meta = {
  title: "Patterns/Component Composition",
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const TaskCard = {
  render: () => (
    <Card className="w-[350px] group hover:border-border/80 transition-all cursor-pointer">
      <CardContent className="p-4 space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]" />
            <span className="text-[10px] font-mono text-text-tertiary">LIN-2048</span>
          </div>
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
             <Button variant="ghost" size="icon" className="w-6 h-6"><MoreHorizontal className="w-3 h-3" /></Button>
          </div>
        </div>
        
        <h3 className="font-ui text-sm leading-tight text-text-secondary group-hover:text-foreground">
          Implement sub-pixel font smoothing for high-density dashboard views.
        </h3>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="h-5 px-1.5 text-[10px]">Bug</Badge>
            <div className="flex items-center gap-2 text-[10px] text-text-muted">
              <Clock className="w-3 h-3" /> 2h
            </div>
            <div className="flex items-center gap-1 text-[10px] text-text-muted">
              <MessageSquare className="w-3 h-3" /> 4
            </div>
          </div>
          <div className="flex -space-x-2">
            <Avatar className="w-6 h-6 border-2 border-panel bg-surface-2">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <Avatar className="w-6 h-6 border-2 border-panel bg-brand">
              <AvatarFallback className="text-white text-[8px] italic">C</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};

export const ActivityItem = {
  render: () => (
    <div className="w-[400px] flex items-start gap-3 p-3 rounded-lg hover:bg-surface-1 transition-colors group cursor-pointer border border-transparent hover:border-border-subtle">
       <Avatar className="w-8 h-8">
          <AvatarImage src="https://github.com/oguzbits.png" />
          <AvatarFallback>OB</AvatarFallback>
       </Avatar>
       <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
             <span className="text-sm font-emphasis text-foreground">Oguz B. <span className="font-ui text-text-muted font-normal">updated the status to</span></span>
             <span className="text-[10px] text-text-tertiary">12m ago</span>
          </div>
          <div className="flex items-center gap-2">
             <Badge variant="success" className="h-5 text-[10px]">In Progress</Badge>
             <span className="text-text-muted">→</span>
             <Badge variant="secondary" className="h-5 text-[10px]">Completed</Badge>
          </div>
       </div>
    </div>
  )
};
