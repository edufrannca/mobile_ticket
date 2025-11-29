export type TicketType = 'SP' | 'SG' | 'SE';

export interface Ticket {
  id: string;
  type: TicketType;
  createdAt: Date;
  calledAt?: Date;
  desk?: number;
  attended?: boolean;
}
