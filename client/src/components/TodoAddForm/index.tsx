import { FormEvent, useState } from 'react'
import { Button, Center, Flex, Input, InputGroup } from '@chakra-ui/react'
import { useCreateTodoMutation } from '../../store/api/todoApi'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const TodoAddForm = () => {
  const [createTodo] = useCreateTodoMutation()
  const [title, setTitle] = useState('')
  const [endDate, setEndDate] = useState(new Date())

  const handleCreateTodo = async (e: FormEvent) => {
    console.log('hello')
    e.preventDefault()
    if (title.trim() === '') return

    await createTodo({ title, endDate })

    setTitle('')
    setEndDate(new Date())
  }

  return (
    <form onSubmit={handleCreateTodo}>
      <Flex p="5" flexDir="column">
        <Flex mb="3" gap="3">
          <Input
            data-testid="title"
            w="60%"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
          <InputGroup
            border="1px"
            borderColor="gray.300"
            borderRadius="md"
            w="40%"
          >
            <Center p="1">
              <DatePicker
                data-testid="endDate"
                selected={endDate}
                onChange={(date: Date) => setEndDate(date)}
              />
            </Center>
          </InputGroup>
        </Flex>

        <Button
          data-testid="create"
          type="submit"
          bg="success"
          w="full"
          color="white"
          _hover={{
            bg: 'green.400',
          }}
        >
          +Add
        </Button>
      </Flex>
    </form>
  )
}
