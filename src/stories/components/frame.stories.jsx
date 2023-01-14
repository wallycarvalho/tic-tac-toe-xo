import React from 'react';

import Frame from '../../components/frame';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Frame',
  component: Frame,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = () => (
  <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
    <Frame>Nada</Frame>
  </div>
)
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};
