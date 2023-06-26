import Button from './Button';
import type { Meta, StoryObj } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

const meta: Meta<typeof Button> = {
  title: 'Button',
  tags: ['autodocs'],
  component: Button,
  argTypes: {
    children: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: ['primary', 'default', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'base', 'lg'],
    },
    backgroundColor: {
      control: { type: 'color' },
    },
    handleClick: { action: true }
  },
  parameters: {
    docs: {
      description: {
        component: 'ボタンコンポーネント',
      },
    },
    layout: 'centered',
  },
  // decorators: [
  //   (Story) => (
  //     <div
  //       style={{
  //         display: 'flex',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         height: '100vh',
  //       }}
  //     >
  //       <Story />
  //     </div>
  //   ),
  // ],
};

export default meta;
type Story = StoryObj<typeof Button>;


export const Primary: Story = {
  args: {
    children: 'Primary',
    color: 'primary',
  },
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
};
export const Danger: Story = {
  args: {
    children: 'Danger',
    color: 'danger',
  },
  
};
export const Small: Story = {
  args: {
    children: 'Small',
    color: 'danger',
    size: 'sm',
    handleClick: linkTo('Button', 'Danger'),
  },
};

// not use args

// export default {
//   title: 'Button',
//   component: Button,
// };

// export const Primary = () => <Button color="primary">Primary</Button>;
// export const Danger = () => <Button color="danger">Danger</Button>;
// export const Small = () => <Button size="sm" color="danger">Small</Button>;
// export const PrimaryLarge = () => (
//   <Button size="lg" color="primary">
//     Large
//   </Button>
// );