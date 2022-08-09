import { ChakraProvider } from '@chakra-ui/react'
import 'assets/stylesheets/global.css'
import QuizPage from 'pages'
import theme from 'utils/theme'

export const App = () => (
  <ChakraProvider theme={theme}>
    <QuizPage />
  </ChakraProvider>
)
