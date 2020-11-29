import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {NetworkHelper} from '../helpers/network.helper';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {StorageService} from './storage.service';


@Injectable()
export class TransactionsService {
    private readonly hostUrl: string;

    constructor(private router: Router, private networkHelper: NetworkHelper, private storage: StorageService) {
        this.hostUrl = environment.host;
    }

    getTransactions(wallet): Observable<any> {
        const data: any = {};
        if (wallet) {
            data.address = wallet;
        }
        return this.networkHelper.get(`${this.hostUrl}/transactions`, data);
    }
}
