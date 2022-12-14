import { FormControl, FormLabel, Radio, RadioGroup, Text, VStack } from '@chakra-ui/react'
import { POSSIBLE_ANSWERS, QuizProps } from 'utils/quizQuestions'
import { CodeHighlighter } from './CodeHighlighter'

type Props = {
  question: QuizProps
}

export const Question = ({ question }: Props) => (
  <FormControl key={question.id} isRequired my={5}>
    <FormLabel>{question.prompt}</FormLabel>
    <CodeHighlighter code={question.code} lang={question.lang} />
    <Text mb={2}>A válaszod:</Text>
    <RadioGroup value={question.answer}>
      <VStack align="stretch">
        {POSSIBLE_ANSWERS.map((answer) => (
          <Radio key={answer} value={answer}>
            {answer}
          </Radio>
        ))}
      </VStack>
    </RadioGroup>
  </FormControl>
)
