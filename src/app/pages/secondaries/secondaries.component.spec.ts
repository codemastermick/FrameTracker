import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondariesComponent } from './secondaries.component';
import { MaterialModule } from 'app/shared/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { DispositionModule } from 'app/components/disposition/disposition.module';
import { SecondarySummaryComponent } from 'app/components/secondary-summary/secondary-summary.component';
import { Router } from '@angular/router';

describe('SecondariesComponent', () => {
  let component: SecondariesComponent;
  let router: Router;
  let fixture: ComponentFixture<SecondariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule, DispositionModule],
      declarations: [SecondariesComponent, SecondarySummaryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondariesComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
