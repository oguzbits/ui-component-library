import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/UI/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="p-4 rounded-md border border-border bg-surface-1 text-sm text-text-secondary font-ui">
          Manage your account settings and preferences.
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="p-4 rounded-md border border-border bg-surface-1 text-sm text-text-secondary font-ui">
          Change your password and security options.
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const SubNavigation: Story = {
  render: () => (
    <Tabs defaultValue="general" className="w-full">
      <TabsList className="bg-transparent border-b border-border/50 w-full justify-start rounded-none h-11 p-0 gap-8">
        <TabsTrigger 
          value="general" 
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand data-[state=active]:bg-transparent px-0 h-full font-emphasis"
        >
          General
        </TabsTrigger>
        <TabsTrigger 
          value="integrations" 
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand data-[state=active]:bg-transparent px-0 h-full font-emphasis"
        >
          Integrations
        </TabsTrigger>
        <TabsTrigger 
          value="api" 
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand data-[state=active]:bg-transparent px-0 h-full font-emphasis"
        >
          API
        </TabsTrigger>
      </TabsList>
    </Tabs>
  ),
};
