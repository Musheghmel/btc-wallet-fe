import {Component, OnInit} from '@angular/core';
import {WalletsService} from '../../services/wallet.service';
import {StorageService} from '../../services/storage.service';

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
    wallets = [];

    loading;
    addingAddress = false;
    loadingRowsCount = 11;

    constructor(private walletsService: WalletsService,
                private storage: StorageService) {

        const walletsCount = this.storage.getItem('walletsCount');
        if (walletsCount) {
            this.loadingRowsCount = +walletsCount + 1;
        }
    }

    ngOnInit(): void {
        this.loading = true;
        this.walletsService.getWallets().subscribe((response) => {
            this.wallets = response.result;
            this.loading = false;
        }, (err) => {
            this.loading = false;
        });
    }

    addAddress(): void {
        if (this.addingAddress) {
            return;
        }
        this.addingAddress = true;
        this.walletsService.addWallet().subscribe((response) => {
            this.addingAddress = false;
            this.wallets.push(response.result);
            let walletsCount = 10;
            const walletsCountStr = this.storage.getItem('walletsCount');
            if (walletsCountStr) {
                walletsCount = +walletsCountStr;
            }

            ++walletsCount;
            this.storage.setItem('walletsCount', `${walletsCount}`);
        }, (err) => {
            this.addingAddress = false;
        });
    }

}
