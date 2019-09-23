import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarframeDetailComponent } from './warframe-detail.component';
import { MaterialModule } from 'app/shared/material.module';

describe('WarframesDetailComponent', () => {
  let component: WarframeDetailComponent;
  let fixture: ComponentFixture<WarframeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [WarframeDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarframeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
