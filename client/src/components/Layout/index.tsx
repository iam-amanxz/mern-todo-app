import { Box, Center, Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'

export const Layout = ({
  top,
  bottom,
}: {
  top: ReactNode | ReactNode[]
  bottom: ReactNode
}) => {
  return (
    <Center
      p={{ lg: '10' }}
      bg="brand"
      w="100vw"
      h={'100vh'}
      flexDir="column"
      justifyContent="space-between"
    >
      <Center p="10">
        <Heading color="white" h="10%">
          Todo App
        </Heading>
      </Center>
      <Box bg="white" w="100%" maxW="xl" h="65%">
        {top}
      </Box>
      <Box
        bg="white"
        w="100%"
        maxW="xl"
        h="15%"
        borderTop="1px"
        borderTopColor="gray.300"
      >
        {bottom}
      </Box>
    </Center>
  )
}
