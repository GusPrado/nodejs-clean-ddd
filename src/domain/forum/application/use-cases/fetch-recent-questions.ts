import { Either, left, right } from '@/core/either'
import { Question } from '../../enterprise/entities/question'
import { QuestionsRepository } from '../repositories/questions-repository'
import { ResourceNotFoudError } from './errors/resource-not-found-error'

interface FetchRecentQuestionsUseCaseRequest {
  page: number
}

type FetchRecentQuestionsUseCaseResponse = Either<
  ResourceNotFoudError,
  {
    questions: Question[]
  }
>

export class FetchRecentQuestionsUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    page,
  }: FetchRecentQuestionsUseCaseRequest): Promise<FetchRecentQuestionsUseCaseResponse> {
    const questions = await this.questionsRepository.findManyRecent({ page })

    if (!questions) {
      return left(new ResourceNotFoudError())
    }

    return right({
      questions,
    })
  }
}
