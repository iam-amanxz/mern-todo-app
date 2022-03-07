import { TodoAddForm } from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Components/TodoAddForm',
  component: TodoAddForm,
} as ComponentMeta<typeof TodoAddForm>

const Template: ComponentStory<typeof TodoAddForm> = () => <TodoAddForm />

export const Primary = Template.bind({})

Primary.args = {}
