import { Box, Container, Flex, HStack, Icon, Image, Link, Text } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/system'
import { KirdevOriginal } from 'components/themed-svgs/KirdevOriginal'
import { FaAt } from 'react-icons/fa'
import { getSocials } from 'utils/commonFunctions'
import { environment } from 'utils/configurations'
import { SocialButton } from './SocialButton'

export const Footer = () => (
  <Box zIndex={1}>
    <Box borderTopWidth={1} borderStyle="solid" borderColor={useColorModeValue('gray.200', 'gray.700')}>
      <Container maxW="6xl" py={4}>
        <Flex flexDirection={{ base: 'column-reverse', sm: 'row' }}>
          <Flex flex={1} justifyContent={{ base: 'center', sm: 'flex-start' }}>
            <HStack>
              <KirdevOriginal style={{ height: '3rem' }} />
              <Link isExternal href="https://vercel.com?utm_source=kir-dev&utm_campaign=oss">
                <Image height="1.75rem" src="/svg/powered-by-vercel.svg" alt="Vercel Logo" />
              </Link>
            </HStack>
          </Flex>

          <Box py={{ base: 4, sm: 0 }} flex={1} textAlign="center">
            <FaAt style={{ display: 'inline' }} size="0.75rem" />
            &nbsp;
            <span>{environment.socials.publicEmail}</span>
            <Text>&copy; {new Date().getFullYear()} Kir-Dev</Text>
            <Link href={getSocials(['web'])[0].url}>{getSocials(['web'])[0].url}</Link>
          </Box>

          <Flex flex={1} textAlign="right" justifyContent={{ base: 'center', sm: 'flex-end' }}>
            <HStack spacing={3}>
              {getSocials(['web', 'github', 'facebook', 'youtube']).map((social) => (
                <SocialButton key={social.shortText} label={social.shortText} href={social.url} size="3rem">
                  <Icon as={social.Icon} h="2rem" w="2rem" />
                </SocialButton>
              ))}
            </HStack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  </Box>
)
