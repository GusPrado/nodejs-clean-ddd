import { UseCaseError } from '@/core/errors/use-case-error'

export class ResourceNotFoudError extends Error implements UseCaseError {
  constructor() {
    super('Resource not found')
  }
}
