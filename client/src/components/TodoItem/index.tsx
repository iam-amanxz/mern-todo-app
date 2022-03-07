import React from 'react'
import { Button, Checkbox, Flex, Text } from '@chakra-ui/react'
import { Todo } from '../../types'
import {
  useDeleteTodoMutation,
  useToggleTodoCompletedMutation,
} from '../../store/api/todoApi'
import dayjs from 'dayjs'

export const TodoItem = ({ todo }: { todo: Todo }) => {
  const [deleteTodo] = useDeleteTodoMutation()
  const [toggleTodoCompleted] = useToggleTodoCompletedMutation()
  const [itemHovered, setItemHovered] = React.useState(false)

  const handleToggleTodoCompleted = async () => {
    console.log(todo.completed)
    await toggleTodoCompleted({
      id: todo._id,
      completed: !todo.completed,
    })
  }
  const handleRemoveTodo = async () => {
    await deleteTodo(todo._id)
  }

  return (
    <Flex
      p="5"
      justifyContent="space-between"
      onMouseEnter={() => {
        setItemHovered(true)
      }}
      onMouseLeave={() => {
        setItemHovered(false)
      }}
      _hover={{ bg: 'gray.100' }}
    >
      <Checkbox
        onChange={handleToggleTodoCompleted}
        cursor="pointer"
        size="lg"
        defaultChecked={todo.completed}
        _checked={{ color: 'gray.400', textDecoration: 'line-through' }}
      >
        <Text fontWeight="medium" fontSize="md" isTruncated>
          <span data-testid="titleText">{todo.title}</span> @
          {dayjs(todo.endDate).format('MMM DD, YYYY')}
        </Text>
      </Checkbox>

      <Button
        data-testid="remove"
        bg="danger"
        color="white"
        _hover={{ bg: 'danger' }}
        size="xs"
        display={itemHovered ? 'block' : 'none'}
        onClick={handleRemoveTodo}
      >
        Remove
      </Button>
    </Flex>
  )
}
