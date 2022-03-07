import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CreateTodoDto, Todo } from '../../types'

export const todoApi = createApi({
  reducerPath: 'todos',
  tagTypes: ['Todo'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getAllTodo: builder.query<Todo[], { field: string; order: string }>({
      query: ({ field, order }) => '/todo/?sortby=' + field + '&order=' + order,
      providesTags: ['Todo'],
    }),
    createTodo: builder.mutation<Todo, CreateTodoDto>({
      query: (createTodoDto) => ({
        url: '/todo',
        method: 'POST',
        body: createTodoDto,
      }),
      invalidatesTags: ['Todo'],
    }),
    deleteTodo: builder.mutation<Todo, string>({
      query: (id) => ({
        url: '/todo/' + id,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todo'],
    }),
    toggleTodoCompleted: builder.mutation<
      Todo,
      { id: string; completed: boolean }
    >({
      query: ({ id, completed }) => ({
        url: '/todo/' + id + '?completed=' + completed,
        method: 'PATCH',
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
})

export const {
  useGetAllTodoQuery,
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useToggleTodoCompletedMutation,
} = todoApi
