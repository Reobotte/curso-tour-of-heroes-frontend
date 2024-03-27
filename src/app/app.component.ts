import { Component } from '@angular/core';
import { MenuItem } from './core/models/menu-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tour of Heroes';
  menuItens: MenuItem[] = [
    {
      icon: 'dashboard',
      router: '/dashboard',
      toolTipText: 'Dashboard'
    },
    {
      icon: 'sports_martial_arts',
      router: '/heroes',
      toolTipText: 'Hérois'
    }
  ];
}
