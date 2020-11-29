import {Component, OnInit} from '@angular/core';
import {TransactionsService} from "../../services/transactions.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-transactions',
    templateUrl: './transactions.component.html',
    styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
    transactions = [];

    address = null;
    loading = false;

    constructor(private transactionsService: TransactionsService,
                private route: ActivatedRoute,
                private router: Router,
                private snackbar: MatSnackBar) {
        this.route.queryParams.subscribe(params => {
            this.address = params.wallet || null;
            this.getTransactions();
        });
    }

    ngOnInit(): void {
    }

    getTransactions(): void {
        this.loading = true;
        const address = this.address || null;
        this.transactionsService.getTransactions(address).subscribe((response) => {
            this.transactions = response.result;
            this.loading = false;
        }, (err) => {
            this.router.navigate(['/']);
            this.snackbar.open(err, 'close', {
                duration: 2000,
            });

            this.loading = false;
        });
    }

}
