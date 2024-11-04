import { randomUUID } from "node:crypto"
import { Slug } from "./value-objetcs/slug"

interface QuestionProps {
  title: string, 
  content: string,
  slug: Slug
  authodId: string, 
}
export class Question {
  public id: string
  public title: string
  public slug: Slug
  public content: string
  public authorId: string

  constructor(props: QuestionProps , id?: string) {
    this.title = props.title
    this.slug = props.slug
    this.content = props.content
    this.authorId = props.authodId
    this.id = id ?? randomUUID()
  }
}