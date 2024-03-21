import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { Timezone } from '../timezone';

@Component({
  selector: 'app-world-day-night-view',
  standalone: true,
  imports: [],
  templateUrl: './world-day-night-view.component.html',
  styleUrl: './world-day-night-view.component.css'
})
export class WorldDayNightViewComponent implements AfterViewInit {
  @Input({ required: true }) timezones: Timezone[];
  @ViewChild("worldmap") worldMap: ElementRef<HTMLElement>;
  hourToColor: string[] = ["#001c41",
    "#002e5b",
    "#00356b",
    "#013c68",
    "#003964",
    "#005376",
    "#065981",
    "#0e87a6",
    "#60c4c4",
    "#55bbc0",
    "#c0e3c2",
    "#e3e174",
    "#fac859",
    "#fec76c",
    "#fdaf5c",
    "#fca959",
    "#f27c72",
    "#d36586",
    "#663183",
    "#4c247d",
    "#321a71",
    "#212565",
    "#070e42",
    "#020e40"];
  constructor(private renderer: Renderer2) {
    this.timezones = [] as Timezone[]
    this.worldMap = {} as ElementRef<HTMLElement>
  }
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    // this.renderer.setStyle(this.worldMap.nativeElement, 'fill', "blue")
    this.colorSVGByTime()
    this.attachMouseOverEvent()
  }
  attachMouseOverEvent(): void {
    function attachMouseOver(elm: SVGPathElement) {
      elm.addEventListener('mouseover', function (event: MouseEvent) {
        if (event.target === null) {
          return
        }
        let htmlElement: HTMLElement = event.target as HTMLElement
        console.log(htmlElement.attributes.getNamedItem("title")?.value)
      });
    }
    Array.from(this.worldMap.nativeElement.getElementsByTagName("path")).forEach((ele: SVGPathElement) => {
      attachMouseOver(ele)
    })
  }
  colorSVGByTime(): void {
    function getDateOfCountryBy(gmtOffset: number) {
      let utcDate = new Date()
      let date = new Date(utcDate.getUTCFullYear(), utcDate.getUTCMonth(), utcDate.getUTCDate(), utcDate.getUTCHours(), utcDate.getUTCMinutes(), utcDate.getUTCSeconds() + gmtOffset)
      return date
    }

    this.timezones.forEach((timezone) => {
      let element = this.worldMap.nativeElement.querySelector(`#${timezone.countryCode}`)
      let date = getDateOfCountryBy(timezone.gmtOffset)
      if (element === null) {
        return
      }
      // console.log(timezone.countryName, date.getHours(), this.hourToColor[date.getHours()])
      this.renderer.setStyle(element, "fill", this.hourToColor[date.getHours()])
    })
  }
}
