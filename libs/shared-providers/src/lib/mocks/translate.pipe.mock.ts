import { Pipe, PipeTransform } from '@angular/core';

/**
 * @ignore
 */
@Pipe({
  name: 'translate'
})
export class TranslatePipeMock implements PipeTransform {
  public name = 'translate';

  public transform(query: string, ...args: unknown[]): unknown {
    return query;
  }
}
