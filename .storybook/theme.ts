import { create } from '@storybook/theming';

export default create({
  base: 'dark',
  brandTitle: 'Linear UI Library',
  brandUrl: 'https://example.com',
  brandImage: undefined,
  brandTarget: '_self',

  // UI
  appBg: '#08090a',
  appContentBg: '#08090a',
  appBorderColor: 'rgba(255, 255, 255, 0.08)',
  appBorderRadius: 6,

  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#f7f8f8',
  textInverseColor: '#08090a',

  // Toolbar default and active colors
  barTextColor: '#b1b1b3',
  barSelectedColor: '#5e6ad2',
  barBg: '#0f1011',

  // Form colors
  inputBg: '#0f1011',
  inputBorder: 'rgba(255, 255, 255, 0.08)',
  inputTextColor: '#f7f8f8',
  inputBorderRadius: 4,
});
