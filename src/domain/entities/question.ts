import { randomUUID } from "node:crypto"

interface QuestionProps {
  title: string, 
  content: string,
  authodId: string, 
}
export class Question {
  public id: string
  public title: string
  public content: string
  public authorId: string

  constructor(props: QuestionProps , id?: string) {
    this.title = props.title
    this.content = props.content
    this.authorId = props.authodId
    this.id = id ?? randomUUID()
  }
}