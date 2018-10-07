import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home/home.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { ScanComponent } from "./scan/scan.component";

export const COMPONENTS = [HomeComponent, ItemDetailComponent, ScanComponent];

const routes: Routes = [
    { path: "", redirectTo: "/(homeTab:home//scanTab:scan)", pathMatch: "full" },

    { path: "home", component: HomeComponent, outlet: "homeTab" },
    { path: "scan", component: ScanComponent, outlet: "scanTab" },

    { path: "item/:id", component: ItemDetailComponent, outlet: "homeTab" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
