import { Injectable } from '@angular/core';

export interface Ticket {
    valid: boolean;
    id: string;
    title: string;
    personalData: any;
    validatedAt: Date
}

/**
 * Service to validate tickets.
 */
@Injectable()
export class TicketService {

    async validateQrCode(qrCodeValue: string): Promise<Ticket> {
        return new Promise<Ticket>(
            resolve => setTimeout(() => {
                let ticket = <Ticket>{
                    valid: true,
                    id: qrCodeValue,
                    title: "Hektor, Jonas",
                    personalData: {
                        "Vorname": "Jonas",
                        "Nachname": "Hektor",
                        "Alter": 17,
                        "Geschlecht": "männlich",
                        "Art des Zimmers": "Hotel (2-er/4-er Zimmer)",
                        "Gemeinde": "Ecclesia Roth"
                    },
                    validatedAt: new Date()
                };
                this.addToHistory(ticket);
                resolve(ticket);
            }, 1500)
        );
    }

    private history: Ticket[] = [];

    private addToHistory(ticket: Ticket): void {
        this.history.push(ticket);
    }

    getHistory(): Ticket[] {
        return this.history;
    }

    getTicketFromHistory(ticketId: string): Ticket {
        for(let ticket of this.getHistory()) {
            if (ticket.id === ticketId) {
                return ticket;
            }
        }
        return null;
    }
}