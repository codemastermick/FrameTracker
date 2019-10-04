import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondariesComponent } from './secondaries.component';
import { MaterialModule } from 'app/shared/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { DispositionModule } from 'app/components/disposition/disposition.module';
import { SecondarySummaryComponent } from 'app/components/secondary-summary/secondary-summary.component';
import { Router } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PrimarySummaryModule } from 'app/components/primary-summary/primary-summary.module';
import { SecondarySummaryModule } from 'app/components/secondary-summary/secondary-summary.module';

describe('SecondariesComponent', () => {
  let component: SecondariesComponent;
  let router: Router;
  let fixture: ComponentFixture<SecondariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule,
        DispositionModule,
        ScrollingModule,
        SecondarySummaryModule
      ],
      declarations: [SecondariesComponent]
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
