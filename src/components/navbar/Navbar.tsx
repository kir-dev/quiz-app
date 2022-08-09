import { Box, Flex, Icon, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { KirdevNamed } from 'components/themed-svgs/KirdevNamed'
import { FaMoon } from 'react-icons/fa'
import { HiOutlineSun } from 'react-icons/hi'

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box fontFamily="heading">
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.800', 'white')}
        minH={{ base: '3rem', md: '4.5rem' }}
        maxW={['100%', '100%', '56rem', '72rem']}
        px={4}
        mx="auto"
        alignItems="center"
      >
        <Flex flex={{ base: 1, md: '1' }} ml={{ base: -2, md: 0 }} display={{ base: 'flex', md: 'none' }}></Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Box
            onClick={() => window.location.reload()}
            display="block"
            rounded="md"
            _hover={{
              textDecoration: 'none',
              color: 'orange.500'
            }}
          >
            <Box textAlign={{ base: 'center', md: 'left' }} mx="2">
              <KirdevNamed style={{ height: '1.25rem' }} />
            </Box>
          </Box>
        </Flex>
        <Flex display={{ base: 'none', md: 'flex' }} flex={{ base: 1 }} justify={{ base: 'center', md: 'flex-end' }}></Flex>
        <Flex flex={{ base: 1, md: 0 }} mr={{ base: -2, md: 0 }} justify="flex-end">
          <IconButton
            aria-label="Sötét-világos mód váltás"
            icon={colorMode === 'dark' ? <Icon as={HiOutlineSun} w={6} h={6} /> : <Icon as={FaMoon} w={5} h={5} />}
            onClick={toggleColorMode}
            variant="ghost"
          />
        </Flex>
      </Flex>
    </Box>
  )
}
