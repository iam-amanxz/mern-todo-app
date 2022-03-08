import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { TodoList, Layout, TodoAddForm, Filter } from '..'

export const App = () => {
  const [sort, setSort] = React.useState({
    field: 'createdAt',
    order: 'desc',
  })

  return (
    <Box>
      <Layout
        top={
          <Flex flexDir="column" h="sm" overflow="hidden">
            <Filter sort={sort} setSort={setSort} />
            <TodoList sort={sort} />
          </Flex>
        }
        bottom={<TodoAddForm />}
      />
    </Box>
  )
}
