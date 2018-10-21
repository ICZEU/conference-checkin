import { Injectable } from '@angular/core';

export interface Ticket {
    id: string;
    valid: boolean;
    personalData: any;
}

/**
 * Service to validate tickets.
 */
@Injectable()
export class TicketService {

    async validateQrCode(qrCodeValue: string): Promise<Ticket> {
        return new Promise<Ticket>(
                resolve => setTimeout(() =>
                    resolve(
                        <Ticket>{ 
                            id: qrCodeValue,
                            valid: true,
                            personalData: {
                                "Vorname": "Jonas",
                                "Nachname": "Hektor",
                                "Alter": 17,
                                "Geschlecht": "männlich",
                                "Art des Zimmers": "Hotel (2-er/4-er Zimmer)",
                                "Gemeinde": "Ecclesia Roth"
                            }
                        }
                    ), 1500)
                );
    }
}