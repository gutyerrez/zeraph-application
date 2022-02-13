import { Exception } from '@vyrnn/zeraph-exceptions'

export abstract class AbstractApplicationProvider {
  public static prepare: () => Promise<void>
}

export class ApplicationAlreadyPreparedException extends Exception {
  constructor(
    status: number = 409,
    message: string = 'application already prepared'
  ) { super(status, message) }
}
