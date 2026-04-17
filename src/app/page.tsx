import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Sparkles, ArrowRight, Github, Layout, Layers, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-panel/50 backdrop-blur-sm text-xs font-medium text-muted mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Sparkles className="w-3 h-3 text-brand" />
            <span>Built with React 19 & Tailwind 4</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-foreground to-foreground/50 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Engineered for <br className="hidden md:block" /> Visual Precision
          </h1>
          
          <p className="max-w-2xl mx-auto text-muted text-lg mb-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
            A high-performance UI library inspired by the Linear aesthetic. 
            Designed for engineers who care about sub-pixel precision.
          </p>

          <div className="flex items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
            <Button size="lg" className="gap-2">
              Explore Docs <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Github className="w-4 h-4" /> View on GitHub
            </Button>
          </div>
        </div>

        {/* Ambient Light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-brand/10 blur-[120px] pointer-events-none -z-10" />
      </section>

      {/* Showcase Grid */}
      <section className="container mx-auto px-6 py-20 border-t border-border/50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card Showcase */}
          <Card className="flex flex-col h-full animate-in fade-in zoom-in-95 duration-700">
            <CardHeader>
              <div className="w-10 h-10 rounded-md bg-brand/10 flex items-center justify-center mb-4">
                <Layout className="w-5 h-5 text-brand" />
              </div>
              <CardTitle>Chiseled Depth</CardTitle>
              <CardDescription>
                Linear-style cards use inset shadows instead of soft drops.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="p-4 rounded border border-border bg-[#0a0b0c] text-sm text-muted">
                <code>box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);</code>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full">Action</Button>
            </CardFooter>
          </Card>

          {/* Form Showcase */}
          <Card className="flex flex-col h-full animate-in fade-in zoom-in-95 duration-700 delay-100">
            <CardHeader>
              <div className="w-10 h-10 rounded-md bg-brand/10 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-brand" />
              </div>
              <CardTitle>Precise Inputs</CardTitle>
              <CardDescription>
                Inputs focus on the brand color with high contrast.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted">Email address</label>
                <Input placeholder="name@domain.com" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted">Project Name</label>
                <Input placeholder="My component library" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Save Changes</Button>
            </CardFooter>
          </Card>

          {/* Glass Showcase */}
          <Card glass className="flex flex-col h-full animate-in fade-in zoom-in-95 duration-700 delay-200">
            <CardHeader>
              <div className="w-10 h-10 rounded-md bg-brand/10 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5 text-brand" />
              </div>
              <CardTitle>Glass Overlay</CardTitle>
              <CardDescription>
                Frosted glass surfaces with localized blur and lighting.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex items-center justify-center">
              <div className="w-full h-32 linear-grad rounded-md border border-border/50 flex items-center justify-center">
                <span className="text-xs text-muted uppercase tracking-widest">Atmospheric</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">Learn More</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-12 border-t border-border/50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-muted text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-sm bg-brand" />
            <span className="font-semibold text-foreground tracking-tight">Antigravity UI</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-foreground transition-colors">Documentation</a>
            <a href="#" className="hover:text-foreground transition-colors">Components</a>
            <a href="#" className="hover:text-foreground transition-colors">Changelog</a>
          </div>
          <p>© 2026 UI Component Library Case Study</p>
        </div>
      </footer>
    </div>
  );
}
