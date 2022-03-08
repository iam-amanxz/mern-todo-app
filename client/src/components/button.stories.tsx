//@ts-nocheck

import { ComponentMeta } from '@storybook/react'

import { Button } from '@chakra-ui/react'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    bg: {
      control: { type: 'select', options: ['#3a0ca3', '#38b000', '#e5383b'] },
    },
  },
} as ComponentMeta<typeof Button>

const Template = (args: {
  children: string
  onClick: () => void
  bg: string
}) => <Button {...args}>{args.children}</Button>

export const Primary = Template.bind({})
Primary.args = {
  bg: '#3a0ca3',
  color: 'white',
  children: 'Brand',
}
export const Success = Template.bind({})
Success.args = {
  color: 'white',
  bg: '#38b000',
  children: 'Success',
}
export const Danger = Template.bind({})
Danger.args = {
  color: 'white',
  bg: '#e5383b',
  children: 'Danger',
}
