import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarySummaryComponent } from './primary-summary.component';

describe('PrimarySummaryComponent', () => {
  let component: PrimarySummaryComponent;
  let fixture: ComponentFixture<PrimarySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimarySummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimarySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
