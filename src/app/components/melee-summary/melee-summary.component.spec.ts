import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeleeSummaryComponent } from './melee-summary.component';

describe('PrimarySummaryComponent', () => {
  let component: MeleeSummaryComponent;
  let fixture: ComponentFixture<MeleeSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeleeSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeleeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
