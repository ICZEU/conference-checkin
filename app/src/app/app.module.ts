import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { BarcodeScanner } from 'nativescript-barcodescanner';

import { AppRoutingModule, COMPONENTS } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";

export function createBarcodeScanner() {
    return new BarcodeScanner();
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        CoreModule
    ],
    declarations: [
        AppComponent,
        ...COMPONENTS
    ],
    providers: [
        { provide: BarcodeScanner, useFactory: (createBarcodeScanner) }
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
