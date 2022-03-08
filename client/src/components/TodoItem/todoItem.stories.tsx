import { ComponentMeta } from '@storybook/react'
import { Provider } from 'react-redux'
import { TodoItem } from '.'
import { Todo } from '../../types'
import store from '../../store'

export default {
  title: 'TodoItem',
  component: TodoItem,
} as ComponentMeta<typeof TodoItem>

const Template = (args: { todo: Todo }) => (
  <Provider store={store}>
    <TodoItem {...args} />
  </Provider>
)

export const Active = Template.bind({})
Active.args = {
  todo: {
    _id: '1',
    title: 'Buy milk',
    endDate: new Date('2020-01-01'),
    completed: false,
  },
}
export const Inactive = Template.bind({})
Inactive.args = {
  todo: {
    ...Active.args.todo,
    completed: true,
  },
}
