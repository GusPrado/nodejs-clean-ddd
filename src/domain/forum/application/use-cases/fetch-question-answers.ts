import { Either, left, right } from '@/core/either'
import { Answer } from '../../enterprise/entities/answer'
import { AnswersRepository } from '../repositories/answers-repository'
import { ResourceNotFoudError } from './errors/resource-not-found-error'

interface FetchQuestionAnswersUseCaseRequest {
  questionId: string
  page: number
}

type FetchQuestionAnswersUseCaseResponse = Either<
  ResourceNotFoudError,
  {
    answers: Answer[]
  }
>

export class FetchQuestionAnswersUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    page,
    questionId,
  }: FetchQuestionAnswersUseCaseRequest): Promise<FetchQuestionAnswersUseCaseResponse> {
    const answers = await this.answersRepository.findManyByQuestionId(
      questionId,
      { page },
    )

    if (!answers) {
      return left(new ResourceNotFoudError())
    }

    return right({
      answers,
    })
  }
}
