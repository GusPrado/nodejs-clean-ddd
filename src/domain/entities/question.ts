import { Slug } from "./value-objetcs/slug"
import { Entity } from "../../core/entities/entity"

interface QuestionProps {
  title: string, 
  content: string,
  slug: Slug
  authodId: string, 
}
export class Question extends Entity<QuestionProps> {}