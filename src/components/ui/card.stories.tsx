import type { Meta, StoryObj } from "@storybook/nextjs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";
import { Button } from "./button";

const meta: Meta<typeof Card> = {
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card className="w-[350px]" {...args}>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted">Linear aesthetic cards use subtle borders and deep backgrounds.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
};

export const Glass: Story = {
  args: {
    glass: true,
  },
  render: (args) => (
    <div className="p-12 bg-indigo-500/20 rounded-xl">
      <Card className="w-[350px]" {...args}>
        <CardHeader>
          <CardTitle>Glassmorphism</CardTitle>
          <CardDescription>Linear uses glass for overlays.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-foreground/80">This card uses the blur effect from the Linear design spec.</p>
        </CardContent>
      </Card>
    </div>
  ),
};
