import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-auth-panel',
    templateUrl: './auth-panel.component.html',
    styleUrls: ['./auth-panel.component.scss']
})
export class AuthPanelComponent implements OnInit {

    constructor(public authService: AuthService) {
    }

    ngOnInit(): void {
    }
}
