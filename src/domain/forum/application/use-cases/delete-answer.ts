import { Either, left, right } from '@/core/either'
import { AnswersRepository } from '../repositories/answers-repository'
import { NotAllowedError } from './errors/not-allowed-error'
import { ResourceNotFoudError } from './errors/resource-not-found-error'

interface DeleteAnswerUseCaseRequest {
  authorId: string
  answerId: string
}

type DeleteAnswerUseCaseResponse = Either<
  ResourceNotFoudError | NotAllowedError,
  object
>

export class DeleteAnswerUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    authorId,
    answerId,
  }: DeleteAnswerUseCaseRequest): Promise<DeleteAnswerUseCaseResponse> {
    const answer = await this.answersRepository.findyById(answerId)

    if (!answer) {
      return left(new ResourceNotFoudError())
    }

    if (authorId !== answer.authorId.toString()) {
      return left(new NotAllowedError())
    }

    await this.answersRepository.delete(answer)

    return right({})
  }
}
