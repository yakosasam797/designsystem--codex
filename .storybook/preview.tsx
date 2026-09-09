import type { Preview } from '@storybook/react-vite'
import '../src/index.css'

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Paryatech colour mode',
      toolbar: { icon: 'paintbrush', items: [{ value: 'light', title: 'Light' }, { value: 'dark', title: 'Dark' }], dynamicTitle: true },
    },
  },
  initialGlobals: { theme: 'light' },
  decorators: [
    (Story, context) => <div className="pt-story-theme" data-paryatech-theme={context.globals.theme}><Story /></div>,
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        app: { name: 'App', value: '#FDFFFC' },
        card: { name: 'Card', value: '#FFFFFF' },
      },
    },
    a11y: { test: 'error' },
    layout: 'padded',
  },
}

export default preview
