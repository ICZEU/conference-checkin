import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Ticket, TicketService } from '../core/ticket.service';

@Component({
    selector: "TicketDetail",
    moduleId: module.id,
    templateUrl: "./ticket-detail.component.html"
})
export class TicketDetailComponent implements OnInit {
    ticket: Ticket;

    constructor(
        private ticketService: TicketService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = <string>this.route.snapshot.params.id;
        this.ticket = this.ticketService.getTicketFromHistory(id);
    }

    getKeys(obj: any) {
        let keys = [];
        for(let key in obj) {
            keys.push(key);
        }
        return keys;
    }
}
