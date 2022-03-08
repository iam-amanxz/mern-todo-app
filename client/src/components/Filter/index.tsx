import React from 'react'
import { Flex, Heading, Select } from '@chakra-ui/react'

interface FilterProps {
  sort: { field: string; order: string }
  setSort: React.Dispatch<
    React.SetStateAction<{
      field: string
      order: string
    }>
  >
}

export const Filter = ({ sort, setSort }: FilterProps) => {
  const handleSortTodos = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case 'createdAt':
        setSort({ field: 'createdAt', order: 'desc' })
        break
      case 'endDateAsc':
        setSort({ field: 'endDate', order: 'asc' })
        break
      case 'endDateDesc':
        setSort({ field: 'endDate', order: 'desc' })
        break
      default:
        setSort({ field: 'createdAt', order: 'desc' })
    }
  }

  return (
    <Flex p="4" justify="space-between">
      <Heading size="xs" color="gray.700">
        Sort by:
      </Heading>
      <Select
        data-testid="filter"
        w="36"
        size="sm"
        onChange={handleSortTodos}
        borderRadius="lg"
      >
        <option value="createdAt">Created At</option>
        <option value="endDateAsc">End Date (asc)</option>
        <option value="endDateDesc">End Date (desc)</option>
      </Select>
    </Flex>
  )
}
// ?sortby="createdAt"&order="desc"
