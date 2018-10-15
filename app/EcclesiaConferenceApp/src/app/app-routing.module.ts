import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home/home.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { ScanComponent } from "./scan/scan.component";
import { ScanResultComponent } from "./scan-result/scan-result.component";

export const COMPONENTS = [HomeComponent, ItemDetailComponent, ScanComponent, ScanResultComponent];

const routes: Routes = [
    { path: "", redirectTo: "/(homeTab:home//scanTab:scan)", pathMatch: "full" },

    { path: "home", component: HomeComponent, outlet: "homeTab" },
    { path: "scan", component: ScanComponent, outlet: "scanTab" },

    { path: "item/:id", component: ItemDetailComponent, outlet: "homeTab" },
    { path: "scan-result", component: ScanResultComponent, outlet: "scanTab" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
