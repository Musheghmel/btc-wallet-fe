import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    account: any;
    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {
    }

    generate(): void {
        this.authService.register().subscribe((response) => {
            this.account = response.result;
            this.authService.loggedIn(response.result.seed);
        });
    }
}
