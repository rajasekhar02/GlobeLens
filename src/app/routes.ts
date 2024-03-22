import { Routes } from '@angular/router';
import { ClockContainerComponent } from './clock-container/clock-container.component';

export const routes: Routes = [
    { path: 'world-clock', component: ClockContainerComponent }
];

export default {
    routes
}