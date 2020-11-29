import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './views/main/main.component';
import {SignupComponent} from './views/signup/signup.component';
import {LoginComponent} from './views/login/login.component';
import {AuthService} from './services/auth.service';
import {GuestService} from './services/guest.service';
import {LayoutComponent} from './views/layout/layout.component';
import {AddressComponent} from './views/address/address.component';
import {TransactionsComponent} from './views/transactions/transactions.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                canActivate: [AuthService],
                component: MainComponent,
                children: [
                    {
                        path: '',
                        component: AddressComponent
                    },
                    {
                        path: 'transactions',
                        component: TransactionsComponent
                    },
                ]
            },
            {
                path: 'signup',
                canActivate: [GuestService],
                component: SignupComponent
            },
            {
                path: 'login',
                canActivate: [GuestService],
                component: LoginComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
