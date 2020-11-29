import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {StorageService} from './storage.service';

@Injectable({
    providedIn: 'root'
})
export class GuestService implements CanActivate {
    private isAuthenticated;

    constructor(private router: Router, private storage: StorageService) {
        this.isAuthenticated = this.storage.getItem('isAuth') === 'true';
    }

    canActivate(): boolean {
        if (!this.isAuthenticated) {
            return true;
        }

        this.router.navigate(['/']);
        return false;
    }
}
