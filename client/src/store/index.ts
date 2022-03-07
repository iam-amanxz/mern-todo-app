import { configureStore } from '@reduxjs/toolkit'
import { todoApi } from './api/todoApi'

export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
