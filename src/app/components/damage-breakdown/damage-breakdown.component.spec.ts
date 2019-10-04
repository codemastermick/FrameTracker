import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamageBreakdownComponent } from './damage-breakdown.component';

describe('DamageBreakdownComponent', () => {
  let component: DamageBreakdownComponent;
  let fixture: ComponentFixture<DamageBreakdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamageBreakdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamageBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
