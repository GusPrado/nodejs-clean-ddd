import { Question } from '@/domain/forum/enterprise/entities/question'
import { QuestionsRepository } from './../repositories/questions-repository'
import { CreateQuestionUseCase } from './create-question'

const fakeQuestionsFakeRepository: QuestionsRepository = {
  create: async (question: Question) => {
    console.log(question)
  },
}

test('create a question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsFakeRepository)

  const { question } = await createQuestion.execute({
    authorId: '1',
    title: 'New question',
    content: 'Here is my question.',
  })

  expect(question.id).toBeTruthy()
})
