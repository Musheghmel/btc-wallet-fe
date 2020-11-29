import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {NetworkHelper} from '../helpers/network.helper';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {StorageService} from './storage.service';
import {isNullOrUndefined} from 'util';
import {map} from 'rxjs/operators';
import {BehaviorSubject, ReplaySubject, Subject, throwError} from 'rxjs';

@Injectable()
export class AuthService implements CanActivate {
    private readonly hostUrl: string;
    public isAuthenticated = true; // Set this value dynamically

    public authChange = new ReplaySubject<boolean>(1);

    constructor(private router: Router, private networkHelper: NetworkHelper, private storage: StorageService) {
        this.hostUrl = environment.host;
        this.isAuthenticated = this.storage.getItem('isAuth') === 'true';
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.isAuthenticated) {
            return true;
        }

        this.router.navigate(['/signup']);
        return false;
    }

    register(): Observable<any> {
        return this.networkHelper.post(`${this.hostUrl}/signup`, {}, '');
    }

    login(login: string): Observable<any> {
        return this.networkHelper.post(`${this.hostUrl}/auth`, { login });
    }

    loggedIn(seed): void {
        this.isAuthenticated = true;
        this.storage.setItem('isAuth', 'true');
        this.storage.setItem('token', seed);
        this.authChange.next(this.isAuthenticated);
    }

    logout(): void {
        this.isAuthenticated = false;
        this.storage.setItem('isAuth', 'false');
        this.storage.setItem('walletsCount', '');
        this.storage.setItem('token', '');
        this.authChange.next(this.isAuthenticated);
    }
}
