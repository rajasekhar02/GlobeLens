import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldDayNightViewComponent } from './world-day-night-view.component';

describe('WorldDayNightViewComponent', () => {
  let component: WorldDayNightViewComponent;
  let fixture: ComponentFixture<WorldDayNightViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldDayNightViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorldDayNightViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
