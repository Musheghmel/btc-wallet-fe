import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginStr;
    constructor(public authService: AuthService, public router: Router) {
    }

    ngOnInit(): void {
    }

    login(): void {
        this.authService.login(this.loginStr).subscribe((response) => {
            this.authService.loggedIn(response.result.seed);
            this.router.navigate(['/']);
        });
    }

}
