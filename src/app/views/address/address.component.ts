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

    constructor(private walletsService: WalletsService,
                private storage: StorageService) {
    }

    ngOnInit(): void {
        this.walletsService.getWallets().subscribe((response) => {
            this.wallets = response.result;
        });
    }

    addAddress(): void {
        this.walletsService.addWallet().subscribe((response) => {
            this.wallets.push(response.result);
            let walletsCount = 10;
            const walletsCountStr = this.storage.getItem('walletsCount');
            if (walletsCountStr) {
                walletsCount = +walletsCountStr;
            }

            ++walletsCount;
            this.storage.setItem('walletsCount', `${walletsCount}`);
        });
    }

}
