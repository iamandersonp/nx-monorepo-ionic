import { Pipe, PipeTransform } from '@angular/core';

/**
 * @ignore
 */
@Pipe({
  name: 'translateMessage'
})
export class TranslateMessagePipeMock implements PipeTransform {
  public name = 'translateMessage';

  public transform(query: string, ...args: unknown[]): unknown {
    return query;
  }
}
