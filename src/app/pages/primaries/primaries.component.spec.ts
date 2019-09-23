import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimariesComponent } from './Primaries.component';
import { MaterialModule } from 'app/shared/material.module';

describe('PrimariesComponent', () => {
  let component: PrimariesComponent;
  let fixture: ComponentFixture<PrimariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [PrimariesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
