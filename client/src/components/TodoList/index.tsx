import { Todo } from '../../types'
import { TodoItem } from '..'
import { Box, Center, Text } from '@chakra-ui/react'
import { useGetAllTodoQuery } from '../../store/api/todoApi'

export const TodoList = ({
  sort,
}: {
  sort: { field: string; order: string }
}) => {
  const { data, error, isLoading, isSuccess } = useGetAllTodoQuery({ ...sort })

  return (
    <Box overflowY="scroll" flexGrow="1">
      <Center>
        {isLoading && <Text p={['2', '4']}>Loading...</Text>}
        {error && <Text p={['2', '4']}>Error :(</Text>}

        {isSuccess && !data.length && (
          <Text p={['2', '4']}>No Todo found! Please add</Text>
        )}
      </Center>

      {data?.map((todo: Todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </Box>
  )
}
