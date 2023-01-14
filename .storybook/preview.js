export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen'
};

export const decorators = [
  (Story) => (
    <div style={{ height: '100vh' }}>
      <Story />
    </div>
  ),
];
