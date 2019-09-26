import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribComponent } from './contrib.component';
import { MaterialModule } from 'app/shared/material.module';

describe('ContribComponent', () => {
  let component: ContribComponent;
  let fixture: ComponentFixture<ContribComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ContribComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
