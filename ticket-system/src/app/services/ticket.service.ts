import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ticket, TicketType } from '../models/ticket';

@Injectable({ providedIn: 'root' })
export class TicketService {
  private tickets: Ticket[] = [];
  private lastSequence: Record<TicketType, number> = {
    SP: 0,
    SG: 0,
    SE: 0,
  };

  public calledTickets$ = new BehaviorSubject<Ticket[]>([]);

  generateTicket(type: TicketType): Ticket {
    this.lastSequence[type]++;
    const today = new Date();
    const id = `${today.getFullYear().toString().slice(2)}${String(
      today.getMonth() + 1
    ).padStart(2, '0')}${String(today.getDate()).padStart(
      2,
      '0'
    )}-${type}${String(this.lastSequence[type]).padStart(4, '0')}`;

    const ticket: Ticket = { id, type, createdAt: new Date(), attended: false };
    this.tickets.push(ticket);
    return ticket;
  }

  callNext(type: TicketType, desk: number): Ticket | null {
    const ticket = this.tickets.find((t) => t.type === type && !t.attended);
    if (!ticket) return null;

    ticket.attended = true;
    ticket.calledAt = new Date();
    ticket.desk = desk;

    const lastFive = this.tickets.filter((t) => t.attended).slice(-5);
    this.calledTickets$.next(lastFive);

    return ticket;
  }

  getLastFiveCalled() {
    return this.calledTickets$.asObservable();
  }
}
