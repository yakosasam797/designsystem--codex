import type { Preview } from '@storybook/react-vite'
import '../src/index.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        app: { name: 'App', value: '#FAFAFA' },
        card: { name: 'Card', value: '#FFFFFF' },
      },
    },
    a11y: { test: 'error' },
    layout: 'padded',
  },
}

export default preview
