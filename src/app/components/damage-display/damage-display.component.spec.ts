import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamageDisplayComponent } from './damage-display.component';

describe('DamageDisplayComponent', () => {
  let component: DamageDisplayComponent;
  let fixture: ComponentFixture<DamageDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamageDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamageDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
