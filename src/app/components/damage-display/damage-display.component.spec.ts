import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamageDisplayComponent } from './damage-display.component';
import { MaterialModule } from 'app/shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DamageDisplayComponent', () => {
  let component: DamageDisplayComponent;
  let fixture: ComponentFixture<DamageDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule],
      declarations: [DamageDisplayComponent]
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
