import { FormEvent, useState } from 'react'
import { Button, Flex, Input, InputGroup } from '@chakra-ui/react'
import { useCreateTodoMutation } from '../../store/api/todoApi'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './index.scss'

export const TodoAddForm = () => {
  const [createTodo] = useCreateTodoMutation()
  const [title, setTitle] = useState('')
  const [endDate, setEndDate] = useState(new Date())

  const handleCreateTodo = async (e: FormEvent) => {
    e.preventDefault()
    if (title.trim() === '') return

    await createTodo({ title, endDate })

    setTitle('')
    setEndDate(new Date())
  }

  return (
    <form onSubmit={handleCreateTodo}>
      <Flex p="4" flexDir="column">
        <Flex mb="3" gap="3" flexDir={['column', 'row']}>
          <Input
            flexGrow="1"
            data-testid="title"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
          <InputGroup
            maxW={{ sm: '32' }}
            border="1px"
            borderColor="gray.300"
            borderRadius="md"
            style={{ display: 'grid', placeItems: 'center' }}
            py="1"
          >
            <DatePicker
              wrapperClassName="datePicker"
              data-testid="endDate"
              selected={endDate}
              onChange={(date: Date) => setEndDate(date)}
            />
          </InputGroup>
        </Flex>

        <Button
          disabled={title.trim() === ''}
          data-testid="create"
          type="submit"
          bg="success"
          w="full"
          color="white"
          _hover={{
            bg: 'success',
          }}
        >
          Add Todo
        </Button>
      </Flex>
    </form>
  )
}
