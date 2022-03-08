import { Box, Center, Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface LayoutProps {
  top: ReactNode | ReactNode[]
  bottom: ReactNode | ReactNode[]
}

export const Layout = ({ top, bottom }: LayoutProps) => {
  return (
    <Center bg="brand" w="100vw" h={'100vh'} flexDir="column">
      <Center mb="5">
        <Heading color="white">Todo App</Heading>
      </Center>
      <Center flexDir="column">
        <Box
          mb="5"
          bg="white"
          borderRadius="lg"
          w={['350px', '400px', '500px', '530px']}
        >
          {top}
        </Box>
        <Box
          borderRadius="lg"
          bg="white"
          w={['350px', '400px', '500px', '530px']}
        >
          {bottom}
        </Box>
      </Center>
    </Center>
  )
}
