import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WfSummaryComponent } from './wf-summary.component';

describe('WfSummaryComponent', () => {
  let component: WfSummaryComponent;
  let fixture: ComponentFixture<WfSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WfSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WfSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
