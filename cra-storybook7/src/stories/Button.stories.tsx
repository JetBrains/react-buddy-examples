import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    label: "Default label"
  },
  argTypes: {
    backgroundColor: {
      control: 'color'
    },
    borderRadius: {
      options: ['1px', '2px', '5px', '10px'],
      control: {type: 'select'}
    },
  },
  parameters: {


  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Primary',
  }
};

export const SpreadPrimary: Story = {
  ...Primary
};

export const Secondary: Story = {
  args: {
    label: 'Secondary',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
