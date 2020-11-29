import {Injectable} from '@angular/core';

@Injectable()
export class StorageService implements Storage {
    readonly length: number;
    private storage: any;

    constructor() {
        this.setStorage(localStorage);
    }

    setStorage(storage: any): void {
        this.storage = storage;
    }

    key(index: number): string | null {
        return this.storage.key();
    }

    removeItem(key: string): void {
        this.storage.removeItem(key);
    }

    clear(): void {
        this.storage.clear();
    }

    getItem(key: string): string {
        return this.storage.getItem(key);
    }

    setItem(key: string, value: string): void {
        this.storage.setItem(key, value);
    }

    [key: string]: any;
    [index: number]: string;
}
