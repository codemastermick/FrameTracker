import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelicSummaryComponent } from './relic-summary.component';

describe('RelicSummaryComponent', () => {
  let component: RelicSummaryComponent;
  let fixture: ComponentFixture<RelicSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelicSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelicSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
