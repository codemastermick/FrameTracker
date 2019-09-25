import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeleeDetailComponent } from './melee-detail.component';
import { MaterialModule } from '../../shared/material.module';
import { DispositionModule } from '../../components/disposition/disposition.module';

describe('MeleeDetailComponent', () => {
  let component: MeleeDetailComponent;
  let fixture: ComponentFixture<MeleeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, DispositionModule],
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
