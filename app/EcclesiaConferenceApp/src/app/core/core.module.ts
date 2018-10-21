import { NgModule } from "@angular/core";
import { DataService } from "./data.service";
import { SessionService } from './session.service';
import { TicketService } from './ticket.service';

@NgModule({
    providers: [
        DataService,
        SessionService,
        TicketService
    ]
})
export class CoreModule { }
