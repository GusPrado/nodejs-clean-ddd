import { AnswersRepository } from '../repositories/answers-repository'
import { AnswerQuestionUseCase } from './answer-question'
import { Answer } from '@/domain/forum/enterprise/entities/answer'

const fakeAnswersFakeRepository: AnswersRepository = {
  create: async (answer: Answer) => {
    console.log(answer)
  },
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersFakeRepository)

  const answer = await answerQuestion.execute({
    instructorId: '1',
    questionId: '1',
    content: 'New response.',
  })

  expect(answer.content).toEqual('New response.')
})
