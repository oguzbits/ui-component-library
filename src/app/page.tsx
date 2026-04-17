import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandPalette } from "@/components/ui/command-palette";
import { Sparkles, ArrowRight, Github, Layout, Zap, Cpu, Activity, MoreHorizontal, MessageSquare } from "lucide-react";
import { IssueRow } from "@/components/ui/issue-row";
import { Kbd } from "@/components/ui/kbd";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-border-subtle">
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <Badge variant="success" className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Sparkles className="w-3 h-3 mr-1.5" />
            2026 Production Standard
          </Badge>
          
          <h1 className="text-display md:text-display-lg mb-8 text-foreground animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Engineered for <br className="hidden md:block" /> Visual Precision
          </h1>
          
          <p className="max-w-2xl mx-auto text-text-secondary text-lg mb-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
            A high-fidelity UI library built on the "Darkness as a Native Medium" philosophy.
            Designed for engineers who demand sub-pixel accuracy and signature 510 weight typography.
          </p>

          <div className="flex items-center justify-center gap-4 mb-20 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
            <Button size="lg" className="h-12 px-8">
              Explore Library <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="ghost" size="lg" className="h-12 px-8">
              <Github className="w-4 h-4 mr-2" /> GitHub
            </Button>
          </div>

          {/* Masterpiece Showcase: Command Palette */}
          <div className="w-full flex justify-center animate-in fade-in zoom-in-95 duration-1000 delay-700">
            <CommandPalette className="shadow-2xl border-white/5" />
          </div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand/5 blur-[120px] pointer-events-none -z-10 rounded-full" />
      </section>

      {/* Feature Showcase: High Density & Luminance */}
      <main className="container mx-auto px-6 py-32 space-y-40">
        
        {/* Product Experience Section */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-emphasis tracking-tight">Product Experience</h2>
              <p className="text-text-secondary text-lg font-ui max-w-xl">
                Dense information design that stays readable. Optimized for high-frequency interaction.
              </p>
            </div>
            <div className="flex items-center gap-3 bg-surface-2 p-2 rounded-lg border border-border-subtle">
              <Kbd>⌘</Kbd><Kbd>N</Kbd>
              <span className="text-xs text-text-muted font-ui ml-2 leading-none">New Task</span>
            </div>
          </div>

          <div className="rounded-2xl border border-border/40 bg-panel/30 backdrop-blur-sm shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] overflow-hidden">
            <IssueRow 
              id="LIN-001" 
              title="Implement sub-pixel chiseled borders for elevated surfaces" 
              status="in-progress" 
              priority="urgent" 
              labels={["UI", "Research"]}
              comments={5}
              assignee={{ name: "Oguz", image: "https://github.com/oguzbits.png" }}
            />
            <IssueRow 
              id="LIN-002" 
              title="Refactor Inter font-weight to signature 510 spec" 
              status="done" 
              priority="high" 
              labels={["Typography"]}
              comments={2}
            />
            <IssueRow 
              id="LIN-003" 
              title="Add atmospheric mesh gradients to landing page hero" 
              status="todo" 
              priority="medium" 
              labels={["Visuals"]}
            />
            <IssueRow 
              id="LIN-004" 
              title="Configure Berkeley Mono as primary monospaced font" 
              status="backlog" 
              priority="low" 
              labels={["Core"]}
            />
          </div>
        </section>

        {/* Luminous Palette Section */}
        <section className="space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-emphasis tracking-tight">Luminous Foundations</h2>
            <p className="text-text-secondary text-lg font-ui">
              Using light as a material. Depth is built via opacity, not just color.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative p-8 rounded-2xl border border-border/40 bg-surface-1 flex flex-col items-center justify-center gap-6 hover:bg-surface-2 transition-colors overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(94,106,210,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="w-16 h-16 rounded-full bg-brand shadow-[0_0_30px_rgba(94,106,210,0.3)] ring-4 ring-brand/10" />
               <div className="text-center z-10">
                 <p className="font-mono text-xs text-brand font-bold uppercase tracking-widest">Brand Action</p>
                 <p className="text-[10px] text-text-muted mt-1 uppercase">#5E6AD2</p>
               </div>
            </div>
            
            <div className="group relative p-8 rounded-2xl border border-border/40 bg-surface-1 flex flex-col items-center justify-center gap-6 hover:bg-surface-2 transition-colors overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="w-16 h-16 rounded-full bg-success shadow-[0_0_30px_rgba(16,185,129,0.3)] ring-4 ring-success/10" />
               <div className="text-center z-10">
                 <p className="font-mono text-xs text-success font-bold uppercase tracking-widest">Success Glow</p>
                 <p className="text-[10px] text-text-muted mt-1 uppercase">#10B981</p>
               </div>
            </div>

            <div className="group relative p-8 rounded-2xl border border-border/40 bg-surface-1 flex flex-col items-center justify-center gap-6 hover:bg-surface-2 transition-colors overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="w-16 h-16 rounded-full bg-warning shadow-[0_0_30px_rgba(245,158,11,0.3)] ring-4 ring-warning/10" />
               <div className="text-center z-10">
                 <p className="font-mono text-xs text-warning font-bold uppercase tracking-widest">Warning Sun</p>
                 <p className="text-[10px] text-text-muted mt-1 uppercase">#F59E0B</p>
               </div>
            </div>

            <div className="group relative p-8 rounded-2xl border border-border/40 bg-surface-1 flex flex-col items-center justify-center gap-6 hover:bg-surface-2 transition-colors overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(244,63,94,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="w-16 h-16 rounded-full bg-error shadow-[0_0_30px_rgba(244,63,94,0.3)] ring-4 ring-error/10" />
               <div className="text-center z-10">
                 <p className="font-mono text-xs text-error font-bold uppercase tracking-widest">Urgent Pulse</p>
                 <p className="text-[10px] text-text-muted mt-1 uppercase">#F43F5E</p>
               </div>
            </div>
          </div>
        </section>

        {/* Technical Detail Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {/* Card content adjusted for consistency */}
           <div className="p-8 rounded-2xl border border-border/40 bg-surface-1 space-y-6">
              <div className="w-10 h-10 rounded-lg bg-surface-2 border border-border-subtle flex items-center justify-center">
                <Layout className="w-5 h-5 text-brand" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-emphasis">Luminance Stacking</h3>
                <p className="text-sm text-text-secondary leading-relaxed font-ui">
                  Depth is achieved through white opacity layers (`0.02`, `0.04`, `0.05`) over a fixed background. 
                  This creates a "chiseled" feel that is native to the dark medium.
                </p>
              </div>
           </div>

           <div className="p-8 rounded-2xl border border-border/40 bg-surface-1 space-y-6">
              <div className="w-10 h-10 rounded-lg bg-surface-2 border border-border-subtle flex items-center justify-center">
                <Cpu className="w-5 h-5 text-brand" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-emphasis">Sub-pixel Typography</h3>
                <p className="text-sm text-text-secondary leading-relaxed font-ui">
                  Specifically tuned for Inter Variable. We enforce `510` weight, `cv01` alternates, and 
                  `ss03` rounded numerals for a technical, software-first aesthetic.
                </p>
              </div>
           </div>

           <div className="p-8 rounded-2xl border border-border/40 bg-surface-1 space-y-6">
              <div className="w-10 h-10 rounded-lg bg-surface-2 border border-border-subtle flex items-center justify-center">
                <Activity className="w-5 h-5 text-brand" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-emphasis">Keyboard First</h3>
                <p className="text-sm text-text-secondary leading-relaxed font-ui">
                  The interface is designed to be driven by shortcuts. Our specialized `Kbd` component 
                  ensures semantic clarity and sub-pixel alignment across the board.
                </p>
              </div>
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-16 border-t border-border-subtle bg-panel">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-text-tertiary text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-sm bg-brand shadow-lg shadow-brand/20" />
            <span className="font-emphasis text-foreground text-lg tracking-tight">Linear UI</span>
          </div>
          <div className="flex items-center gap-10 font-ui">
            <a href="#" className="hover:text-foreground transition-colors">Principles</a>
            <a href="#" className="hover:text-foreground transition-colors">Components</a>
            <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
          </div>
          <p className="font-ui">© 2026 Crafted for Professional Excellence</p>
        </div>
      </footer>
    </div>
  );
}
