import {
  Badge,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Link,
  Radio,
  RadioGroup,
  Text,
  useBreakpointValue,
  VStack
} from '@chakra-ui/react'
import { useState } from 'react'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'
import { Container } from '~components/Container'
import { CodeHighlighter } from '~components/quiz-components/CodeHighlighter'
import { AnswerType, POSSIBLE_ANSWERS, QUIZ_QUESTIONS } from '~utils/quizQuestions'
import { IndexLayout } from '../layouts'
import { environment } from '../utils/configurations'

type Answer = {
  id: string
  value?: AnswerType
  right?: boolean
}

const QuizPage = () => {
  const [answers, setAnswers] = useState<Answer[]>(QUIZ_QUESTIONS.map((q) => ({ id: q.id, value: undefined, right: undefined })))
  const [showResult, setShowResult] = useState<boolean>(false)
  const [doRecycle, setDoRecycle] = useState<boolean>(true)
  const { width, height } = useWindowSize()

  const handleChange = (answerIndex: number, newValue: AnswerType) => {
    const newAnswers = [...answers]
    newAnswers[answerIndex].value = newValue
    setAnswers(newAnswers)
  }

  const checkAnswers = () => {
    const newAnswers = answers.map((a, index) => ({
      ...a,
      right: a.value === QUIZ_QUESTIONS[index].answer
    }))
    setAnswers(newAnswers)
    setShowResult(true)
    if (newAnswers.reduce((a, b) => (a += b.right ? 1 : 0), 0) === QUIZ_QUESTIONS.length) {
      setDoRecycle(true)
      setTimeout(() => setDoRecycle(false), 6000)
    }
  }

  const clear = () => {
    window.location.reload()
  }

  return (
    <>
      <div style={{ position: 'fixed', zIndex: 1000 }}>
        <Confetti width={width} height={height} recycle={doRecycle} run={showResult} />
      </div>
      <IndexLayout
        background={`${useBreakpointValue({
          base: '',
          sm: 'url(/background/top-left.svg) left top no-repeat, '
        })}url(/background/top-right.svg) right top no-repeat`}
      >
        <Container>
          <Heading textAlign="center" fontSize="5xl">
            Kir-Dev GTB 4. nap kvíz - 2022
          </Heading>
          <Box my={5}>
            <Button variant="outline" colorScheme="orange">
              Vissza a honlapra
            </Button>
          </Box>
          {QUIZ_QUESTIONS.map((question, index) => (
            <FormControl key={question.id} isRequired my={10} borderRadius="base" borderWidth="thin" p={5} pb={10}>
              <FormLabel fontSize="2xl">
                {index + 1}. {question.prompt}
              </FormLabel>
              <CodeHighlighter code={question.code} lang={question.lang} />
              <HStack my={4} fontSize="xl" mt={4}>
                <Box>A megadott válasz:</Box>
                {answers[index].right === true && (
                  <Badge colorScheme="green" fontSize="xl">
                    HELYES
                  </Badge>
                )}
                {answers[index].right === false && (
                  <Badge colorScheme="red" fontSize="xl">
                    HELYTELEN
                  </Badge>
                )}
              </HStack>
              <RadioGroup onChange={(nextValue) => handleChange(index, nextValue as AnswerType)} value={answers[index].value}>
                <VStack align="stretch">
                  {POSSIBLE_ANSWERS.map((answer) => (
                    <Radio key={answer} value={answer}>
                      {answer}
                    </Radio>
                  ))}
                </VStack>
              </RadioGroup>
            </FormControl>
          ))}
          <Flex justifyContent="space-between" flexWrap="wrap" mt={10}>
            <Button variant="outline" colorScheme="orange" onClick={clear}>
              Válaszok törlése
            </Button>
            <Box display={showResult ? 'inherit' : 'none'}>
              <Text fontSize="xl" fontWeight={700}>
                Sikeresen megválaszolva: {answers.reduce((a, b) => (a += b.right ? 1 : 0), 0)}/{QUIZ_QUESTIONS.length}
              </Text>
            </Box>
            <Button colorScheme="orange" onClick={checkAnswers}>
              Kiértékelés!
            </Button>
          </Flex>
          <Box my={20}>
            <Heading>Érdekel, ezek közül mi mivel foglalkozunk?</Heading>
            <Text mt={2}>
              Nézz rá kódbázisainkra a{' '}
              <Link
                href={environment.socials.githubOrgUrl}
                isExternal
                color="orange.400"
                _hover={{ textDecor: 'underline', color: 'orange.500' }}
              >
                GitHub szervezetünkben
              </Link>
              , vagy vizsgáld meg{' '}
              <Link
                href="https://kir-dev.sch.bme.hu/projects"
                isExternal
                color="orange.400"
                _hover={{ textDecor: 'underline', color: 'orange.500' }}
              >
                projektjeinket itt a blogon
              </Link>
              .
            </Text>
          </Box>
        </Container>
      </IndexLayout>
    </>
  )
}

export default QuizPage
