import { Component, OnInit } from "@angular/core";
import { SessionService } from "../core/session.service";
import { TicketService, Ticket } from "../core/ticket.service";

@Component({
    selector: "ScanResult",
    moduleId: module.id,
    templateUrl: "./scan-result.component.html",
    styleUrls: ["./scan-result.component.scss"]
})
export class ScanResultComponent implements OnInit {

    isBusy: boolean = true;
    isValid: boolean = true;
    ticket: Ticket;

    constructor(
        public session: SessionService,
        private ticketService: TicketService
    ) { 
        if (!session.qrCodeValue) {
            throw "no qr code was scanned.";
        }
    }

    ngOnInit(): void {
        this.validateQrCode();
    }

    async validateQrCode() {
        let result = await this.ticketService.validateQrCode(this.session.qrCodeValue);
        this.isBusy = false;
        this.isValid = result.valid;
        this.ticket = result;
    }

    getKeys(obj: any) {
        let keys = [];
        for(let key in obj) {
            keys.push(key);
        }
        return keys;
    }
}
