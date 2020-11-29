import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clearHtml'
})
export class ClearHtmlPipe implements PipeTransform {

  transform(value: string): unknown {
    return value.replace(/<[^>]*>/g, '');
  }

}
