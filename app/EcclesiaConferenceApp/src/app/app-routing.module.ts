import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { TicketsComponent } from './tickets/tickets.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { ScanComponent } from "./scan/scan.component";
import { ScanResultComponent } from "./scan-result/scan-result.component";

export const COMPONENTS = [TicketsComponent, TicketDetailComponent, ScanComponent, ScanResultComponent];

const routes: Routes = [
    { path: "", redirectTo: "/(ticketsTab:tickets//scanTab:scan)", pathMatch: "full" },

    { path: "tickets", component: TicketsComponent, outlet: "ticketsTab" },
    { path: "scan", component: ScanComponent, outlet: "scanTab" },

    { path: "ticket/:id", component: TicketDetailComponent, outlet: "ticketsTab" },
    { path: "scan-result", component: ScanResultComponent, outlet: "scanTab" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
