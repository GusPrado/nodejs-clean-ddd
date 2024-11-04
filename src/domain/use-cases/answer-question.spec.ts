import {expect, test} from 'vitest'
import { answerQuestionUseCase } from './answer-question'
import { AnswersRepository } from '../repositories/answers-repository'
import { Answer } from '../entities/answer'

const answersFakeRepository: AnswersRepository = {
  create: async (answer: Answer)=> {
    return
  }
}

test('create an answer', async () => {
  const answerQuestion = new answerQuestionUseCase(answersFakeRepository)

  const answer = await answerQuestion.execute({
    instructorId: '1',
    questionId: '1',
    content: 'New response.'
  })

  expect(answer.content).toEqual('New response.')
})