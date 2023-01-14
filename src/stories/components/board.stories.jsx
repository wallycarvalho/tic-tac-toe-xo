import React from 'react';

import Board from '../../components/board';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Board',
  component: Board,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = () => (
  <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
    <Board />
  </div>
)
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};
