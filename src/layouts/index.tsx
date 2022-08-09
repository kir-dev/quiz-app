import { Box, Flex } from '@chakra-ui/react'
import { Footer } from 'components/footer/Footer'
import { Navbar } from 'components/navbar/Navbar'
import { HasChildren } from 'utils/HasChildren'

export const IndexLayout = ({ children }: HasChildren) => (
  <Flex direction="column" minHeight="100vh">
    <Navbar />
    <Box flex={1} pb={20}>
      {children}
    </Box>
    <Footer />
  </Flex>
)
