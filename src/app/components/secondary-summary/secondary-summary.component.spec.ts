import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondarySummaryComponent } from './secondary-summary.component';

describe('PrimarySummaryComponent', () => {
  let component: SecondarySummaryComponent;
  let fixture: ComponentFixture<SecondarySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondarySummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondarySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
