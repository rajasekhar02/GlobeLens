import { Component, OnInit } from '@angular/core';
import { TimezoneService } from '../timezones.service';
import { Timezone } from '../timezone';
import { CommonModule } from '@angular/common';
import { ClockComponent } from '../clock/clock.component';
import { WorldDayNightViewComponent } from '../world-day-night-view/world-day-night-view.component';

@Component({
  selector: 'app-clock-container',
  standalone: true,
  imports: [CommonModule, ClockComponent, WorldDayNightViewComponent],
  templateUrl: './clock-container.component.html',
  styleUrl: './clock-container.component.css',
  providers: [TimezoneService]
})
export class ClockContainerComponent implements OnInit {
  data: Timezone[] | undefined;
  error: any;
  constructor(private timezoneService: TimezoneService) { }
  ngOnInit(): void {
    this.showData()
  }
  showData() {
    let tempData = localStorage.getItem("timezones")
    if (!tempData) {
      this.timezoneService.getTimezones().subscribe({
        next: data => {
          localStorage.setItem("timezones", JSON.stringify(data))
          this.data = { ...data }
        },
        error: error => this.error = error
      })
    } else {
      this.data = JSON.parse(tempData)
    }
  }
}
