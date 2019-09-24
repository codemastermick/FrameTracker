import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondariesDetailComponent } from './secondaries-detail.component';
import { MaterialModule } from 'app/shared/material.module';

describe('SecondariesDetailComponent', () => {
  let component: SecondariesDetailComponent;
  let fixture: ComponentFixture<SecondariesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [SecondariesDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondariesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
