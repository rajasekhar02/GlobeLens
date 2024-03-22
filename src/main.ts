import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

import { ClockContainerComponent } from './app/clock-container/clock-container.component';
import { appConfig } from './app/app.config';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RouterLinkActive],
  template: `
    <h1>Angular Router App</h1>
    <nav>
      <ul>
        <li><a routerLink="/world-clock" routerLinkActive="active" ariaCurrentWhenActive="page">World Clock</a></li>
        <!-- <li><a routerLink="/second-component" routerLinkActive="active" ariaCurrentWhenActive="page">Second Component</a></li> -->
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, appConfig);
