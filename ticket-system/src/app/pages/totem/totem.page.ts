import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TicketService } from '../../services/ticket.service';

@Component({
  standalone: true,
  selector: 'app-totem',
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Totem de Atendimento</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-button expand="block" (click)="emit('SP')">
        Emitir Senha Prioritária (SP)
      </ion-button>

      <ion-button expand="block" (click)="emit('SG')">
        Emitir Senha Geral (SG)
      </ion-button>

      <ion-button expand="block" (click)="emit('SE')">
        Retirada de Exames (SE)
      </ion-button>

      <h2 *ngIf="lastTicket" style="margin-top: 30px;">Última Emitida:</h2>
      <ion-card *ngIf="lastTicket">
        <ion-card-content>
          <h1>{{ lastTicket.id }}</h1>
        </ion-card-content>
      </ion-card>
    </ion-content>
  `,
  imports: [IonicModule, CommonModule],
})
export class TotemPage {
  lastTicket: any = null;

  constructor(private ticketService: TicketService) {}

  emit(type: any) {
    this.lastTicket = this.ticketService.generateTicket(type);
  }
}
