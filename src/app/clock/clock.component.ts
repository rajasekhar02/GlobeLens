import { AfterViewInit, Component, Directive, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Timezone } from '../timezone';


@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent implements OnInit {
  @Input({ required: true }) timezone: Timezone;
  constructor(private renderer: Renderer2) {
    this.timezone = {} as Timezone
  }
  ngOnInit(): void {

  }
}
