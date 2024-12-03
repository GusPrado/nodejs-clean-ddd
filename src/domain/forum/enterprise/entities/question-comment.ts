import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'
import { CommentProps, Comment } from './comment'

export interface QuestioncommentProps extends CommentProps {
  questionId: UniqueEntityID
}
export class Questioncomment extends Comment<QuestioncommentProps> {
  get questionId() {
    return this.props.questionId
  }

  static create(
    props: Optional<QuestioncommentProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const question = new Questioncomment(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return question
  }
}
