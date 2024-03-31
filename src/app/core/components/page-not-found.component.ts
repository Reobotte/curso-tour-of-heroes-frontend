import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <mat-card>
      <mat-card-title>404: Página não encontrada!</mat-card-title>

      <mat-card-content>
        Não foi possível encontrar essa página, nem mesmo com visão de Ráio-X!
      </mat-card-content>

      <mat-card-actions>
        <button mat-raised-button color="primary" routerLink="/">
          Ir para página principal...
        </button>
      </mat-card-actions>
    </mat-card>`,
  styles: [
    `
      :host {
        text-align: center;
      }
    `
  ]
})
export class PageNotFoundComponent {

}
