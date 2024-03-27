import { Pipe, PipeTransform } from '@angular/core';

/**
 * @ignore
 */
@Pipe({
  name: 'translateMessage'
})
export class TranslateMessagePipeMock implements PipeTransform {
  public name = 'translateMessage';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public transform(query: string, ...args: unknown[]): unknown {
    return query;
  }
}
