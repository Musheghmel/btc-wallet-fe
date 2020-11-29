import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'debug'})
export class DebugPipe implements PipeTransform {
    transform(value: any): void {
        console.log(value);
    }
}
