import { Box, Button, Container, Flex, Heading } from '@chakra-ui/react'
import { Link } from 'gatsby'
import { IndexLayout } from 'layouts'

const NotFoundPage = () => (
  <>
    <IndexLayout background="url(/background/top-right.svg) right top no-repeat, url(/background/top-left.svg) left top no-repeat">
      <Box>
        <Container>
          <Heading as="h1">Page not found (404)</Heading>
          <Flex justifyContent="space-between">
            You've hit the void.{' '}
            <Button as={Link} colorScheme="orange" to="/">
              Go back
            </Button>
          </Flex>
        </Container>
      </Box>
    </IndexLayout>
  </>
)

export default NotFoundPage
