import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- adicione isto
import { TicketService } from '../../services/ticket.service';

@Component({
  standalone: true,
  selector: 'app-atendente',
  template: `
    <ion-header>
      <ion-toolbar color="tertiary">
        <ion-title>Atendente</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-item>
        <ion-label position="stacked">Número do Guichê</ion-label>
        <ion-input type="number" [(ngModel)]="desk"></ion-input>
      </ion-item>

      <ion-button expand="block" (click)="call('SP')">
        Chamar Prioritária (SP)
      </ion-button>

      <ion-button expand="block" (click)="call('SE')">
        Chamar Exames (SE)
      </ion-button>

      <ion-button expand="block" (click)="call('SG')">
        Chamar Geral (SG)
      </ion-button>

      <ion-card *ngIf="lastCalled">
        <ion-card-content>
          <h2>Última chamada</h2>
          <h1>{{ lastCalled.id }}</h1>
        </ion-card-content>
      </ion-card>
    </ion-content>
  `,
  imports: [IonicModule, CommonModule, FormsModule], // <-- aqui
})
export class AtendentePage {
  desk = 1;
  lastCalled: any = null;

  constructor(private ticketService: TicketService) {}

  call(type: any) {
    this.lastCalled = this.ticketService.callNext(type, this.desk);
  }
}
