import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

import { ClockContainerComponent } from './app/clock-container/clock-container.component';
import { appConfig } from './app.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClockContainerComponent],
  template: `
    <app-clock-container></app-clock-container>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, appConfig);
