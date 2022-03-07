import React from 'react'
import { Flex, Heading, Select } from '@chakra-ui/react'

export const Filter = ({
  sort,
  setSort,
}: {
  sort: { field: string; order: string }
  setSort: React.Dispatch<
    React.SetStateAction<{
      field: string
      order: string
    }>
  >
}) => {
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
    <Flex
      h={'10%'}
      p="5"
      borderBottom="1px"
      borderBottomColor="gray.300"
      justify="space-between"
    >
      <Heading size="xs" color="gray.700">
        Sort by:
      </Heading>
      <Select data-testid="filter" w="30%" size="sm" onChange={handleSortTodos}>
        <option value="createdAt">CreatedAt</option>
        <option value="endDateAsc">End Date (asc)</option>
        <option value="endDateDesc">End Date (desc)</option>
      </Select>
    </Flex>
  )
}
// ?sortby="createdAt"&order="desc"
