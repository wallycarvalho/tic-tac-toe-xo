import React from 'react';

import Alert from '../../components/alert';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Alert',
  component: Alert,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = () => (
  <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
    <Alert expireIn={2000}>hi, I'm visible</Alert>
  </div>
)
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};
