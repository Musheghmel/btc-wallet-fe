import {Component, OnInit} from '@angular/core';
import {StorageService} from '../../services/storage.service';
import {AuthService} from '../../services/auth.service';
import {Router} from "@angular/router";

@Component({
    selector: 'app-user-panel',
    templateUrl: './user-panel.component.html',
    styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {

    constructor(private authService: AuthService,
                private router: Router) {
    }

    ngOnInit(): void {
    }

    logout(): void {
        this.authService.logout();
        this.router.navigate(['/login']);
    }

}
