import { Box } from '@chakra-ui/react'
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
          <>
            <Filter sort={sort} setSort={setSort} />
            <TodoList sort={sort} />
          </>
        }
        bottom={<TodoAddForm />}
      />
    </Box>
  )
}
