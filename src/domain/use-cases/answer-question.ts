import { Answer } from "../entities/answer"

interface answerQuestionUseCaseRequest {
  instructorId: string
  questionId: string
  content: string
}

export class answerQuestionUseCase {
  execute({instructorId, questionId, content}: answerQuestionUseCaseRequest) {
    const answer = new Answer({
      content, 
      authorId: instructorId, 
      questionId
    })

    return answer
  }
}