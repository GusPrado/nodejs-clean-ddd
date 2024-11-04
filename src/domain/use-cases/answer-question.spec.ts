import {expect, test} from 'vitest'
import { answerQuestionUseCase } from './answer-question'

test('create an answer', () => {
  const answerQuestion = new answerQuestionUseCase()

  const answer = answerQuestion.execute({
    instructorId: '1',
    questionId: '1',
    content: 'New response.'
  })

  expect(answer.content).toEqual('New response.')
})