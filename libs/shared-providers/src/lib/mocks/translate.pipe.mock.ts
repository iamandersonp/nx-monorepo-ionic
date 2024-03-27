import { Pipe, PipeTransform } from '@angular/core';

/**
 * @ignore
 */
@Pipe({
  name: 'translate'
})
export class TranslatePipeMock implements PipeTransform {
  public name = 'translate';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public transform(query: string, ...args: unknown[]): unknown {
    return query;
  }
}
