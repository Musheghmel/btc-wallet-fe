import {NgModule} from '@angular/core';
import {DisableAutofillDirective} from './disable-autofill.directive';
import {ClipboardDirective} from './clipboard.directive';

@NgModule({
    declarations: [
        DisableAutofillDirective,
        ClipboardDirective
    ],
    exports: [
        DisableAutofillDirective,
        ClipboardDirective
    ]
})
export class CommonDirectivesModule {
}
