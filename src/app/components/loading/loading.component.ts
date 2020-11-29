import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
    @Input() rows = 10;
    rowsArray = [];

    constructor() {

    }

    ngOnInit(): void {
        for (let i = 0; i < this.rows; ++i) {
            this.rowsArray.push({});
        }
    }

}
