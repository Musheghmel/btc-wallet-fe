import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './views/main/main.component';
import {CommonComponentModule} from './components/common-components.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {NetworkHelper} from './helpers/network.helper';
import {StorageService} from './services/storage.service';

import {TokenInterceptor} from './services/token.interceptor';
import {AuthService} from './services/auth.service';
import {LoggerService} from './services/logger.service';
import {CommonPipesModule} from './pipes/common-pipes.module';
import {LanguageService} from './services/language.service';
import { SignupComponent } from './views/signup/signup.component';
import { LoginComponent } from './views/login/login.component';
import { LayoutComponent } from './views/layout/layout.component';
import { AddressComponent } from './views/address/address.component';
import { TransactionsComponent } from './views/transactions/transactions.component';
import {WalletsService} from './services/wallet.service';
import {TransactionsService} from './services/transactions.service';
import {ClipboardService} from './services/clipboard.service';
import {CommonDirectivesModule} from "./directives/common-directives.module";

export function HttpLoaderFactory(http: HttpClient): any {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        SignupComponent,
        LoginComponent,
        LayoutComponent,
        AddressComponent,
        TransactionsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CommonComponentModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CommonPipesModule,
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        CommonDirectivesModule
    ],
    providers: [
        NetworkHelper,
        StorageService,
        LanguageService,
        LoggerService,
        TranslateService,
        AuthService,
        WalletsService,
        TransactionsService,
        ClipboardService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
