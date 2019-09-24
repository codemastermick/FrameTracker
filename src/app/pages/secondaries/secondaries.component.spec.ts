import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondariesComponent } from './secondaries.component';
import { MaterialModule } from 'app/shared/material.module';

describe('SecondariesComponent', () => {
  let component: SecondariesComponent;
  let fixture: ComponentFixture<SecondariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [SecondariesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
