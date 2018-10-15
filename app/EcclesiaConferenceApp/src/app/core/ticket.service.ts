import { Injectable } from '@angular/core';

@Injectable()
export class TicketService {

    async validateTicket(id: any) {
        return new Promise(resolve => setTimeout(resolve, 3000));
    }
}