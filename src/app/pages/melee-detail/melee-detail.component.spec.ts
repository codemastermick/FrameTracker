import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeleeDetailComponent } from './melee-detail.component';
import { MaterialModule } from 'app/shared/material.module';

describe('MeleeDetailComponent', () => {
  let component: MeleeDetailComponent;
  let fixture: ComponentFixture<MeleeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [MeleeDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeleeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
