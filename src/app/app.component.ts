import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { NavigationBarComponent } from './components';
import { FooterComponent } from './components';
import { MainContentComponent } from './components';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavigationBarComponent,
    FooterComponent,
    MainContentComponent,
    MatGridListModule,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  checkOverlay() {
    return this.router.url !== '/about';
  }
}
