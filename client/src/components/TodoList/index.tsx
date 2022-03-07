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
    <Box overflowY="scroll" h={'90%'}>
      <Center p="5">
        {isLoading && <Text>Loading...</Text>}
        {error && <Text>Error :(</Text>}

        {isSuccess && !data.length && <Text>No Todo found! please add</Text>}
      </Center>

      {data?.map((todo: Todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </Box>
  )
}
