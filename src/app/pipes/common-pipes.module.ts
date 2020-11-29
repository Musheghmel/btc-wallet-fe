import {NgModule} from '@angular/core';
import {DebugPipe} from './debug.pipe';
import {LongNumberPipe} from './long-number.pipe';
import {ClearHtmlPipe} from './clear-html.pipe';
import { ToFixedPipe } from './to-fixed.pipe';

@NgModule({
    declarations: [
        DebugPipe,
        LongNumberPipe,
        ClearHtmlPipe,
        ToFixedPipe,
    ],
    exports: [
        DebugPipe,
        LongNumberPipe,
        ClearHtmlPipe,
        ToFixedPipe
    ]
})
export class CommonPipesModule {
}
