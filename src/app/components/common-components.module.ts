import {NgModule} from '@angular/core';
import {TitleComponent} from './title/title.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTooltipModule} from '@angular/material/tooltip';
import {CommonPipesModule} from '../pipes/common-pipes.module';
import {TranslateModule} from '@ngx-translate/core';
import {CommonDirectivesModule} from '../directives/common-directives.module';
import {MatNativeDateModule} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {AuthPanelComponent} from './auth-panel/auth-panel.component';
import {UserPanelComponent} from './user-panel/user-panel.component';
import {CardComponent} from './card/card.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CommonPipesModule,
        CommonDirectivesModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatTooltipModule,
        MatButtonModule,
        MatInputModule,
        MatTooltipModule,
        MatSnackBarModule
    ],
    declarations: [
        TitleComponent,
        HeaderComponent,
        FooterComponent,
        AuthPanelComponent,
        UserPanelComponent,
        CardComponent
    ],
    providers: [
        CommonPipesModule
    ],
    exports: [
        RouterModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatTooltipModule,
        TitleComponent,
        HeaderComponent,
        FooterComponent,
        CardComponent,
        MatSnackBarModule
    ]
})
export class CommonComponentModule {
}
