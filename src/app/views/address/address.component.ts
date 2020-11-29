import {Component, OnInit} from '@angular/core';
import {WalletsService} from "../../services/wallet.service";

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
    wallets = [];

    constructor(private walletsService: WalletsService) {
    }

    ngOnInit(): void {
        this.walletsService.getWallets().subscribe((response) => {
            this.wallets = response.result;
        });
    }

    addAddress(): void {
        this.walletsService.addWallet().subscribe((response) => {
            this.wallets.push(response.result);
        });
    }

}
