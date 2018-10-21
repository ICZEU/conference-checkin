import { Component, OnInit } from "@angular/core";
import { TicketService, Ticket } from '../core/ticket.service';

@Component({
    selector: "Tickets",
    moduleId: module.id,
    templateUrl: "./tickets.component.html"
})
export class TicketsComponent implements OnInit {
    tickets: Ticket[] = [];

    constructor(private ticketService: TicketService) { }

    ngOnInit(): void {
        this.tickets = this.ticketService.getHistory();
    }
}
