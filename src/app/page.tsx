import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandPalette } from "@/components/ui/command-palette";
import { Sparkles, ArrowRight, Github, Layout, Zap, Cpu, Activity } from "lucide-react";

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

      {/* Feature Grid */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Typography Card */}
          <Card className="flex flex-col h-full border-border/50 bg-surface-1">
            <CardHeader>
              <div className="w-10 h-10 rounded-md bg-surface-2 flex items-center justify-center mb-4 border border-border-subtle">
                <Cpu className="w-5 h-5 text-brand-accent" />
              </div>
              <CardTitle>Inter Identity</CardTitle>
              <CardDescription>
                Signature 510 weight with cv01 and ss03 OpenType features.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-md linear-inset flex flex-col gap-2">
                <span className="text-xs uppercase tracking-widest text-text-muted font-ui">Weight 510</span>
                <span className="text-2xl font-ui">Lowercase l with tail: lll</span>
                <span className="text-2xl font-ui">Geometric zero: 000</span>
              </div>
            </CardContent>
          </Card>

          {/* Performance/Density Card (REPLACED CleverPrices) */}
          <Card className="flex flex-col h-full border-border/50 bg-surface-1">
            <CardHeader>
              <div className="w-10 h-10 rounded-md bg-surface-2 flex items-center justify-center mb-4 border border-border-subtle">
                <Activity className="w-5 h-5 text-brand-accent" />
              </div>
              <CardTitle>Sub-pixel Density</CardTitle>
              <CardDescription>
                Optimized for high-density information management.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-2 rounded bg-surface-2 border border-border-subtle">
                <span className="text-xs font-mono text-text-tertiary">01</span>
                <span className="text-sm font-ui flex-1 ml-3">System Initialization</span>
                <Badge variant="success" className="h-5 text-[10px]">Active</Badge>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-surface-2 border border-border-subtle opacity-70">
                <span className="text-xs font-mono text-text-tertiary">02</span>
                <span className="text-sm font-ui flex-1 ml-3">Memory Cleanup</span>
                <Badge variant="secondary" className="h-5 text-[10px]">Idle</Badge>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-surface-2 border border-border-subtle opacity-40">
                <span className="text-xs font-mono text-text-tertiary">03</span>
                <span className="text-sm font-ui flex-1 ml-3">Cache Distribution</span>
                <Badge variant="secondary" className="h-5 text-[10px]">Wait</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Luminance Card */}
          <Card className="flex flex-col h-full border-border/50 bg-surface-1">
            <CardHeader>
              <div className="w-10 h-10 rounded-md bg-surface-2 flex items-center justify-center mb-4 border border-border-subtle">
                <Layout className="w-5 h-5 text-brand-accent" />
              </div>
              <CardTitle>Luminance Stacking</CardTitle>
              <CardDescription>
                Elevation via white opacity steps instead of drop shadows.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <div className="h-10 w-full bg-surface-1 rounded-md border border-border-subtle flex items-center px-4 text-xs font-ui text-text-muted">Surface Level 1 (0.02)</div>
              <div className="h-10 w-full bg-surface-2 rounded-md border border-border-subtle flex items-center px-4 text-xs font-ui text-text-muted">Surface Level 2 (0.04)</div>
              <div className="h-10 w-full bg-surface-3 rounded-md border border-border-subtle flex items-center px-4 text-xs font-ui text-text-muted">Surface Level 3 (0.05)</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-16 border-t border-border-subtle bg-panel">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-text-tertiary text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-sm bg-brand shadow-lg shadow-brand/20" />
            <span className="font-emphasis text-foreground text-lg tracking-tight">Antigravity UI</span>
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
