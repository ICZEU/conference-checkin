import { NgModule } from "@angular/core";
import { SessionService } from './session.service';
import { TicketService } from './ticket.service';

@NgModule({
    providers: [
        SessionService,
        TicketService
    ]
})
export class CoreModule { }
