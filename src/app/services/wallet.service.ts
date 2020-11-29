import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {NetworkHelper} from '../helpers/network.helper';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {StorageService} from './storage.service';


@Injectable()
export class WalletsService {
    private readonly hostUrl: string;

    constructor(private router: Router, private networkHelper: NetworkHelper, private storage: StorageService) {
        this.hostUrl = environment.host;
    }

    getWallets(): Observable<any> {
        return this.networkHelper.get(`${this.hostUrl}/wallets`);
    }

    addWallet(): Observable<any> {
        return this.networkHelper.post(`${this.hostUrl}/wallets`, {});
    }

    // login(login: string): Observable<any> {
    //     return this.networkHelper.post(`${this.hostUrl}/auth`, {login: login});
    // }
}
