import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TicketService } from '../../services/ticket.service';

@Component({
  standalone: true,
  selector: 'app-painel',
  template: `
    <ion-header>
      <ion-toolbar color="secondary">
        <ion-title>Painel de Chamadas</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-list>
        <ion-item *ngFor="let t of lastFive">
          <ion-label>
            <h2>{{ t.id }}</h2>
            <p>Guichê: {{ t.desk }}</p>
            <p>Hora: {{ t.calledAt | date : 'shortTime' }}</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  `,
  imports: [IonicModule, CommonModule],
})
export class PainelPage {
  lastFive: any[] = [];

  constructor(private ticketService: TicketService) {
    this.ticketService.getLastFiveCalled().subscribe((list) => {
      this.lastFive = list;
    });
  }
}
