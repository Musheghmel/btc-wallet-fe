import {Component, OnInit} from '@angular/core';
import {TransactionsService} from "../../services/transactions.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-transactions',
    templateUrl: './transactions.component.html',
    styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
    transactions = [];

    address = null;

    constructor(private transactionsService: TransactionsService,
                private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            this.address = params.wallet || null;
            this.getTransactions();
        });
    }

    ngOnInit(): void {
    }

    getTransactions(): void {
        const address = this.address || null;
        this.transactionsService.getTransactions(address).subscribe((response) => {
            this.transactions = response.result;
        });
    }

}
