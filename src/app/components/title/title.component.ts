import {ChangeDetectionStrategy, Component, DoCheck, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-title',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, DoCheck {
    @Input() set color(value: string) {
        this._color = value;
    }

    public _color: string = '';

    constructor() {
    }

    ngOnInit(): void {
    }

    ngDoCheck(): void {
    }

}
