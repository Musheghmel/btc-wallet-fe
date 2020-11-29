import {Component, OnInit} from '@angular/core';
import {StorageService} from '../../services/storage.service';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public isAuthenticated = false;
    constructor(private storage: StorageService,
                private authService: AuthService) {
        this.isAuthenticated = this.storage.getItem('isAuth') === 'true';
    }

    ngOnInit(): void {
        this.authService.authChange.subscribe((result) => {
            this.isAuthenticated = result;
        });
    }

}
