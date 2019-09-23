import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarframesComponent } from './warframes.component';
import { MaterialModule } from 'app/shared/material.module';

describe('WarframesComponent', () => {
  let component: WarframesComponent;
  let fixture: ComponentFixture<WarframesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [WarframesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarframesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
