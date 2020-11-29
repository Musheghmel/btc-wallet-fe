import {Injectable} from '@angular/core';

@Injectable()
export class Utl {
    static isNullOrUndefined(value: any): boolean {
        return value === undefined || value === null;
    }
}
