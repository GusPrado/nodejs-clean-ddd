import { Either, left, right } from '@/core/either'
import { QuestionComment } from '../../enterprise/entities/question-comment'
import { QuestionCommentsRepository } from '../repositories/question-comments-repository'
import { ResourceNotFoudError } from './errors/resource-not-found-error'

interface FetchQuestionCommentsUseCaseRequest {
  questionId: string
  page: number
}

type FetchQuestionCommentsUseCaseResponse = Either<
  ResourceNotFoudError,
  {
    questionComments: QuestionComment[]
  }
>

export class FetchQuestionCommentsUseCase {
  constructor(private questionCommentsRepository: QuestionCommentsRepository) {}

  async execute({
    page,
    questionId,
  }: FetchQuestionCommentsUseCaseRequest): Promise<FetchQuestionCommentsUseCaseResponse> {
    const questionComments =
      await this.questionCommentsRepository.findManyByQuestionId(questionId, {
        page,
      })

    if (!questionComments) {
      return left(new ResourceNotFoudError())
    }

    return right({
      questionComments,
    })
  }
}
