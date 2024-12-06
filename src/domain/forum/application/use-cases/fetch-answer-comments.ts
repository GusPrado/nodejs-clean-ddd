import { Either, left, right } from '@/core/either'
import { AnswerComment } from '../../enterprise/entities/answer-comment'
import { AnswerCommentsRepository } from '../repositories/answer-comments-repository'
import { ResourceNotFoudError } from './errors/resource-not-found-error'

interface FetchAnswerCommentsUseCaseRequest {
  answerId: string
  page: number
}

type FetchAnswerCommentsUseCaseResponse = Either<
  ResourceNotFoudError,
  {
    answerComments: AnswerComment[]
  }
>

export class FetchAnswerCommentsUseCase {
  constructor(private answerCommentsRepository: AnswerCommentsRepository) {}

  async execute({
    page,
    answerId,
  }: FetchAnswerCommentsUseCaseRequest): Promise<FetchAnswerCommentsUseCaseResponse> {
    const answerComments =
      await this.answerCommentsRepository.findManyByAnswerId(answerId, {
        page,
      })

    if (!answerComments) {
      return left(new ResourceNotFoudError())
    }

    return right({
      answerComments,
    })
  }
}
