import { TodoItem } from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/TodoItem',
  component: TodoItem,
} as ComponentMeta<typeof TodoItem>

const Template: ComponentStory<typeof TodoItem> = (args) => (
  <TodoItem {...args} />
)

export const Primary = Template.bind({})

Primary.args = {}
